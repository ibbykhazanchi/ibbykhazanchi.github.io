import { useState } from "react";
import { minimax, MAXIMIZER} from "./Minimax"
import Square from './Square'
import Button from 'react-bootstrap/Button'

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [winner, setWinner] = useState("")
    const [gameOver, setGameOver] = useState(false)
    const [aiThinking, setAiThinking] = useState(false)

    const checkForWinner = (squares) => {
      const possibleWins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]
      for(let i = 0; i < possibleWins.length; i++){
        const [a,b,c] = possibleWins[i]
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
          setWinner(squares[a])
          return squares[a]
        }
      }
    }

    const delay = ms => {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
    const handleClick = async (i) => {
      if(aiThinking || squares[i] || winner){
        return
      }

      const updatedSquares = squares.slice();
      updatedSquares[i] = 'X'
      setSquares(updatedSquares)

      //now AI time 
      const aiMove = minimax(updatedSquares, MAXIMIZER).spotToMove
      if(aiMove !== -1){
        setAiThinking(true)
        await delay(1250)
        setAiThinking(false)
        updatedSquares[aiMove] = 'O'
        setSquares(updatedSquares)
      }

      //game is over
      if(checkForWinner(updatedSquares) || !updatedSquares.includes(null)){
        setGameOver(true)
      }
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

    function WinnerStatus() {
      return (
        <div className="container text-center">
          <h6 className="display-6 p-2 pb-0"> Winner is {winner}</h6>
        </div>
      )
    }

    const restart = () => {
      setSquares(Array(9).fill(null))
      setWinner("")
      setGameOver(false)
    }

    function RestartButton(){
      return (
        <div className = "container p-2 text-center">
          <Button variant="secondary" onClick={() => restart()}>
            Restart
          </Button>
        </div>
      )
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
          {winner && <WinnerStatus />}
          {gameOver && <RestartButton />}
        </div>
    );
}

export default Board