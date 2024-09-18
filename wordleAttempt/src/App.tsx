import './App.css'
import GenerateWord from './components/generateWord'
import Board from './components/board'
import TextBox from './components/textBox'
import Row from './components/Row'
import { useEffect, useState } from 'react'





function App() {

  return (
    <>
      <Board />
      <GenerateWord />
    </>
  )
}

export default App
