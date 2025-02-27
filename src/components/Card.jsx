import React from "react";

const Card = ({ cardId, cardName }) => {
    return (
        <div className="col-lg-3">
            <div className="card" key={cardId}>
                <div className="card-body">
                    <h5 className="card-title">{cardName}</h5>
                </div>
            </div>
        </div>
    );
}

export default Card;