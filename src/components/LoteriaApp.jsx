// src/components/LoteriaApp.js
import React, { useState } from 'react';
import Tablero from './Tablero';
import Sorteo from './Sorteo';
import Espera from './Espera';
import Salidos from './Salidos';
import TiempoEspera from './TiempoEspera';
import '../styles/LoteriaApp.css';

const LoteriaApp = () => {
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [lastNumber, setLastNumber] = useState(null);
    const [timer, setTimer] = useState(30);
    const [initialTimer, setInitialTimer] = useState(timer);
    const [isPaused, setIsPaused] = useState(true);
    const [isStarted, setIsStarted] = useState(false);
    const [isInitiated, setIsInitiated] = useState(false);

    const handleNumberSelect = (number) => {
        setSelectedNumbers([...selectedNumbers, number]);
        setLastNumber(number);
    };

    const handleClear = () => {
        setSelectedNumbers([]);
        setLastNumber(null);
        setIsPaused(true);
        setIsStarted(false);
        setIsPaused(true);
        setIsInitiated(false);
        setTimer(initialTimer);
    };

    const handleStart = () => {
        if (!isStarted) {
            setIsStarted(true);
            setIsPaused(false);
        } else {
            setIsPaused(!isPaused);
        }
    };

    const handleIncrementTimer = () => {
        setInitialTimer(initialTimer + 1);
    };

    const handleDecreaseTimer = () => {
        if (initialTimer > 1) {
            setInitialTimer(initialTimer - 1);
        }
    };

    return (
        <div className="loteria-app">
            <div className="sorteo-container">
                <h2>Tiempo de espera
                <TiempoEspera
                    timer={initialTimer}
                    onIncrement={handleIncrementTimer}
                    onDecrease={handleDecreaseTimer}
                />
                </h2>
                <Sorteo
                    selectedNumbers={selectedNumbers}
                    onNumberSelect={handleNumberSelect}
                    isInitiated={isInitiated}
                    isStarted={isStarted}
                    isPaused={isPaused}
                    setTimer={setTimer}
                    timer={timer}
                    setIsInitiated={setIsInitiated}
                    initialTimer={initialTimer}
                />
                <Espera timer={timer} />
                <button onClick={handleStart}>
                    {isStarted ? (isPaused ? 'Continuar' : 'Pausar') : 'Inicio'}
                </button>
                <Salidos selectedNumbers={selectedNumbers} />
            </div>
            <div className="tablero-container">
                <Tablero
                    selectedNumbers={selectedNumbers}
                    lastNumber={lastNumber}
                    onClear={handleClear}
                />
            </div>
        </div>
    );
};

export default LoteriaApp;

