// src/components/Salidos.js
import React from 'react';
import '../styles/Salidos.css';

const Salidos = ({ selectedNumbers }) => {
    return (
        <div className="salidos">
            <h3>Números Salidos:</h3>
            <div className="salidos-grid">
                {selectedNumbers.map((number, index) => (
                    <div key={index} className="salido-number">
                        {number}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Salidos;
