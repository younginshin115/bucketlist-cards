import React from "react";
import Card from "./Card";
import { ChecklistItem } from "../types";

const colorNames = [
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "fuchsia",
  "pink",
  "rose",
  "purple",
  "stone",
  "zinc",
  "gray",
];

const bgColors = colorNames.map((color) => `bg-${color}-100`);
const borderColors = colorNames.map((color) => `border-${color}-300`);

type CardGridProps = {
  checklist: ChecklistItem[];
  onToggle: (id: number) => void;
};

const CardGrid = ({ checklist, onToggle }: CardGridProps) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {checklist.map((item, index) => {
        const row = Math.floor(index / 8);
        const colorIndex = row % colorNames.length;

        return (
          <Card
            key={item.id}
            id={item.id}
            title={item.activity}
            isChecked={item.is_done}
            onToggle={onToggle}
            bgColor={bgColors[colorIndex]}
            borderColor={borderColors[colorIndex]}
          />
        );
      })}
    </div>
  );
};

export default CardGrid;
