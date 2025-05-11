import React from "react";

type CardProps = {
  id: number;
  title: string;
  isChecked: boolean;
  onToggle: (id: number) => void;
  bgColor: string;
};

const Card = ({ id, title, isChecked, onToggle, bgColor }: CardProps) => {
  return (
    <div
      className={`w-full h-20 rounded-xl px-4 py-2 cursor-pointer border transition duration-300 
        ${isChecked ? "opacity-70" : ""}
        ${bgColor}`}
      onClick={() => onToggle(id)}
    >
      <div className="flex items-center justify-center h-full text-center text-sm font-medium px-2">
        {title}
      </div>
    </div>
  );
};

export default Card;
