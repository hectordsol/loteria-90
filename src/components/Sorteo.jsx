// src/components/Sorteo.js
import React, { useEffect } from 'react';
import '../styles/Sorteo.css';

const Sorteo = ({ selectedNumbers, onNumberSelect, isPaused, setTimer, timer, setIsPaused }) => {
    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                if (timer > 0) {
                    setTimer(timer - 1);
                } else {
                    let newNumber;
                    do {
                        newNumber = Math.floor(Math.random() * 90) + 1;
                    } while (selectedNumbers.includes(newNumber));

                    onNumberSelect(newNumber);
                    setTimer(30);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPaused, timer, selectedNumbers, setTimer, onNumberSelect]);

    return (
        <div>
            <h2>Sorteo</h2>
            <p>Último número: {selectedNumbers.length > 0 ? selectedNumbers[selectedNumbers.length - 1] : '-'}</p>
        </div>
    );
};

export default Sorteo;
