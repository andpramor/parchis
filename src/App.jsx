import { useEffect, useState } from 'react'
import './App.css'
import { Board } from './components/Board/Board.jsx'
import { Info } from './components/Info/Info.jsx'
import { Piece } from './components/Piece/Piece.jsx'
import { Dice } from './components/Dice/Dice.jsx'
import { rollDice } from './services/roll.js'

function App () {
  const [turn, setTurn] = useState('yellow')
  // Cuando se le da a tirar el dado, aparece en el centro de colorHome animación: varios random durante x tiempo, cambiando cada x tiempo y luego se fija uno y cambia de color.

  // Falta ver en el tema posicionamiento la casuística de dos fichas en la misma casilla, y de las casillas centrales.

  // Guardar turn y pieces en localStorage
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

  const [diceValue, setDiceValue] = useState(1)

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pieces])

  const updatePiecePosition = (pieceId, newTile) => {
    setPieces((prevPieces) => {
      const index = prevPieces.findIndex(piece => piece.id === pieceId)

      const updatedPieces = [
        ...prevPieces.slice(0, index),
        { ...prevPieces[index], tile: newTile },
        ...prevPieces.slice(index + 1)
      ]

      return updatedPieces
    })
  }

  const handleMoveExample = () => {
    updatePiecePosition('greenPiece1', 'bluetile1')
  }

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

  const handleRollDice = () => {
    const newDiceValue = rollDice()
    setDiceValue(newDiceValue)
  }

  return (
    <>
      <div className='app'>
        <div>
          <h1>PARCHÍS</h1>
          <button onClick={handleNextTurn}>Siguiente jugador</button>
          <button onClick={handleMoveExample}>Ejemplo: Mover ficha verde 1</button>
          <button style={{ float: 'right', marginRight: 0 }}>Reiniciar partida</button>
          <br />
          <button onClick={handleRollDice}>Tirar el dado</button>
          <Dice value={diceValue} />
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
