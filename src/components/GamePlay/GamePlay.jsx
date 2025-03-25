import React, { useState } from 'react'
import styles from './GamePlay.module.css'
import Box from './Box'
import DiceRoll from './DiceRoll'
import Rules from './Rules'
const GamePlay = () => {
  const arr=[1,2,3,4,5,6];
  const [score,setScore]=useState(0);
  const [selectedNumber, setSelectednumber]=useState(null);
  const [generatedDice,setGeneratedDice]=useState(1);
  const [error,setError]=useState("Select Number");
  const [showRules,setShowRules]=useState(false);
  const rollDice = (min,max) =>{
    if(!selectedNumber){
      setError("You have not selected any number");
      return;
    }
    else
    {  
      setError("Select Number");
    }
    const generatedNumber=Math.floor(Math.random() *( max - min )+ min);
    setGeneratedDice(generatedNumber);
    if(generatedNumber===selectedNumber)
    {
      setScore((prev)=>(prev+generatedNumber));
    }
    else
    {
      setScore((prev)=>(prev-2));
    }
    setSelectednumber(null);



  }
  const resetScore = () =>{
    setScore(0);
  }
  console.log(selectedNumber);
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.score}>
          <h1>{score}</h1>
          Total Score
        </div>
        <div className={styles.num}>
          {arr.map((value,i)=>(
            <Box isSelected={value===selectedNumber} key={i} val={value} onClick={()=>{setSelectednumber(value);}}/>
          ))}
        </div>
      </div>
      <b className={error==='Select Number' ?styles.selectNumber :styles.numberNotEntered}>
          {error}
      </b>
      <div className={styles.bottom}>
        <div className={styles.dice}>
          <DiceRoll generatedDice={generatedDice} rollDice={rollDice}/>
        </div>
        <p>
          Click On Dice Roll
        </p>
      </div>
      <div className={styles.btns}>
        <button className={styles.resetBtn} onClick={()=>setScore(0)}>
          <b>Reset Score</b>
        </button>
        <button className={styles.ruleBtn} onClick={()=>{setShowRules((prev)=>(!prev))}}>
          <b>{showRules ?"Hide " :"Show "}Rules</b>
        </button>
        
      </div>
      {showRules && <Rules/> }
    </div>

  )
}

export default GamePlay