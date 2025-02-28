import React from 'react';
import Card from './Card';

const CardList = ({ data }) => {
    return (
        <div className="row">
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
    );
}

export default CardList;