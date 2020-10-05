import React, { useEffect, useState } from 'react';
import STR_DAY from './define';
import AddSchedule from './AddSchedule';

function Scheduler(props) {
	const selectedDate = props.selectedDate;
    const [isFormShow, setFormShow] = useState(false);

    const handleClose = () => setFormShow(false);

    return (
        <div className="Scheduler">
            {STR_DAY[selectedDate.getDay()] + ' ' + selectedDate.getDate()}
			{ isFormShow && <AddSchedule close={handleClose} />}
            <button onClick={() => setFormShow(true)}>Add</button>
            <button>Clear All</button>
        </div>
    )
}

export default Scheduler;