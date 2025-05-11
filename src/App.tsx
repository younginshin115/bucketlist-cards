import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import CardGrid from './components/CardGrid';

const App = () => {
  const [cardStates, setCardStates] = useState(Array(100).fill(false));

  const handleToggle = (id: number) => {
    setCardStates(prev =>
      prev.map((val, i) => (i === id - 1 ? !val : val))
    );
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 bg-gray-100">
      <h1 className="text-3xl font-bold">Checklist</h1>
      <ProgressBar />
      <CardGrid cardStates={cardStates} onToggle={handleToggle} />
    </div>
  );
}
export default App;
