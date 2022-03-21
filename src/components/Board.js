import React from "react";
import './styles/Board.css';
import Square from "./Square";
import {useState} from "react";

function Board() {

  const [count, setCount] = useState(0)
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [currPlayer, setPlayer] = useState(`Next player: ${getTurn()}`);

  function getTurn() {
    if (count % 2 === 0) {
      return "X";
    } else {
      return "O";
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setStatus(`Winner: ${calculateWinner(squares)}`)
        return squares[a];
      }
    }
    return null;
  }

  function checkWin() {
    if (calculateWinner(squares) != null) {
      currPlayer = `Winner: ${calculateWinner(squares)}`;
    } else {
      currPlayer = `Next player: ${getTurn()}`
    }
  }
  
  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }


  function handleClick(i) {
    const squares = this.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = getTurn(); 
    setSquares(squares); 
    currPlayer = setPlayer(!currPlayer);
  }

    return (  
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <div className="status">{status}</div>
        </div>
    )
}

export default Board;





