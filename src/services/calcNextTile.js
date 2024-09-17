import { paths } from './paths.js'
import { INITIAL_PIECES_POSITIONS } from './positions'

export const calcNextTile = ({ color, pieceId, currentTile, diceValue }) => {
  const index = INITIAL_PIECES_POSITIONS.findIndex(piece => piece.id === pieceId)
  const homeTile = INITIAL_PIECES_POSITIONS[index].tile

  const initialTile = paths[color].initialTile
  const lastTile = paths[color].lastTile
  const currentNumber = parseInt(currentTile.slice(-2))
  const rolledNumber = currentNumber + diceValue
  const dif = rolledNumber - lastTile
  let endTile

  // Hacer aquí el array del PATH. Comprobar que no atraviesa barreras, etc. Calcular todas, que reciba un array con las 4 piezas y sus currentTiles y calcule las 4, de forma que devuelva un array con los movimientos legales nada más.
  // En el array del path, si pasa por lastTile, que suba, si no, no, así no hay problema. Hay que hacer un bucle con las vueltas que diga diceValue, comprobar en cada casilla si hay barrera y si es la lastTile. Dentro de un bucle de las 4 piezas.
  // Si la pieza ha acabado, se devuelve invalid para esa pieza del tiron, si la pieza esta en home y no es un 5, se devuelve invalid para esa pieza del tiron, si hay alguna pieza en home y sale un 5, comprobar sólo las piezas en home y las demás invalid del tirón, salvo si ya hay 2 piezas propias en initialTile.

  if (currentTile === homeTile) return initialTile

  if (dif > 0) {
    if (dif === 8) endTile = 'endTile'
    else if (dif < 8) endTile = `${color}Tile${dif}`
    else endTile = 'Illegal move'
  } else {
    endTile = `tile${rolledNumber}` // SUPONIENDO < 69
    endTile = `tile${dif}`
  }

  return endTile
}
