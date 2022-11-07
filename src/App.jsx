import { useState } from 'react'
import "./home.css"
import { SquareComponent } from './componenets/square'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <h1>Tic Tac Toe</h1>
      <div className='row jc-center'>
        <SquareComponent className="b-bottom-right"/>
        <SquareComponent className="b-bottom-right"/>
        <SquareComponent className="b-bottom"/>

      </div>
      <div className='row jc-center'>
      <SquareComponent className="b-bottom-right"/>
        <SquareComponent className="b-bottom-right"/>
        <SquareComponent className="b-bottom"/>

      </div>
      <div className='row jc-center'>
        <SquareComponent className="b-right"/>
        <SquareComponent className="b-right"/>
        <SquareComponent/>
      </div>
      <button className='clear-btn'>Clear Game</button>
    </div>
  )
}

export default App
