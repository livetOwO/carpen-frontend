import React, {useState } from 'react';
import STR_DAY from './define';
import AddSchedule from './AddSchedule';

function Scheduler(props) {
	const selectedDate = props.selectedDate;
    const [isFormShow, setFormShow] = useState(false);

    const handleClose = () => setFormShow(false);
    
    function handleAdd(time, work) {
        let data = {
            date: selectedDate.toISOString().subString(0,10),
            time,
            work
        }

        console.log(JSON.stringify(data));
    }

    return (
        <div className="Scheduler">
            {STR_DAY[selectedDate.getDay()] + ' ' + selectedDate.getDate()}
			{ isFormShow && <AddSchedule add={handleAdd} close={handleClose} modal={props.modal} />}
            <button onClick={() => setFormShow(true)}>Add</button>
            <button>Clear All</button>
        </div>
    )
}

export default Scheduler;