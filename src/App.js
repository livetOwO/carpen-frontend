import React, { useState } from 'react';
import './App.css';
import Calendar from './Calendar';
import Scheduler from './Scheduler';
import Modal from './Modal';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSelect = date => setSelectedDate(date);
  const handleModal = message => setModalShow(true) || setModalMessage(message);
  const handleModalClose = () => setModalShow(false);

  return (
    <div className="App">
      <div className="space-between">
        <Calendar selectDate={handleSelect} selectedDate={selectedDate} />
        <Scheduler selectedDate={selectedDate} modal={handleModal} />
      </div>
      {isModalShow && <Modal message={modalMessage} close={handleModalClose} />}
    </div>
  );
}

export default App;
