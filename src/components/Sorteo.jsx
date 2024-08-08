// src/components/Sorteo.js
import React, { useEffect } from 'react';
import '../styles/Sorteo.css';

const Sorteo = ({ selectedNumbers, onNumberSelect, timer, setTimer, isPaused, togglePause }) => {
    useEffect(() => {
        if (isPaused) return;

        if (timer > 0) {
            const interval = setInterval(() => setTimer(timer - 1), 1000);
            return () => clearInterval(interval);
        } else {
            const availableNumbers = Array.from({ length: 90 }, (_, i) => i + 1).filter((n) => !selectedNumbers.includes(n));
            if (availableNumbers.length > 0) {
                const randomNumber = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
                onNumberSelect(randomNumber);
            }
            setTimer(30); // Reset timer
        }
    }, [timer, isPaused]);

    return (
        <div className="sorteo-container">
            <button onClick={togglePause} className="pause-button">
                {isPaused ? 'Continuar' : 'Pausa'}
            </button>
        </div>
    );
};

export default Sorteo;
