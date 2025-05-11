import React from 'react';

type CardProps = {
    id: number;
    isChecked: boolean;
    onToggle: (id: number) => void;
  };

const Card = ({ id, isChecked, onToggle }: CardProps) => {
    return (
        <div
          className={`w-full aspect-square flex items-center justify-center border rounded-xl cursor-pointer transition-transform duration-300 ${
            isChecked ? 'bg-green-300 rotate-y-180' : 'bg-white'
          }`}
          onClick={() => onToggle(id)}
        >
          <span className="text-xl font-semibold">{isChecked ? '✅' : id}</span>
        </div>
      );
}

export default Card