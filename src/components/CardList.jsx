import React, { useState }  from 'react';
import Card from './Card/Card';

const CardList = ({ data }) => {

    const [selectedCoords, setSelectedCoords] = useState([]);

    const handleCardSelect = (cardId, coords, isSelected) => {
        if (isSelected) {
            setSelectedCoords((prev) => [...prev, coords]);
        } else {
            setSelectedCoords((prev) => prev.filter((c) => c !== coords));
        }

        console.log(selectedCoords)
    };

    return (
        <div className="row">
            {data.length > 0 ? (
              
                data.map(card => (
                    <Card
                        key={card.id}
                        card={card}
                        onSelect={handleCardSelect}
                    />
                ))
            ) : (
                <p>Событий нет</p>
            )}
        </div>
    );
}

export default CardList;