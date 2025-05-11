import React from 'react'
import Card from './Card';

const CardGrid = ({ cardStates, onToggle }) => {
    return (
      <div className="grid grid-cols-5 gap-4">
        {cardStates.map((isChecked, index) => (
          <Card key={index} id={index + 1} isChecked={isChecked} onToggle={onToggle} />
        ))}
      </div>
    );
  };

export default CardGrid