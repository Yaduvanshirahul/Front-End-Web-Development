import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(10) // here usestate method/ property take value as array 

  const addvalue = ()=>{
   if(counter<20){ counter = counter+1;
    setCount(counter);}
  }
  const removevalue = ()=>{
   if(counter>0){
     setCount(counter-1);
   }
  }
  return (
    <>
     <h1>Creating counter Project</h1>
     <h2>counter Value: {counter}</h2>
     <button className="button1" onClick={addvalue}>Add value {counter}</button>
     <br />
     <button className="button1" onClick={removevalue}>Remove value {counter}</button>
     <footer>Counter: {counter}</footer>
    </>
  )
}

export default App
