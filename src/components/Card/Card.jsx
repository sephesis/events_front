import React from "react";
import "./Card.css";

const Card = ({ card }) => {
    return (
        <div className="col-lg-3 mb-4">
            <div className="card card-custom" key={card.id}>
                <div className="card__top">
                    {/* {console.log(card.images[0].source.link)} */}
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