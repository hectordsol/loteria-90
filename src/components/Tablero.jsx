// src/components/Tablero.js
import React from 'react';
import '../styles/Tablero.css';

const Tablero = ({ selectedNumbers, lastNumber, onClear }) => {
    return (
        <div className="tablero-container">
            <div className="tablero">
                {Array.from({ length: 90 }, (_, i) => i + 1).map((number) => (
                    <div
                        key={number}
                        className={`tablero-number ${selectedNumbers.includes(number) ? (number === lastNumber ? 'highlight' : 'selected') : ''}`}
                    >
                        {number}
                    </div>
                ))}
            </div>
            <button onClick={onClear}>Limpiar Tablero</button>
        </div>
    );
};

export default Tablero;
