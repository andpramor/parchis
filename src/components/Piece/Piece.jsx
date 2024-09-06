import './Piece.css'

export const Piece = ({ id, color, top, left }) => {
  return (
    <div
      id={id}
      className={`piece ${color}Piece`}
      style={{ top: `${top}%`, left: `${left}%` }}
    >
      {id}
    </div>
  )
}
