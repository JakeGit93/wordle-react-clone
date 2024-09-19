import '../App.css'
import { useState } from 'react'
import wordList from '../assets/wordle.json'

function GenerateWord(){

    const randomValue = Math.floor(Math.random() * 2315);

    return(
        <p className='GenerateWord'> - {wordList[randomValue]}, {randomValue} -</p>
    )
}

export default GenerateWord;