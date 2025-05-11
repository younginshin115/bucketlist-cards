import React from "react";

type ChecklistItem = {
  id: number;
  activity: string;
  category: string;
  is_done: boolean;
  updated_at: string;
};

type ProgressBarProps = {
  checklist: ChecklistItem[];
};

const ProgressBar: React.FC<ProgressBarProps> = ({ checklist }) => {
  const total = checklist.length;
  const done = checklist.filter((item) => item.is_done).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className="w-full flex gap-x-4 items-center py-5">
      <span className="text-sm font-bold text-red-500">{percent}%</span>
      <div className="w-full rounded-full bg-gray-100 h-4">
        <div
          className="h-full rounded-full transition-all duration-300 bg-red-300"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
