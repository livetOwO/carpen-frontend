import React, { useEffect, useState } from 'react';

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
            {startDay}
            {endDate}
        </div>
    )
}

export default Calendar;