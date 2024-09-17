import { useState } from 'react'
import './App.css'
import { Board } from './components/Board/Board.jsx'
import { Info } from './components/Info/Info.jsx'
import { Piece } from './components/Piece/Piece.jsx'
import { rollDice } from './services/roll.js'
import { INITIAL_PIECES_POSITIONS, positions } from './services/positions.js'

function App () {
  const [turn, setTurn] = useState('yellow')
  const [whatNow, setWhatNow] = useState('roll')
  const [moves, setMoves] = useState(0)
  const [lastMoved, setLastMoved] = useState('')

  // Guardar turn y pieces en localStorage
  const [pieces, setPieces] = useState(INITIAL_PIECES_POSITIONS)

  const [diceValue, setDiceValue] = useState(0)

  // REVISAR ESTE
  const updatePieces = ({ pieceId, newTile = 'tile09' }) => {
    setPieces((prevPieces) => {
      const index = prevPieces.findIndex(piece => piece.id === pieceId)

      const updatedPieces = [
        ...prevPieces.slice(0, index),
        { ...prevPieces[index], tile: newTile },
        ...prevPieces.slice(index + 1)
      ]

      setWhatNow('roll')

      return updatedPieces
    })
    setLastMoved(pieceId)
  }

  const handleNextTurn = () => {
    setMoves(0)
    setWhatNow('roll')
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
    if (newDiceValue === 6 && moves === 2) {
      setPieces((prevPieces) => {
        const index = prevPieces.findIndex(piece => piece.id === lastMoved)

        const updatedPieces = [
          ...prevPieces.slice(0, index),
          { ...prevPieces[index], tile: INITIAL_PIECES_POSITIONS[index].tile, side: INITIAL_PIECES_POSITIONS[index].side },
          ...prevPieces.slice(index + 1)
        ]

        setWhatNow('roll')

        return updatedPieces
      })

      handleNextTurn()
    } else {
      setWhatNow('move')
    }
  }

  const handleClickOnPiece = (id) => {
    // Valor del dado
    // Comprobar si es el turno de ese color y si le toca mover (y no tirar el dado)
    // Comprobar si el movimiento es posible (destino existe, hueco libre en destino y sin barreras de por medio)
    // Si cumple todo, llamar a updatePieces con el id de la ficha y la nueva posición
    // Calcular los destinos posibles al tirar el dado y pasar a la ficha un atributo que indique que puede moverse, para que sólo esas fichas muestren la sombra y el pointer, actualizar un estado con fichasQueSePuedenMover con las fichas y los destinos, así no hay que comprobar nada aquí más que si la ficha clicada está en ese array.
    setMoves(prevMoves => {
      const newMoves = prevMoves + 1
      return newMoves
    })
    updatePieces({ pieceId: id })
    if (diceValue === 6) {
      setWhatNow('roll')
    } else {
      handleNextTurn()
    }
  }

  return (
    <>
      <div className='app'>
        <div>
          <h1>PARCHÍS</h1>
          {/* <button onClick={handleNextTurn}>Siguiente jugador</button> */}
          <button onClick={handleRollDice}>Tirar el dado</button>
          <button style={{ float: 'right', marginRight: 0 }}>Reiniciar partida</button>
        </div>
        <Board turn={turn} diceValue={diceValue} whatNow={whatNow}>
          {pieces.map(piece =>
            <Piece
              key={piece.id}
              id={piece.id}
              onClick={() => handleClickOnPiece(piece.id)}
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
