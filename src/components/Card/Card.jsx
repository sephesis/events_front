import React, { useState } from "react";
import "./Card.css";

const Card = ({ card, onSelect, isListView }) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {

        const newSelectedState = !isSelected;

        setIsSelected(newSelectedState);

        onSelect(card.id, card.location.coords, newSelectedState);
    };
    return (

        <div className={`${isListView ? ' col-lg-12 mb-4' : ' col-lg-3 mb-4 '}`}>
            <div data-id={card.id} className={`card ${isSelected ? "card--selected" : ""}`} onClick={handleClick} key={card.id}>
                <div className="card__top">
                    {card.images && (
                        <img src={card.images[0] ?? card.images[0].source.link} alt={card.title} className="card__image" />
                    )}
                    {card.age_restriction && (
                        <span className="card__label">{card.age_restriction}</span>
                    )}
                </div>
                <div className="card__bottom p-3">
                    <h5 className="card-title">{card.short_title || card.title}</h5>
                    <p className="card-text">{card.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;