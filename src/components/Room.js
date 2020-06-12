import React, { useState } from 'react';
import './Room.css'



const Room = () => {
    let [isLit, setLit] = useState(true)
    let [isTemp, setTemp] = useState(22);

    return (
        <div className={`room ${isLit ? 'lit' : 'dark'}`}>
            <div>
                <p >Light is {isLit ? `lit, the room temperature is ${isTemp}.` : `dark`}</p>
                <button onClick={() => setLit(!isLit)}>Flip</button>
                <br />
                <button onClick={() => { setLit(isLit = true) }}>ON</button>
                <button onClick={() => { setLit(isLit = false) }}>OFF</button>
            </div>
            <div>

                <button onClick={() => { setTemp(++isTemp) }}>+</button>
                <button onClick={() => { setTemp(--isTemp) }}>-</button>

            </div>
        </div >
    );
};

export default Room;