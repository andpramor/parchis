import './Dice.css'
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from './DicesSVG/Dices.jsx'

export const Dice = ({ value, color }) => {
  const renderDice = () => {
    switch (value) {
      case 1:
        return <Dice1 />
      case 2:
        return <Dice2 />
      case 3:
        return <Dice3 />
      case 4:
        return <Dice4 />
      case 5:
        return <Dice5 />
      case 6:
        return <Dice6 />
    }
  }
  return (
    <div className={`dice ${color}Dice`}>
      {renderDice()}
    </div>
  )
}
