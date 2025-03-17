import React, { useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import CardList from "./CardList/CardList";
import { api_path } from "../constants";
import "../css/style.css";

const Form = ({}) => {

    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [responseData, setResponseData] = useState([]);
    const [title, setTitle] = useState(!isSubmitted ? 'Заполните форму' : 'Выберите мероприятия');
    

    const [formData, setFormData] = useState({
        city: '7700000000000',
        price: 0,
        areas: []
    });

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
    
        setFormData((prevData) => {
            if (checked) {
                return { ...prevData, areas: [...prevData.areas, value] };
            } else {
                return { ...prevData, areas: prevData.areas.filter(area => area !== value) };
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const queryParams = new URLSearchParams(formData).toString();
            const response = await fetch(api_path + 'events/?' + queryParams, {
                method: 'GET',
                header: { 'Content-Type': 'application/json' },
               // body: JSON.stringify(formData)
        });

        if (!response.ok) {
            console.log('Ошибка при отправке формы');
        }else{

            
            const eventData = await response.json();
         
            //console.log(eventData.events.length);
            setIsSubmitted(true); // 
            setResponseData(eventData.events)
        }

        } catch (error) {
            console.error(error);
        }
    };


    if (isSubmitted) {
        <h1>{title}</h1>
        return <CardList data={responseData} />;
    }

    return (
        <div>
        <h1>{title}</h1>
        <form>
            {currentStep === 1 && (<Step1 formData={formData} onChange={handleChange} onNext={nextStep}/>)}
            {currentStep === 2 && (<Step2 formData={formData} onChange={handleCheckboxChange} onNext={nextStep} onBack={prevStep}/>)}
            {currentStep === 3 && (<Step3 formData={formData} onChange={handleChange} onSubmit={handleSubmit} onBack={prevStep}/>)}
        </form>
        </div>
    );
}

export default Form;