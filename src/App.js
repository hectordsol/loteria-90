import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const handleNumberClick = (number) => {
    setSelectedNumbers((prevSelectedNumbers) =>
      prevSelectedNumbers.includes(number)
        ? prevSelectedNumbers.filter((num) => num !== number)
        : [...prevSelectedNumbers, number]
    );
  };

  const handleClear = () => {
    setSelectedNumbers([]);
  };

  const renderNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= 90; i++) {
      numbers.push(
        <div
          key={i}
          className={`number ${selectedNumbers.includes(i) ? 'selected' : ''}`}
          onClick={() => handleNumberClick(i)}
        >
          {i}
        </div>
      );
    }
    return numbers;
  };

  return (
    <div className="container">
      <div className="board">
        {renderNumbers()}
      </div>
      <button className="clear-button" onClick={handleClear}>Limpiar tablero</button>
    </div>
  );
};

export default App;
