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
      <span>Turno de {turno}</span>
      <span>Te quedan 4 fichas</span>
      <span>Tirar el dado</span>
    </div>
  )
}
