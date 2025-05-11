import React, { useEffect, useState } from 'react';
import ProgressBar from './components/ProgressBar';
import CardGrid from './components/CardGrid';
import { ChecklistItem } from './types';
import axios from 'axios';


const App = () => {
  const [checklist, setChecklist] = useState<ChecklistItem[]>([]);

  useEffect(() => {
    const fetchChecklist = async () => {
      const appScriptUrl = import.meta.env.VITE_APP_SCRIPT_URL;
      try {
        const res = await axios.get<ChecklistItem[]>(`${appScriptUrl}?action=read`);
        setChecklist(res.data);
      } catch (err) {
        console.error('Failed to fetch checklist:', err);
      }
    };

    fetchChecklist();
  }, []);
  
  const handleToggle = (id: number) => {
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 bg-gray-100">
      <h1 className="text-3xl font-bold">Checklist</h1>
      <ProgressBar />
      <CardGrid checklist={checklist} onToggle={handleToggle} />
    </div>
  );
}
export default App;
