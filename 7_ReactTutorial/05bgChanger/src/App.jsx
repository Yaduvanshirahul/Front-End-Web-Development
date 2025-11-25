import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    const changeBg = (color) => {
    document.body.style.backgroundColor = color;
  };
  return (
    <>
     <div className='box'>
      <button onClick={() => changeBg("red")} style={{ backgroundColor: "red", color: "white",  }}  className='btn'>Red</button>
      <button onClick={() => changeBg("Green")} style={{ backgroundColor: "green", color: "white" }} className='btn'>Green</button>
      <button onClick={() => changeBg("Blue")} style={{ backgroundColor: "blue", color: "white" }} className='btn'>Blue</button>
      <button onClick={() => changeBg("Olive")} style={{ backgroundColor: "olive", color: "white" }} className='btn'>Olive</button>
      <button onClick={() => changeBg("gray")} style={{ backgroundColor: "gray", color: "white" }} className='btn'>Gray</button>
      <button onClick={() => changeBg("pink")} style={{ backgroundColor: "pink", color: "white" }} className='btn'>Pink</button>
      <button onClick={() => changeBg("yellow")} style={{ backgroundColor: "yellow", color: "white" }} className='btn'>Yellow</button>
      <button onClick={() => changeBg("purple")} style={{ backgroundColor: "purple", color: "white" }} className='btn'>Purple</button>
      <button onClick={() => changeBg("lavender")} style={{ backgroundColor: "lavender", color: "black" }} className='btn'>Lavender</button>
      <button onClick={() => changeBg("white")} style={{ backgroundColor: "white", color: "black" }} className='btn'>White</button>
      <button onClick={() => changeBg("black")} style={{ backgroundColor: "black", color: "white" }} className='btn'>Black</button>
     </div>
    </>
  )
}

export default App
