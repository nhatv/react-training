import React, { useEffect, useRef, useState } from "react";
import "./GameBoard.css";

// pure function
const checkWinner = (arr) => {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (arr[i][0] && arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
      return arr[i][0];
    }
  }

  // Check columns
  for (let j = 0; j < 3; j++) {
    if (arr[0][j] && arr[0][j] === arr[1][j] && arr[1][j] === arr[2][j]) {
      return arr[0][j];
    }
  }

  // Check diagonals
  if (arr[0][0] && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2])
    return arr[0][0];
  if (arr[0][2] && arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0])
    return arr[0][2];

  return null;
};

const GameBoard = () => {
  const [board, setBoard] = useState(
    Array.from({ length: 3 }, () => Array(3).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const movesRef = useRef(0);

  console.log(board);

  const handleClick = (row, col) => {
    if (board[row][col] || winner) return;
    const newBoard = board.map((r, i) => {
      if (i !== row) return r;
      return r.map((cell, j) => (j === col ? currentPlayer : cell));
    });
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    movesRef.current = movesRef.current + 1;
  };

  const handleRestart = () => {
    setBoard(Array.from({ length: 3 }, () => Array(3).fill(null)));
    setCurrentPlayer("X");
    setWinner(null);
    movesRef.current = 0;
  };

  // const isDraw = board.flat().every((cell) => cell !== null);
  const isDraw = movesRef.current === 9 ? true : false;

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
        {board.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              className="game-board__cell"
              onClick={() => handleClick(i, j)}
            >
              {cell}
            </div>
          ))
        )}
      </div>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
};

export default GameBoard;
