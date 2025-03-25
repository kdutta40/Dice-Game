import React from 'react'
import styles from './Rules.module.css'
const Rules = () => {
  return (
    <div className={styles.rule}>
        <span>
            <span>
            <b>How to play dice game <br /></b>
            </span> 
            Select any number <br /> <br />
            Click on dice image <br /><br />
            After clicking on  dice  if selected number is equal to dice number you will get same point as dice <br />
            if you get wrong guess then 2 points will be dedcuted 
        </span>
    </div>
  )
}

export default Rules