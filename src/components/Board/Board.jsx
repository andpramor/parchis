import { useEffect, useRef } from 'react'
import { ColorHome } from '../ColorHome/ColorHome'
import './Board.css'

export const Board = ({ children, turn }) => {
  const boardRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      const isWiderThanTaller = window.innerWidth > window.innerHeight

      if (boardRef.current) {
        if (isWiderThanTaller) {
          boardRef.current.classList.add('wide')
        } else {
          boardRef.current.classList.remove('wide')
        }
      }
    }

    // Initial check
    handleResize()

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div ref={boardRef} className='board-container'>
      <div className='board'>
        <ColorHome color='red' turn={turn === 'red'} />
        <ColorHome color='blue' turn={turn === 'blue'} />
        <ColorHome color='green' turn={turn === 'green'} />
        <ColorHome color='yellow' turn={turn === 'yellow'} />
        {children}
      </div>
    </div>
  )
}
