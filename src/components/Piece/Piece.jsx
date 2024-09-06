import './Piece.css'

export const Piece = ({ id, color, top, left, turn, onClick }) => {
  return (
    <div
      id={id}
      className={`piece ${color}Piece ${turn ? 'pieceTurn' : ''}`}
      style={{ top: `${top}%`, left: `${left}%` }}
      onClick={onClick}
    />
  )
}
