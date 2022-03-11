import React from 'react';
import './challenge.css';
import Testarea from '../testarea/Testarea'
const Challenge=({completeParagraph,words,characters,wpm,timeRemaining,timeStarted,testinfo,oninput,startAgain})=>{
return (
    <div className='challenge-container'>
        <h1 className='challenge-header'  data-aos="fade-down">Let's begin with the test !!</h1>
        <div className='challenge-part'>
            <Testarea 
            completeParagraph={completeParagraph}
            timeRemaining={timeRemaining} 
            timeStarted={timeStarted}  
            words={words} 
            characters={characters} 
            wpm={wpm}
            testinfo={testinfo}
            oninput={oninput}
            startAgain={startAgain}
            />
        </div>
    </div>
)
}
export default Challenge;