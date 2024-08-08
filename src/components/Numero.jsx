// src/components/Numero.js
import React from 'react';
import '../styles/Numero.css';

const Numero = ({ timer }) => {
    return (
        <div className="numero-container">
            Tiempo restante: {timer} segundos
        </div>
    );
};

export default Numero;
