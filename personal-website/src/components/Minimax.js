const MAXIMIZER = 1
const MINIMIZER = -1

function minimax(state, turn) {
    
    // base case: check if its a terminal state
    const aiWins = calculateScore(state, 'O')
    const playerWins = calculateScore(state, 'X')
    if(aiWins){
        return {score: 10, spotToMove: -1}
    } else if(playerWins){
        return {score: -10, spotToMove: -1}
    } else if(!state.includes(null)){
        return {score: 0, spotToMove: -1}
    }

    if(turn === MAXIMIZER){
        let maxScore = -Infinity
        let spotToMove = -1
        for(let i = 0; i < state.length; i++){
            if(state[i] === null){
                //place O there
                const newState = state.slice()
                newState[i] = 'O'
                
                //call minimax
                const score = minimax(newState, MINIMIZER).score

                // find the maximum score
                if(score > maxScore){
                    maxScore = score
                    spotToMove = i
                }
            }
        }
        return {score: maxScore, spotToMove: spotToMove}
    } else {
        let minScore = Infinity
        let spotToMove = -1
        for(let i = 0; i < state.length; i++){
            if(state[i] === null){
                const newState = state.slice()
                newState[i] = 'X'

                const score = minimax(newState, MAXIMIZER).score
                
                if(score < minScore){
                    minScore = score
                    spotToMove = i
                }
            }
        }
        return {score: minScore, spotToMove: spotToMove}
    }
}

const calculateScore = (state, player) => {
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
        if(state[a] && state[a] === player && state[a] === state[b] && state[b] === state[c]){
          return true
        }
      }
      return false
}


export {minimax, MAXIMIZER}