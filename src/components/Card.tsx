import React from 'react';

type CardProps = {
    id: number;
    title: string;
    isChecked: boolean;
    onToggle: (id: number) => void;
  };

  const Card = ({ id, title, isChecked, onToggle }: CardProps) => {
    return (
      <div
        onClick={() => onToggle(id)}
        className={`p-4 border rounded-xl text-center cursor-pointer transition duration-300 ${
          isChecked ? 'bg-green-200' : 'bg-white'
        }`}
      >
        <p className="text-sm font-medium">{title}</p>
        {isChecked && <p className="text-xs mt-1">✅ 완료</p>}
      </div>
    );
  };

export default Card