import './Info.css'

export const Info = ({ turn }) => {
  const turno = turn === 'blue'
    ? 'AZUL'
    : turn === 'yellow'
      ? 'AMARILLO'
      : turn === 'red'
        ? 'ROJO'
        : 'VERDE'

  return (
    <div className='info'>
      <span className='info--turn'>Turno de {turno}</span>
      <span className='info--piecesLeft'>Te quedan 4 fichas</span>
      <span className='info--roll'>Tirar el dado</span>
    </div>
  )
}
