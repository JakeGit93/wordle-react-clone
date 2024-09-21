import wordList from './assets/wordle.json'

//TODO

//add function for parsing guess attempts and then loading them into the letter tiles
//add function for displaying correct, incorrect and partial letter guesses
//add function for managing attempt number/remaining attempts
//move GenerateWord component logic into a function in this file

export function GenerateWord(){
    const randomValue = Math.floor(Math.random() * 2315);

    return(
        wordList[randomValue]
    )
}

