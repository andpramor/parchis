import { useState } from 'react'
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
  // El array de posiciones será así:
  // [{ tile: 'tile1', topSideA: 22, leftSideA: 170, topSideB: 22, leftSideB: 180 }]

  // Guardar turn y pieces en localStorage
  const [pieces, setPieces] = useState([
    { id: 'bluePiece1', color: 'blue', tile: 'tile22', side: 'a' },
    { id: 'bluePiece2', color: 'blue', tile: 'tile29', side: 'a' },
    { id: 'bluePiece3', color: 'blue', tile: 'redtile1', side: 'a' },
    { id: 'bluePiece4', color: 'blue', tile: 'tile46', side: 'a' },
    { id: 'redPiece1', color: 'red', tile: 'tile39', side: 'a' },
    { id: 'redPiece2', color: 'red', tile: 'tile40', side: 'a' },
    { id: 'redPiece3', color: 'red', tile: 'tile56', side: 'a' },
    { id: 'redPiece4', color: 'red', tile: 'redtile6', side: 'a' },
    { id: 'yellowPiece1', color: 'yellow', tile: 'tile5', side: 'a' },
    { id: 'yellowPiece2', color: 'yellow', tile: 'tile7', side: 'a' },
    { id: 'yellowPiece3', color: 'yellow', tile: 'tile12', side: 'a' },
    { id: 'yellowPiece4', color: 'yellow', tile: 'yellowtile1', side: 'a' },
    { id: 'greenPiece1', color: 'green', tile: 'tile67', side: 'a' },
    { id: 'greenPiece2', color: 'green', tile: 'tile2', side: 'a' },
    { id: 'greenPiece3', color: 'green', tile: 'tile4', side: 'a' },
    { id: 'greenPiece4', color: 'green', tile: 'greentile8', side: 'a' }
  ])

  const [diceValue, setDiceValue] = useState(1)

  // REVISAR ESTE
  const updatePieces = (pieceId, newTile) => {
    setPieces((prevPieces) => {
      const index = prevPieces.findIndex(piece => piece.id === pieceId)

      // Hay que definir la forma de ver el side al que irá, según esté ocupada ya la casilla o no, después de comprobar que el movimiento es legal, puede ir a side A si está libre o a side B si ya hay una ficha en el A.

      const updatedPieces = [
        ...prevPieces.slice(0, index),
        { ...prevPieces[index], tile: newTile },
        ...prevPieces.slice(index + 1)
      ]

      return updatedPieces
    })
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
          <button style={{ float: 'right', marginRight: 0 }}>Reiniciar partida</button>
          <br />
          <button onClick={handleRollDice}>Tirar el dado</button>
        </div>
        <Board turn={turn}>
          <Dice value={diceValue} color={turn} />
        </Board>
        <Info turn={turn} />
      </div>
      {/* Este mapeo está mal, tengo que buscar la posición de la pieza (tile y position 1 o 2, o 0 o 1, o true o false) y buscar los % en el array de posiciones que está pendiente de hacer */}
      {/* pieces.map(position =>
        <Piece
          key={position.id}
          id={position.id}
          color={position.color}
          top={position.top}
          left={position.left}
        />) */}
    </>
  )
}

export default App
