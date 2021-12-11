import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ dropDate }) => {
    const [timerString, setTimerString] = useState('');

    //real time countdown
    useEffect(() => {
        console.log("Setting interval...");

        //use setInterval to run this code every second
        const interval = setInterval(() => {
            const currentDate = new Date().getTime();
            const distance = dropDate - currentDate;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimerString(`${days}d ${hours}h ${minutes}m ${seconds}s`);

            //if distance passes zero then it means it is mint time
            if (distance < 0) {
                console.log("Clearing interval...");
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    })

    return (
        <div className="timer-container">
            <p className="timer-header">Candy Drop Starting In</p>
            {timerString && <p className="timer-value">{`⏰ ${timerString}`}</p>}
        </div>
    );
};

export default CountdownTimer;