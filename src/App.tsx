import './App.css'
import Board from './components/Board'
import TextBox from './components/TextBox'
import Row from './components/Row'
import { useEffect, useState } from 'react'
import { GenerateWord } from './functions'





function App() {

  return (
    <>
      <Board />
      <p className='GenerateWord'>{GenerateWord()}</p>
    </>
  )
}

export default App
