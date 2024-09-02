import './Piece.css'

export const Piece = ({ id, color, top, left }) => (
//   <svg
//     id={id}
//     className={`piece ${color}Piece`}
//     xmlns='http://www.w3.org/2000/svg'
//     viewBox='0 0 24 24'
//     style={{ top, left }}
//   >
//     <circle cx='12' cy='12' r='10' />
//   </svg>
  <svg
    id={id}
    className={`piece ${color}Piece`}
    style={{ top, left }}
    viewBox='0 0 25 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g>
      <path d='M17.5711 12.5C17.5711 15.2614 15.3325 17.5 12.5711 17.5M7.57107 12.5C7.57107 9.73858 9.80964 7.5 12.5711 7.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z' stroke='#121923' strokeWidth='1.2' />
    </g>
  </svg>
)
