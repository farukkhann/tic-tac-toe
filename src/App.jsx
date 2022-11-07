import { useState } from 'react'
import "./home.css"
import { SquareComponent } from './componenets/square'
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
      <button className='clear-btn' onclick={()=>updateGameState(initialState)}>Clear Game</button>
    </div>
  )
}

export default App
