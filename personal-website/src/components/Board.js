import { useState } from "react";
import Square from './Square'

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xMove, setXMove] = useState(true)

    const handleClick = (i) => {
        const updatedSquares = squares.slice();
        if(xMove){
          updatedSquares[i] = 'X'
        } else {
          updatedSquares[i] = 'O'
        }
        setXMove(!xMove)
        setSquares(updatedSquares)
    }
      
    const renderSquare = (i) => {
        const style = {}
        if(i < 3){
          style.borderTop = 'none'
        }
        if(i > 5){
          style.borderBottom = 'none'
        }
        if(i % 3 === 0){
          style.borderLeft = 'none'
        }
        if(i === 2 || i === 5 || i === 8){
          style.borderRight = 'none'
        }
    
        return (
          <Square 
            value={squares[i]} 
            style={style}
            onClick={() => handleClick(i)}
          />
        );
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
        </div>
    );
}

export default Board