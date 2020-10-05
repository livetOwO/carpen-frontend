import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import STR_DAY from './define';
import Schedule from './Schedule';
import AddSchedule from './AddSchedule';
import './Scheduler.css';

const Scheduler = forwardRef((props, ref) => {
	const selectedDate = props.selectedDate;
    const [isFormShow, setFormShow] = useState(false);
    const [schedule, setSchedule] = useState([]);
    const [title, setTitle] = useState('');

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

    useImperativeHandle(ref, () => ({
        edit(idx, time, work) {
            let data = { ...schedule[idx] };

            data.time = time;
            data.work = work;

            schedule.splice(idx, 1, data);

            localStorage.setItem('schedule', JSON.stringify(schedule));
            setSchedule([...schedule]);
        }
    }));

    useEffect(() => {
        setTitle(dateToString(selectedDate).replace('-', '.') + '.(' + STR_DAY[selectedDate.getDay()]+')');

        if (schedule.length === 0) {
            let tmp = JSON.parse(localStorage.getItem('schedule'));
            if (tmp.length !== 0) {
                setSchedule(tmp);
            }
        }
    }, [selectedDate, schedule]);

    return (
        <div className="Scheduler">
            <div>
                <h1>{STR_DAY[selectedDate.getDay()] + ' ' + selectedDate.getDate()}</h1>
                <div className="schedule-list">
                    {schedule.map((data, i) => dateToString(selectedDate) === data.date && 
                    <Schedule key={i} idx={i} data={data} delete={handleDelete} modal={props.modal} />)}
                </div>
            </div>
            <div>
                <button onClick={() => setFormShow(true)}>Add</button>
                <button onClick={clearAll}>Clear All</button>
            </div>
            {isFormShow && <AddSchedule title={title} add={handleAdd} close={handleClose} modal={props.modal} />}
        </div>
    )
})

export default Scheduler;