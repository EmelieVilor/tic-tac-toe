import Square from "./Square";
import { useState } from "react";
// import type { SquareProps } from "../Types/SquareProps";

export default function Board() {

    // vems tur det är härnäst
const [xIsNext, setXIsNext] = useState(true);

//tomma rutor utan någonting i
const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));


// visa status vems tur det är och vem som vunnit
const winner = calculateWinner(squares);
let status;
if (winner){
    status = "The winner is " + winner + " 🥳!!";
} else if (squares.every(square => square !== null)){
    status = "It's a tie! 🤝"

} else {
    status = "Next player: " + (xIsNext ? "X" : "O")
}


// räknar ut vems tur det är
function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
        return;
    }
    const nextSquares = [...squares];
    if (xIsNext) {
        nextSquares[i] = 'X';
    } else {
        nextSquares[i] = 'O';
    }
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
}   


//vilka kombinationer av rader som vinner
function calculateWinner(squares: Array<string | null>): string | null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    //loop genom alla vinstkombinationer, hitta om raderna har samma värde/spelare
    for (let i = 0; i < lines.length; i++){
        const [a, b, c ] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}

// startar om spelet / rensar arrayen
function resetGame() {
  setSquares(Array(9).fill(null));
  setXIsNext(true);
}


return (
    <>
<h2>{status}</h2>


<div className="board-row">
<Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
<Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
<Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
</div>

<div className="board-row">
    <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
    <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
    <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
</div>

<div className="board-row">
    <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
    <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
    <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>

</div>

<button className="resetBtn" onClick={resetGame}>Reset</button>



    </>
);
}
