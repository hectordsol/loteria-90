// src/components/Sorteo.js
import React, { useEffect } from 'react';
import '../styles/Sorteo.css';

const handleSorteo = (selectedNumbers) => {
    let newNumber;
    do{
        newNumber = Math.floor(Math.random() * 90) + 1;
    } while (selectedNumbers.includes(newNumber));
    anunciarNumero(newNumber);
    return newNumber;
};
const anunciarNumero = (numero) => {
    const utterance = new SpeechSynthesisUtterance(numero.toString());
    utterance.lang = 'es-ES'; // Español
    utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === 'Google español');
    speechSynthesis.speak(utterance);
  };

const Sorteo = ({ selectedNumbers, onNumberSelect, isInitiated, isStarted, isPaused, setTimer, timer,
     setIsInitiated, initialTimer}) => {
    useEffect(() => {
        let interval;
        if (isStarted && !isInitiated){
            let numberOne = handleSorteo(selectedNumbers)
            onNumberSelect(numberOne);
            setIsInitiated(true)       
        }
        else
        if (!isPaused && isStarted) {
            interval = setInterval(() => {
                if (timer > 0) {
                    setTimer(timer - 1);
                } else {
                    let newNumber = handleSorteo(selectedNumbers)
                    onNumberSelect(newNumber);
                    setTimer(initialTimer);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isInitiated, isStarted, isPaused, timer, selectedNumbers, setTimer, onNumberSelect, setIsInitiated, initialTimer]);

    return (
        <div>
            <h2>Sorteo</h2>
            <p>Último número: {selectedNumbers.length > 0 ? selectedNumbers[selectedNumbers.length - 1] : '-'}</p>
        </div>
    );
};

export default Sorteo;
