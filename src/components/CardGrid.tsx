import React from 'react'
import Card from './Card';
import { ChecklistItem } from '../types';

type CardGridProps = {
    checklist: ChecklistItem[];
    onToggle: (id: number) => void;
  };

  const CardGrid = ({ checklist, onToggle }: CardGridProps) => {
    return (
      <div className="grid grid-cols-5 gap-4">
        {checklist.map(item => (
          <Card
            key={item.id}
            id={item.id}
            title={item.activity}
            isChecked={item.is_done}
            onToggle={onToggle}
          />
        ))}
      </div>
    );
  };

export default CardGrid