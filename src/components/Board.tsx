import '../App.css'
import { useState } from 'react'
import Row from './Row';

function Board(){

    //const regex = /^[a-zA-Z]+$/;


    return(
        <div className='Board'>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
        </div>
    )
}

export default Board;