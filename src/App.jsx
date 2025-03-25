import React, { useState } from 'react'
import StartPage from './components/StartPage/StartPage'
import GamePlay from './components/GamePlay/GamePlay';
const App = () => {
  const [isGameStarted,setIsGameStarted]=useState(false);
  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev);
  }
  
  return (
    <div>
      {isGameStarted ?<GamePlay/> :<StartPage toggle={toggleGamePlay}/>}
    </div>
  )
}

export default App