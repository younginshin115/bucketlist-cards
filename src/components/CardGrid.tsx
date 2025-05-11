import React from "react";
import Card from "./Card";
import { ChecklistItem } from "../types";
import { pastelColors } from "../utils/colors";

type CardGridProps = {
  checklist: ChecklistItem[];
  onToggle: (id: number) => void;
};

const CardGrid = ({ checklist, onToggle }: CardGridProps) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {checklist.map((item, index) => {
        const row = Math.floor(index / 10);
        const bgColor = pastelColors[row % pastelColors.length];

        return (
          <Card
            key={item.id}
            id={item.id}
            title={item.activity}
            isChecked={item.is_done}
            onToggle={onToggle}
            bgColor={bgColor}
          />
        );
      })}
    </div>
  );
};

export default CardGrid;
