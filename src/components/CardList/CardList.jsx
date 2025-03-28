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
            <div className="col-lg-12 d-flex justify-content-end ">
            <Button customClass='button__small button__margin ' onClick={toggleViewMode}>
                {
                    isListView ?
                        (
                            <img
                                src="/images/card.svg"
                                alt="Карточки"
                             
                            />
                        )
                        :
                        (
                            <img
                                src="/images/row.svg"
                                alt="Список"
                                
                            />
                        )
                } </Button>
                </div>
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