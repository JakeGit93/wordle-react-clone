import '../App.css'
import TextBox from './TextBox';
import { useEffect, useState } from 'react'

function Row(){

    const regex = /^[a-zA-Z]+$/;
    const [key, setKey] = useState('');
    const letterArr = [];

    useEffect(() => {
        function handleKey(e){
                setKey(e.key);
        }

        window.addEventListener('keydown', handleKey);
        console.log('key pressed: ', key )

        return () => {
            window.removeEventListener('keydown', handleKey);
        };

    }, [key])

    return(
        <>
            <div className='TextBoxContainer'>
                <div className='TextBox'><h2>{key.toUpperCase()}</h2></div>
                <div className='TextBox'><h2>{key.toUpperCase()}</h2></div>
                <div className='TextBox'><h2>{key.toUpperCase()}</h2></div>
                <div className='TextBox'><h2>{key.toUpperCase()}</h2></div>
                <div className='TextBox'><h2>{key.toUpperCase()}</h2></div>
            </div> 
        </>
    )
}

export default Row;