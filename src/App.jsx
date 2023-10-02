import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './counter'

function App() {
 function hendleclick(){
  alert('buttone click koros kno')
 }
 const hendleClicker = ()=>{
  alert('arekbar click korsos kno re sala')
 }
  const hendleclickerable = (num)=>{
    alert(num+5)

  }

  return (
    <>

      <h1>React</h1>

        <Count></Count>



      <button onClick={hendleclick}>Click me</button>
      <button onClick={hendleClicker}>Click me</button>
      <button onClick={ () =>{alert('arekbar korli')}}>Click me</button>
      <button onClick={ () => hendleclickerable(15)}>Click me</button>
     
     
    </>
  )
}

export default App
