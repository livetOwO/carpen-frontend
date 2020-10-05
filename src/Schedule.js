import React from 'react';

function Schedule(props) {
	const {time, work} = props.data;

	const deleteItem = () => props.delete(props.idx);

	return (
		<div className="Schedule">
			<div>
				<span>{time}</span>
				<span>{work}</span>
			</div>
			<div>
				<button onClick={() => props.modal(props.idx, true)}>수정</button>
				<button onClick={deleteItem}>삭제</button>
			</div>
		</div>
	);
}

export default Schedule;
