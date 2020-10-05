import React, { useEffect, useState } from 'react';
import STR_DAY from './define';

function Scheduler(props) {
	const selectedDate = props.selectedDate;
    const [isShowForm, setShowForm] = useState(false);

    const handleClose = () => setShowForm(false);
    
    return (
        <div className="Scheduler">
            {STR_DAY[selectedDate.getDay()] + ' ' + selectedDate.getDate()}
            <button onClick={() => setShowForm(true)}>Add</button>
            <button>Clear All</button>
        </div>
    )
}

export default Scheduler;