import React, {useState} from 'react';

function AddSchedule(props) {
	const [time, setTime] = useState(undefined);
	const [work, setWork] = useState(undefined);

	function submit(e) {
		e.preventDefault();

		if (!time | !work) {
			props.modal('time 또는 work가 비어있습니다.');
			return false;
		}

		props.add(time, work);
		props.close();
	}

	return (
		<div className="AddSchedule">
			<h2>{props.title}</h2>
			<form action="#AddSchedule" onSubmit={submit}>
				<label><h3>time</h3> <input type="time" onChange={e => setTime(e.target.value)} /></label>
				<label><h3>work</h3> <input type="text" onInput={e => setWork(e.target.value)} /></label>
				<div>
					<input type="submit" value="Add" />
					<input type="button" value="Cancel" onClick={props.close} />
				</div>
			</form>
		</div>
	);
}

export default AddSchedule;
