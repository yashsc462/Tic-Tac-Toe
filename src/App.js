import React, { useState } from 'react';
import Board from './components/Board';
import './styles/App.css';

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // Function to handle player move
  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;  // If already filled or game over, return

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  // Check for winner or draw
  const winner = calculateWinner(squares);
  const isDraw = !squares.includes(null) && !winner;  // If no empty cells & no winner
  const status = winner
    ? `Winner: ${winner}`
    : isDraw
    ? "It's a Draw!"
    : `Next Player: ${isXNext ? 'X' : 'O'}`;

  // Reset the game
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="app-container">
      <div className="app">
        <h1>Tic Tac Toe</h1>
        <div className="status">{status}</div>
        <Board squares={squares} onClick={handleClick} />

        {(winner || isDraw) && (
          <button className="play-again-button" onClick={resetGame}>
            Play Again 🔄
          </button>
        )}
      </div>
    </div>
  );
};

// Function to calculate the winner
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6],           // diagonals
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];  // Return winner ('X' or 'O')
    }
  }
  return null;  // No winner
};

export default App;
