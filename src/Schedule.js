import React from 'react';

function Schedule(props) {
	const {time, work} = props.data;

	return (
		<div className="Schedule">
			<div>
				<span>{time}</span>
				<span>{work}</span>
			</div>
			<div>
				<button>수정</button>
				<button>삭제</button>
			</div>
		</div>
	);
}

export default Schedule;
