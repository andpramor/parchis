import { useState } from 'react'
import './App.css'
import { Board } from './components/Board/Board.jsx'
import { Info } from './components/Info/Info.jsx'

function App () {
  const [turn, setTurn] = useState('yellow')
  // const [positions, setPositions] = useState([{ yellow: [0, 0, 0, 0] }, { blue: [0, 0, 0, 0] }, { red: [0, 0, 0, 0] }, { green: [0, 0, 0, 0] }])
  // En el turno de cada color, primero no sale nada o se pone negro o de algun color x su fondo de casa (el svg de los dos dados). Cuando se le da a tirar el dado, se borra ese svg y se sustituye por uno de los de una sola cara (animación: varios random durante x tiempo, cambiando cada x tiempo y luego se fija uno). Cuando se fija, se mueve la ficha, deja de ser el turno, se pasa a blanco de nuevo el svg de fondo.

  const handleNextTurn = () => {
    switch (turn) {
      case 'yellow':
        setTurn('blue')
        break
      case 'blue':
        setTurn('red')
        break
      case 'red':
        setTurn('green')
        break
      case 'green':
        setTurn('yellow')
        break
    }
  }

  return (
    <div className='app'>
      <div>
        <h1>PARCHÍS</h1>
        <button onClick={handleNextTurn}>Siguiente jugador (provisional)</button>
      </div>
      <Board turn={turn} />
      <Info />
    </div>
  )
}

export default App
