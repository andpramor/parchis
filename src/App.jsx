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

  const handleClickOnPiece = () => {
    // Valor del dado
    // Necesito instanciar el evento para traerme el id de la ficha
    // Comprobar si es el turno de ese color y si le toca mover (y no tirar el dado)
    // Comprobar si el movimiento es posible (destino existe, hueco libre en destino y sin barreras de por medio)
    // Si cumple todo, llamar a updatePieces con el id de la ficha y la nueva posición
    // Calcular los destinos posibles al tirar el dado y pasar a la ficha un atributo que indique que puede moverse, para que sólo esas fichas muestren la sombra y el pointer, actualizar un estado con fichasQueSePuedenMover con las fichas y los destinos, así no hay que comprobar nada aquí más que si la ficha clicada está en ese array
  }

  return (
    <>
      <div className='app'>
        <div>
          <h1>PARCHÍS</h1>
          <button onClick={handleNextTurn}>Siguiente jugador</button>
          <button onClick={handleRollDice}>Tirar el dado</button>
          <button style={{ float: 'right', marginRight: 0 }}>Reiniciar partida</button>
        </div>
        <Board turn={turn}>
          {pieces.map(piece =>
            <Piece
              key={piece.id}
              id={piece.id}
              color={piece.color}
              top={piece.side ? positions[piece.tile].sideA.top : positions[piece.tile].sideB.top}
              left={piece.side ? positions[piece.tile].sideA.left : positions[piece.tile].sideB.left}
              side={piece.side}
              turn={piece.color === turn}
            />)}
        </Board>
        <Info turn={turn} />
      </div>
    </>
  )
}

export default App
