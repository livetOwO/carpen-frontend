import React, { useEffect, useState } from 'react';
import STR_DAY from './define';

function Calendar(props) {
	const selectedDate = props.selectedDate;
    const [date, setDate] = useState(new Date());
    const [startDay, setStartDay] = useState(0);
    const [endDate, setEndDate] = useState(0);

    function getMonthString(date) {
        return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
    }

    function prevMonth(dateInst) {
        let result = new Date(dateInst.getTime());
        result.setMonth(result.getMonth() - 1, 1);
        return result;
    }

    function nextMonth(dateInst) {
        let result = new Date(dateInst.getTime());
        result.setMonth(result.getMonth() + 1, 1);
        return result;
    }

    function selectDate(dateInst, date) {
        let result = new Date(dateInst.getTime());
        result.setDate(date);

        props.selectDate(result);

        return result;
    }

    useEffect(() => {
        let tmpDate = new Date(date.getTime());

        tmpDate.setDate(1);
        setStartDay(tmpDate.getDay());

        tmpDate.setMonth(date.getMonth() + 1, 0);
        setEndDate(tmpDate.getDate());
    }, [date])

    return (
        <div className="Calendar">
            <h1>{date.getFullYear()}</h1>
            <h1>{getMonthString(date)}</h1>
            <button onClick={() => setDate(prevMonth(date))}>&lt;</button>
            <button onClick={() => setDate(nextMonth(date))}>&gt;</button>
            <table>
                <thead>
                    <tr>
                        {STR_DAY.map((day, i) => <th key={i}>{day}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {Array(6).fill(0).map((v,y) => (
                        <tr key={y}>
                            {Array(7).fill(0).map((v, x) => {
                                let num = y * 7 + x - startDay + 1;
                                let selected = false;

                                if (
                                    selectedDate.getFullYear() === date.getFullYear() &&
                                    selectedDate.getMonth() === date.getMonth() &&
                                    selectedDate.getDate() === num
                                ) {
                                    selected = true;
                                }

                                if (num > 0 && num <= endDate) {
                                    return <td key={x} className={selected ? 'selected' : undefined} onClick={() => selectDate(date, num)}>{num}</td>
                                } else {
                                    return <td key={x}></td>
                                }
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;