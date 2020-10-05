import React, { useState } from 'react';
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
      <Calendar onSelect={handleSelect} selectedDate={selectedDate} />
      <Scheduler selectedDate={selectedDate} modal={handleModal} />
      {isModalShow && <Modal message={modalMessage} close={handleModalClose} />}
    </div>
  );
}

export default App;
