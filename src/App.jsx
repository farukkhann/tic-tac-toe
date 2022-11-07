import { useState } from 'react'
import "./home.css"
import { SquareComponent } from './componenets/square'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <h1>Tic Tac Toe</h1>
      <div className='row jc-center'>
        <SquareComponent/>
        <SquareComponent/>
        <SquareComponent/>

      </div>
      <div className='row jc-center'>
        <SquareComponent/>
        <SquareComponent/>
        <SquareComponent/>

      </div>
      <div className='row jc-center'>
        <SquareComponent/>
        <SquareComponent/>
        <SquareComponent/>
      </div>
    </div>
  )
}

export default App
