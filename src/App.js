import React, { useState } from 'react';
import Calendar from './Calendar';
import Scheduler from './Scheduler';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handleSelect(date) {
    setSelectedDate(date);
  }

  return (
    <div className="App">
      <Calendar onSelect={handleSelect} selectedDate={selectedDate} />
      <Scheduler selectedDate={selectedDate} />
    </div>
  );
}

export default App;
