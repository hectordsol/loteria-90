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
                        className={`cell ${selectedNumbers.includes(number) ? 'selected' : ''} ${lastNumber === number ? 'last' : ''}`}
                    >
                        {number}
                    </div>
                ))}
            </div>
            <button onClick={onClear} className="clear-button">Limpiar</button>
        </div>
    );
};

export default Tablero;
