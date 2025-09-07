import type { SquareProps } from "../Types/SquareProps";

export default function Square({value, onSquareClick}: SquareProps) {

  return (
    <>
    <button className="square"
    onClick={onSquareClick}>
        {value}</button>
    </>
  )
}
