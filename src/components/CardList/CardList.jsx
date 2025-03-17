import React, { useState } from 'react';
import Card from '../Card/Card';
import './CardList.css';
import Button from '../Button/Button';

const CardList = ({ data }) => {

    const [selectedCoords, setSelectedCoords] = useState([]);

    const [isListView, setIsListView] = useState(false);
    const handleCardSelect = (cardId, coords, isSelected) => {
        if (isSelected) {
            setSelectedCoords((prev) => [...prev, coords]);
        } else {
            setSelectedCoords((prev) => prev.filter((c) => c !== coords));
        }
    };

    const toggleViewMode = () => {
        setIsListView((prev) => !prev); // Переключаем режим отображения
    };

    return (
        <div className="row">
            <Button customClass='button__small' onClick={toggleViewMode}> {isListView ? 'Показать карточки' : 'Показать списком'} </Button>
            {data.length > 0 ? (

                data.map(card => (
                    <Card
                        key={card.id}
                        card={card}
                        onSelect={handleCardSelect}
                        isListView={isListView}
                    />
                ))
            ) : (
                <p>Событий нет</p>
            )}
        </div>
    );
}

export default CardList;