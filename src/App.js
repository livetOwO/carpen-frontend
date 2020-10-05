import React, { useRef, useState } from 'react';
import './App.css';
import Calendar from './Calendar';
import Scheduler from './Scheduler';
import Modal from './Modal';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('normal');
  const childRef = useRef();

  const handleSelect = date => setSelectedDate(date);
  const handleModalClose = () => setModalShow(false);

  function handleModal(message, isEdit) {
    setModalMessage(message);
    if (isEdit) {
      setModalType('edit')
    } else {
      setModalType('normal');
    }
    setModalShow(true);
  }

  function handleCallback(time, work) {
    console.log(time,work);
    
    if (!time || !work) {
      handleModal('time 또는 work가 비어있습니다.');
      return false;
    }
    
    setModalShow(false);
    childRef.current.edit(modalMessage, time, work);
  }

  return (
    <div className="App">
      <div className="space-between">
        <Calendar selectDate={handleSelect} selectedDate={selectedDate} />
        <Scheduler ref={childRef} selectedDate={selectedDate} modal={handleModal} />
      </div>
      {isModalShow && <Modal message={modalMessage} type={modalType} close={handleModalClose} callback={handleCallback} />}
    </div>
  );
}

export default App;
