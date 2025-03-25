import React, { useState } from 'react'
import styles from './DiceRoll.module.css'
const DiceRoll = ({generatedDice , rollDice}) => {
    
    
    
    return (
        <div>
            <img className={styles.dice} src={`/images/dices/dice_${generatedDice}.png`} alt="dice" onClick={()=>rollDice(1,7)} />
        </div>
  )
}

export default DiceRoll