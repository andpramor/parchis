import { useState } from 'react'
import './App.css'
import { Board } from './components/Board/Board.jsx'
import { Info } from './components/Info/Info.jsx'
import { Piece } from './components/Piece/Piece.jsx'
import { Dice } from './components/Dice/Dice.jsx'
import { rollDice } from './services/roll.js'
import { initialPieces, positions } from './services/positions.js'

function App () {
  const [turn, setTurn] = useState('yellow')
  // Cuando se le da a tirar el dado, aparece en el centro de colorHome
  // la animación: varios random durante x tiempo, cambiando cada x tiempo
  // y luego se fija uno y cambia de color.

  // Falta ver en el tema posicionamiento la casuística de dos fichas en la misma casilla, y de las casillas centrales.

  // Guardar turn y pieces en localStorage
  const [pieces, setPieces] = useState(initialPieces)

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
          {/* <Dice value={diceValue} color={turn} /> */}
          {/* Este mapeo está mal, tengo que buscar la posición de la pieza (tile y position 1 o 2, o 0 o 1, o true o false) y buscar los % en el array de posiciones que está pendiente de hacer */}
          {pieces.map(piece =>
            <Piece
              key={piece.id}
              id={piece.id}
              color={piece.color}
              top={piece.side ? positions[piece.tile].sideA.top : positions[piece.tile].sideB.top}
              left={piece.side ? positions[piece.tile].sideA.left : positions[piece.tile].sideB.left}
              side={piece.side}
            />)}
        </Board>
        <Info turn={turn} />
      </div>
    </>
  )
}

export default App
