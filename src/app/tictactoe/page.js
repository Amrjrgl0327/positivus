"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(false);

  const WINNIND_INSTANCES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWin = () => {
    console.log("squares", squares);
    for (let i = 0; i < WINNIND_INSTANCES.length; i++) {
      const [a, b, c] = WINNIND_INSTANCES[i];
      console.log("equals3", [a, b, c]);
      if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
        setHasWon(true);
        if (isXTurn) {
          console.log("X won");
        } else {
          console.log("O Won");
        }
      }
    }
  };

  useEffect(() => {
    checkWin();
  }, [squares]);

  const handleClick = (index) => {
    const updatedSquares = [...squares];
    if (isXTurn) {
      updatedSquares[index] = "X";
      setIsXTurn(!isXTurn);
    } else {
      updatedSquares[index] = "O";
      setIsXTurn(isXTurn);
    }
    setSquares(updatedSquares);
  };

  return (
    <div className="bg-white h-screen flex flex-col items-center">
      <h5 className="text-black">TIC TAC TOE</h5>
      <div className="grid grid-cols-3">
        {squares.map((square, index) => {
          return (
            <button
              onClick={() => {
                handleClick(index);
              }}
              className="w-40 h-40 border-2 text-5xl text-violet-400"
              key={index}
            >
              {square}
            </button>
          );
        })}
      </div>
    </div>
  );
}
