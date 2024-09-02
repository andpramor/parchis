import { useEffect, useState } from 'react'
import './App.css'
import { Board } from './components/Board/Board.jsx'
import { Info } from './components/Info/Info.jsx'
import { Piece } from './components/Piece/Piece.jsx'

function App () {
  const [turn, setTurn] = useState('yellow')
  // En el turno de cada color, primero se pone negro el svg de los dos dados. Cuando se le da a tirar el dado, se sustituye ese svg por uno de los de una sola cara (animación: varios random durante x tiempo, cambiando cada x tiempo y luego se fija uno). Cuando se fija, se mueve la ficha, deja de ser el turno, se pasa a blanco de nuevo el svg de fondo.

  // Falta ver en el tema posicionamiento la casuística de dos fichas en la misma casilla, y de las casillas centrales.

  const [pieces, setPieces] = useState([
    { id: 'bluePiece1', tile: 'tile22', color: 'blue' },
    { id: 'bluePiece2', tile: 'tile29', color: 'blue' },
    { id: 'bluePiece3', tile: 'redtile1', color: 'blue' },
    { id: 'bluePiece4', tile: 'tile46', color: 'blue' },
    { id: 'redPiece1', tile: 'tile39', color: 'red' },
    { id: 'redPiece2', tile: 'tile40', color: 'red' },
    { id: 'redPiece3', tile: 'tile56', color: 'red' },
    { id: 'redPiece4', tile: 'redtile6', color: 'red' },
    { id: 'yellowPiece1', tile: 'tile5', color: 'yellow' },
    { id: 'yellowPiece2', tile: 'tile7', color: 'yellow' },
    { id: 'yellowPiece3', tile: 'tile12', color: 'yellow' },
    { id: 'yellowPiece4', tile: 'yellowtile1', color: 'yellow' },
    { id: 'greenPiece1', tile: 'tile67', color: 'green' },
    { id: 'greenPiece2', tile: 'tile2', color: 'green' },
    { id: 'greenPiece3', tile: 'tile4', color: 'green' },
    { id: 'greenPiece4', tile: 'greentile8', color: 'green' }
  ])

  const [positions, setPositions] = useState([])

  const calcPositions = () => {
    const newPositions = pieces.map(piece => {
      const tile = document.getElementById(piece.tile)
      const rect = tile.getBoundingClientRect()
      return {
        id: piece.id,
        color: piece.color,
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX
      }
    })
    setPositions(newPositions)
  }

  useEffect(() => {
    calcPositions()
    window.addEventListener('resize', calcPositions)

    return () => window.removeEventListener('resize', calcPositions)
  }, [pieces])

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
      default:
        console.log("An error has occurred, turn isn't a default value")
    }
  }

  return (
    <>
      <div className='app'>
        <div>
          <h1>PARCHÍS</h1>
          <button onClick={handleNextTurn}>Siguiente jugador (provisional)</button>
        </div>
        <Board turn={turn} />
        <Info turn={turn} />
      </div>
      {positions.map(position =>
        <Piece
          key={position.id}
          id={position.id}
          color={position.color}
          top={position.top}
          left={position.left}
        />)}
    </>
  )
}

export default App
