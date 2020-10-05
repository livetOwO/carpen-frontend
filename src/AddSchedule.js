import React, {useState} from 'react';

function AddSchedule(props) {
	const [time, setTime] = useState(undefined);
	const [work, setWork] = useState(undefined);

	const close = () => props.close();

	function submit(e) {
		e.preventDefault();

		close();
	}

	return (
		<div className="AddSchedule">
			<form action="#AddSchedule" onSubmit={submit}>
				<label><span>time</span> <input type="time" value={time} onChange={e => setTime(e.target.value)} /></label>
				<label><span>work</span> <input type="text" value={work} onInput={e => setWork(e.target.value)} /></label>
				<input type="submit" value="Add" />
				<input type="button" value="Cancel" onClick={close} />
			</form>
		</div>
	);
}

export default AddSchedule;
