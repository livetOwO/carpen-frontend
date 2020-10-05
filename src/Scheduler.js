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

    function handleDelete(targetIdx) {
        schedule.splice(targetIdx, 1);
        
        localStorage.setItem('schedule', JSON.stringify(schedule));
        setSchedule([...schedule]);
    }

    function clearAll() {
        const newData = schedule.filter(data => dateToString(selectedDate) !== data.date);
        localStorage.setItem('schedule', JSON.stringify(newData));
        setSchedule(newData);
    }

    useEffect(() => {
        if (schedule.length === 0) {
            let tmp = JSON.parse(localStorage.getItem('schedule'));
            if (tmp.length !== 0) {
                setSchedule(tmp);
            }
        }
    }, [schedule]);

    return (
        <div className="Scheduler">
            {STR_DAY[selectedDate.getDay()] + ' ' + selectedDate.getDate()}
            {schedule.map((data, i) => dateToString(selectedDate) === data.date && <Schedule key={i} idx={i} data={data} delete={handleDelete} />)}
			{isFormShow && <AddSchedule add={handleAdd} close={handleClose} modal={props.modal} />}
            <button onClick={() => setFormShow(true)}>Add</button>
            <button onClick={clearAll}>Clear All</button>
        </div>
    )
}

export default Scheduler;