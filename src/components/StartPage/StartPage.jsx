import React from 'react'
import styles from './StartPage.module.css'
const StartPage = ({toggle}) => {
  return (
    <div className={styles.container}>
        <div>
            <img src="/images/dices.png" alt="dice image" />
        </div>
        <div className={styles.text}>
          <h1 className={styles.h1}>
            Dice Game
          </h1>
          <button onClick={toggle} className={styles.btn}>Play Now</button>
        </div>
    </div>
  )
}

export default StartPage