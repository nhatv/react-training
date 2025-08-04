import React, { useEffect, useRef, useState } from "react";
import "./GameBoard.css";

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

// pure function
const checkWinner = (arr) => {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    const [one, two, three] = WINNING_LINES[i];
    if (arr[one] === arr[two] && arr[two] === arr[three]) {
      // matching line
      return arr[one];
    }
  }

  return null;
};

const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  // const movesRef = useRef(0);

  console.log(board);

  const handleClick = (idx) => {
    if (board[idx] || winner) return;
    const newBoard = board.map((cell, i) => {
      if (i === idx) return currentPlayer;
      return cell;
    });
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    // movesRef.current = movesRef.current + 1;
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    // movesRef.current = 0;
  };

  const isDraw = board.every((cell) => cell !== null);
  // const isDraw = movesRef.current === 9 ? true : false;

  useEffect(() => {
    setWinner(checkWinner(board));
  }, [board]);

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <h3>Current Player: {currentPlayer === "X" ? "X" : "O"}</h3>
      {winner ? (
        <h3>Winner: {winner === "X" ? "X" : "O"}</h3>
      ) : isDraw ? (
        <h3>It's a Draw</h3>
      ) : null}
      <div className="game-board">
        {board.map((cell, i) => (
          <div
            key={`${i}`}
            className="game-board__cell"
            onClick={() => handleClick(i)}
          >
            {cell}
          </div>
        ))}
      </div>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
};

export default GameBoard;
