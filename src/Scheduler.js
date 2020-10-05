import React, {useEffect, useState } from 'react';
import STR_DAY from './define';
import Schedule from './Schedule';
import AddSchedule from './AddSchedule';

function Scheduler(props) {
	const selectedDate = props.selectedDate;
    const [isFormShow, setFormShow] = useState(false);
    const [schedule, setSchedule] = useState([]);

    const dateToString = date => date.toISOString().substr(0, 10);
    const handleClose = () => setFormShow(false);

    function handleAdd(time, work) {
        let data = {
            date: dateToString(selectedDate),
            time,
            work
        }

        schedule.push(data);

        localStorage.setItem('schedule', JSON.stringify(schedule));

        setSchedule(schedule);
    }

    useEffect(() => {
        if (schedule.length === 0) {
            let tmp = localStorage.getItem('schedule');
            if (tmp) {
                setSchedule(JSON.parse(tmp));
            }
        }
    });

    return (
        <div className="Scheduler">
            {STR_DAY[selectedDate.getDay()] + ' ' + selectedDate.getDate()}
            {schedule.map((data,i) => dateToString(selectedDate) === data.date && <Schedule key={i} data={data} />)}
			{isFormShow && <AddSchedule add={handleAdd} close={handleClose} modal={props.modal} />}
            <button onClick={() => setFormShow(true)}>Add</button>
            <button>Clear All</button>
        </div>
    )
}

export default Scheduler;