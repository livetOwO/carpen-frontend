import React from 'react';
import './Modal.css';

function Modal(props) {
    return (
        <div className="Modal" onClick={props.close}>
            <div className="container" onClick={e => e.stopPropagation()}>
                <div className="title">
                    <h2>알림</h2>
                    <button>X</button>
                </div>
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default Modal;
