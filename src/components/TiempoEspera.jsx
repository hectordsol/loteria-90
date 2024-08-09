// src/components/TiempoEspera.js
import React from 'react';
import '../styles/TiempoEspera.css';

const TiempoEspera = ({ timer, onIncrement, onDecrease }) => {
    return (
        <div className="tiempo-espera">
            <button onClick={onDecrease} className="tiempo-btn">&#8595;</button>
            <span className="tiempo-display">{timer} s</span>
            <button onClick={onIncrement} className="tiempo-btn">&#8593;</button>
        </div>
    );
};

export default TiempoEspera;
