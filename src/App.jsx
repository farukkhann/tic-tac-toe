import { useState } from 'react'
import "./home.css"
import { SquareComponent } from './componenets/square'
import { useEffect } from 'react'
const initialState=[" "," "," "," "," "," "," "," "," "]
function App() {
const [gameState,updateGameState]=useState(initialState)
const [isXchance,updateXchance]=useState(false)

const onSquareClicked=(index)=>{
let strings=Array.from(gameState)
strings[index]=isXchance?"X":"O"
updateGameState(strings)
updateXchance(!isXchance)
}


useEffect(()=>{
  if(calculateWinner(gameState)){
    const winner =calculateWinner(gameState)
    // alert(`${winner} is the winner`)
    alert("winner is"+calculateWinner(gameState))
    updateGameState(initialState)
  }
},[gameState])

function calculateWinner(gameState) {
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
    if(gameState[a]!=" "){
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
  }
  return null;
}


  return (
    <div className="main">
      <h1>Tic Tac Toe</h1>
      <div className='row jc-center'>
        <SquareComponent className="b-bottom-right" state={gameState[0]} onclick={()=>onSquareClicked(0)}/>
        <SquareComponent className="b-bottom-right" state={gameState[1]} onclick={()=>onSquareClicked(1)}/>
        <SquareComponent className="b-bottom" state={gameState[2]} onclick={()=>onSquareClicked(2)}/>

      </div>
      <div className='row jc-center'>
      <SquareComponent className="b-bottom-right" state={gameState[3]} onclick={()=>onSquareClicked(3)}/>
        <SquareComponent className="b-bottom-right" state={gameState[4]} onclick={()=>onSquareClicked(4)}/>
        <SquareComponent className="b-bottom" state={gameState[5]} onclick={()=>onSquareClicked(5)}/>

      </div>
      <div className='row jc-center'>
        <SquareComponent className="b-right" state={gameState[6]} onclick={()=>onSquareClicked(6)}/>
        <SquareComponent className="b-right" state={gameState[7]} onclick={()=>onSquareClicked(7)}/>
        <SquareComponent state={gameState[8]}onclick={()=>onSquareClicked(8)}/>
      </div>
      <button className='clear-btn' onClick={()=>{updateGameState(initialState)}}>Clear Game</button>
    </div>
  )
}

export default App
