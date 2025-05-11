import React, { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import CardGrid from "./components/CardGrid";
import { ChecklistItem } from "./types";
import axios from "axios";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [checklist, setChecklist] = useState<ChecklistItem[]>([]);

  useEffect(() => {
    const fetchChecklist = async () => {
      const appScriptUrl = import.meta.env.VITE_APP_SCRIPT_URL;
      try {
        const res = await axios.get<ChecklistItem[]>(
          `${appScriptUrl}?action=read`
        );
        setChecklist(res.data);
      } catch (err) {
        console.error("Failed to fetch checklist:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChecklist();
  }, []);

  const handleToggle = async (id: number) => {
    const prevItem = checklist.find((item) => item.id === id);
    if (!prevItem) return;

    const updatedItem = { ...prevItem, is_done: !prevItem.is_done };

    // update ui first
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? updatedItem : item))
    );

    const appScriptUrl = import.meta.env.VITE_APP_SCRIPT_URL;

    try {
      const res = await axios.get<ChecklistItem[]>(
        `${appScriptUrl}?action=update&id=${updatedItem.id}&is_done=${updatedItem.is_done}`
      );
      console.log(res.data);
    } catch (err) {
      console.error("Failed to update checklist item:", err);
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="w-full h-full bg-gray-100">
      <div className="w-full h-full bg-white max-w-screen-lg mx-auto md:px-16 px-8 py-8">
        <h1 className="text-3xl font-bold uppercase text-center py-12">
          Checklist
        </h1>
        <ProgressBar checklist={checklist} />
        <CardGrid checklist={checklist} onToggle={handleToggle} />
      </div>
    </div>
  );
};
export default App;
