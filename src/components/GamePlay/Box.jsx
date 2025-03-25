import React from 'react'
import styles from './Box.module.css'
const Box = ({isSelected ,val , onClick}) => {
  return (
    <div onClick ={onClick} className={isSelected ?styles.boxSelected :styles.box}>{val}</div>
  )
}

export default Box