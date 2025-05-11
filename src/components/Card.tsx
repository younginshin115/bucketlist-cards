import React from "react";

type CardProps = {
  id: number;
  title: string;
  isChecked: boolean;
  onToggle: (id: number) => void;
  bgColor: string;
  borderColor: string;
};

const Card = ({
  id,
  title,
  isChecked,
  onToggle,
  bgColor,
  borderColor,
}: CardProps) => {
  return (
    <div
      onClick={() => onToggle(id)}
      className={`w-full h-20 px-7 rounded-xl cursor-pointer transition duration-300 
          ${
            isChecked
              ? `${bgColor} border ${borderColor} inset-shadow-xs hover:inset-shadow-sm`
              : "bg-white border border-gray-200 shadow-sm hover:shadow-md"
          }
        `}
    >
      <div className="flex items-center h-full text-sm font-medium text-gray-800">
        {title}
      </div>
    </div>
  );
};

export default Card;
