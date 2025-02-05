import React from 'react';
import '../styles/App.css';

const Board = ({ squares, onClick, winningLine }) => {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <button key={index} className="square" onClick={() => onClick(index)}>
          {value}
        </button>
      ))}
      {winningLine && (
        <div
          className="winning-line"
          style={{
            top: winningLine.top,
            left: winningLine.left,
            width: winningLine.width,
            height: winningLine.height,
            transform: winningLine.transform,
          }}
        />
      )}
    </div>
  );
};

export default Board;
