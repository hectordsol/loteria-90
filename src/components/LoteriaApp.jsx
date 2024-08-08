// src/components/LoteriaApp.js
import React, { useState } from 'react';
import Tablero from './Tablero';
import Sorteo from './Sorteo';
import Numero from './Numero';
import '../styles/LoteriaApp.css';

const LoteriaApp = () => {
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [lastNumber, setLastNumber] = useState(null);
    const [timer, setTimer] = useState(30);
    const [isPaused, setIsPaused] = useState(false);

    const handleNumberSelect = (number) => {
        setSelectedNumbers([...selectedNumbers, number]);
        setLastNumber(number);
    };

    const handleClear = () => {
        setSelectedNumbers([]);
        setLastNumber(null);
    };

    const togglePause = () => {
        setIsPaused(!isPaused);
    };

    return (
        <div className="loteria-app">
            <div className="sorteo-container">
                <Sorteo
                    selectedNumbers={selectedNumbers}
                    onNumberSelect={handleNumberSelect}
                    timer={timer}
                    setTimer={setTimer}
                    isPaused={isPaused}
                    togglePause={togglePause}
                />
                <Numero timer={timer} />
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
