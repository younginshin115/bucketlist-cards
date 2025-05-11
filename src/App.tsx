import React from 'react';
import ProgressBar from './components/ProgressBar';
import Card from './components/Card';

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Checklist</h1>
      <ProgressBar />
      <Card />
    </div>
  );
}
export default App;
