import React, { useState } from 'react';
import './Modal.css';

function Modal(props) {
    const [time, setTime] = useState(undefined);
    const [work, setWork] = useState(undefined);
    const [view, setView] = useState(0);

    function edit() {
        props.callback(time,work);
    }

    return (
        <div className="Modal" onClick={props.close}>
            <div className="container" onClick={e => e.stopPropagation()}>
                <div className="title space-between">
                    {props.type === 'edit' ?
                        <h2>스케쥴 수정</h2>
                        :
                        <h2>알림</h2>
                    }
                    <button onClick={props.close}>X</button>
                </div>
                {props.type === 'edit' ? (
                    <div>
                        <div className={view === 1 ? 'hide' : undefined}>
                            <input type="time" onChange={e => setTime(e.target.value)} />
                            <button onClick={() => setView(1)}>다음</button>
                        </div>
                        <div className={view === 0 ? 'hide' : undefined}>
                            <input type="text" onInput={e => setWork(e.target.value)} />
                            <button onClick={() => setView(0)}>이전</button>
                            <button onClick={edit}>완료</button>
                        </div>
                    </div>
                ) : (
                    <p>{props.message}</p>
                )}
            </div>
        </div>
    );
}

export default Modal;
