import React from 'react';
import Card from './Card/Card';

const CardList = ({ data }) => {
    return (
        <div className="row">
            <div className="card-container">
            {data.length > 0 ? (
              
                data.map(card => (
                    <Card
                        card={card}
                    />
                ))
            ) : (
                <p>Событий нет</p>
            )}
            </div>
        </div>
    );
}

export default CardList;