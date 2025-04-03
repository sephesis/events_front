import React, { useState, useEffect } from "react";

import Button from "./Button/Button";
import { json_path } from '../constants.js';
import Checkbox from './Checkbox';

const Step2 = ({formData, categories, onNext, onBack, onChange }) => {

    return (
        <div className="form-group">
            <h1>Выберите деятельность</h1>
            {categories.length && categories.map(item => (
                <Checkbox onChange={onChange} formData={formData} key={item.id} id={item.id} value={item.slug} text={item.name} />
            ))}
             <Button customClass={'button__back'} onClick={onBack}>Назад</Button>
            <Button customClass={'button__main'} onClick={onNext}>Далее</Button>
        </div>
    );
}

export default Step2;