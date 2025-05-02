import { useState,useEffect } from 'react'
import './App.css'
import Greet from './Component/Greetings'

function App() {
  // UseState
  
  const [count, setcount] = useState(0)
  
  function Incrval(){
    setcount(count+1)
  }
  function Decrease(){
    setcount(count-1)
  }
  function Reset(){
    setcount(0)
  }

  // UseEffect

  useEffect(()=>{console.log(`count is changed ${count}`)},[count])

  return (
    <>
      <div>
        <h1>Welcome to my page</h1>
        <Greet name="Sharda"/>
        <Greet name="Reddy"/>
      </div>
      <div className='Counttab'>
        <button onClick={Incrval}>Inc the count {count}</button>
        <button onClick={Decrease}>Decrease the count {count}</button>
        <button onClick={()=>setcount(0)}>Reset</button>
      </div>
    </> 
  )
}

export default App
