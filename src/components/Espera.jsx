// src/components/Espera.js
import React from 'react';
import '../styles/Espera.css';

const Espera = ({ timer }) => {
    return (
        <div className="espera">
            <p>Próximo número en: {timer} segundos</p>
        </div>
    );
};

export default Espera;

