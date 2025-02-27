import React from 'react';
import Card from './Card';

const CardList = ({ data }) => {
    return (
        <div className="row">
            {data.length > 0 ? (
              
                data.map(card => (
                    console.log(card.name),
                    <Card
                        key={card.id}
                        cardId={card.id}
                        cardName={card.name}
                    />
                ))
            ) : (
                <p>Событий нет</p>
            )}
        </div>
    );
}

export default CardList;