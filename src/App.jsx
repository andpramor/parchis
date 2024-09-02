import { useState } from 'react'
import './App.css'
import { Board } from './components/Board/Board.jsx'
import { Info } from './components/Info/Info.jsx'

function App () {
  const [turn, setTurn] = useState('')
  const [positions, setPositions] = useState([{ yellow: [0, 0, 0, 0] }, { blue: [0, 0, 0, 0] }, { red: [0, 0, 0, 0] }, { green: [0, 0, 0, 0] }])
  // En el turno de cada color, primero no sale nada o se pone negro o de algun color x su fondo de casa (el svg de los dos dados). Cuando se le da a tirar el dado, se borra ese svg y se sustituye por uno de los de una sola cara (animación: varios random durante x tiempo, cambiando cada x tiempo y luego se fija uno). Cuando se fija, se mueve la ficha, deja de ser el turno, se pasa a blanco de nuevo el svg de fondo.

  return (
    <div className='app'>
      <h1>PARCHÍS</h1>
      <Board />
      <Info />
    </div>
  )
}

export default App
