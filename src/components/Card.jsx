import React from "react";

const Card = ({ card }) => {
    return (
        <div className="col-lg-3">
            <div className="card" key={card.id}>
                <div className="card__top">
                    
                <span className="card__label">{card.age_restriction ? card.age_restriction : ''}</span>
                </div>
                <div className="card__bottom">

                    <h5 className="card-title">{card.short_title || card.title}</h5>
                    <p>{card.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;