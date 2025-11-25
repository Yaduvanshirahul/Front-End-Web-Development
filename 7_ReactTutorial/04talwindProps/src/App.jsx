import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {

  let myObj = {
    channel: "chaiaurcode",
    subs: 21
  }
  let newArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-2 rounded-xl mb-4'> Talwind test</h1>
     <Card name="rahul" btnText="click me" someObj = {myObj} someArr = {newArr} />  {/* here you can't pass array and object directly inside the Card only by declaring variable you can*/}
     <Card name="ram" btnText="visit " /> {/* if someone not pass btntext value in second card so we by default give some value in Card */}
    </>
  )
}

export default App
