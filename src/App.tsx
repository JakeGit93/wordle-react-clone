import './App.css'
import GenerateWord from './components/GenerateWord'
import Board from './components/Board'
import TextBox from './components/TextBox'
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
