import React, { useEffect, useState } from 'react';
import STR_DAY from './define';

function Calendar() {
    const [date, setDate] = useState(new Date());
    const [startDay, setStartDay] = useState(0);
    const [endDate, setEndDate] = useState(0);

    useEffect(() => {
        let tmpDate = new Date(date.getTime());

        tmpDate.setDate(1);
        setStartDay(tmpDate.getDay());

        tmpDate.setMonth(date.getMonth() + 1, 0);
        setEndDate(tmpDate.getDate());
    }, [date])

    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        {STR_DAY.map((day, i) => <th key={i}>{day}</th>)}
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Calendar;