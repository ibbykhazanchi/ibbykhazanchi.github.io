import Board from './Board'
import { useState } from "react";
import Button from 'react-bootstrap/Button'


const Game = () => {
  const [winner, setWinner] = useState("")
  const [gameOver, setGameOver] = useState(false)
  const [squares, setSquares] = useState(Array(9).fill(null))

  const restart = () => {
    setSquares(Array(9).fill(null))
    setWinner("")
    setGameOver(false)
  }

  const RestartButton = () => {
    return (
      <div className = "container text-center p-3">
        <Button variant="secondary" onClick={() => restart()}>
          Restart
        </Button>
      </div>
    )
  }

    return (
      <div>
        <div className="game">
            <Board 
              setWinner={setWinner} 
              setGameOver = {setGameOver} 
              setSquares = {setSquares}
              winner = {winner}
              gameOver = {gameOver} 
              squares = {squares}
            />
        </div>
        {winner && <h1 className='text-center'> Nope, no you <a href='https://en.wikipedia.org/wiki/Minimax'> can't</a> :P </h1>} 
        {gameOver && <RestartButton />}
      </div>
    );
}

export default Game