// src/components/LoteriaApp.js
import React, { useState } from 'react';
import Tablero from './Tablero';
import Sorteo from './Sorteo';
import Espera from './Espera';
import '../styles/LoteriaApp.css';

const LoteriaApp = () => {
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [lastNumber, setLastNumber] = useState(null);
    const [timer, setTimer] = useState(30);
    const [isPaused, setIsPaused] = useState(true);
    const [isStarted, setIsStarted] = useState(false);

    const handleNumberSelect = (number) => {
        setSelectedNumbers([...selectedNumbers, number]);
        setLastNumber(number);
    };

    const handleClear = () => {
        setSelectedNumbers([]);
        setLastNumber(null);
        setIsPaused(true);
        setIsStarted(false);
        setTimer(30);
    };

    const handleStart = () => {
        if (!isStarted) {
            setIsStarted(true);
            setIsPaused(false);
        } else {
            setIsPaused(!isPaused);
        }
    };

    return (
        <div className="loteria-app">
            <div className="sorteo-container">
                <Sorteo
                    selectedNumbers={selectedNumbers}
                    onNumberSelect={handleNumberSelect}
                    isPaused={isPaused}
                    setTimer={setTimer}
                    timer={timer}
                    setIsPaused={setIsPaused}
                />
                <Espera timer={timer} />
                <button onClick={handleStart}>
                    {isStarted ? (isPaused ? 'Continuar' : 'Pausar') : 'Inicio'}
                </button>
            </div>
            <Tablero
                selectedNumbers={selectedNumbers}
                lastNumber={lastNumber}
                onClear={handleClear}
            />
        </div>
    );
};

export default LoteriaApp;
