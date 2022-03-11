import React from "react";
import './testarea.css';
import Typingarea from '../typingarea/Typingarea';
import Tryagain from '../tryagain/Tryagain';
const Testarea=({completeParagraph,words,characters,wpm,timeRemaining,timeStarted,testinfo,oninput,startAgain})=>{
   
    return (
        <div className="test-area">
        {timeRemaining>0?
        (
        <div className="typing-area" data-aos="fade-up">
                <Typingarea 
                timeRemaining={timeRemaining}
                timeStarted={timeStarted}
                words={words} characters={characters} wpm={wpm}
                completeParagraph={completeParagraph}
                testinfo={testinfo}
                oninput={oninput}
                />
        </div>
        ):
        ( <div className="tryagain-area">
        <Tryagain words={words} characters={characters} wpm={wpm} startAgain={startAgain}/>
        </div>
        )}
        </div>
    );
}
export default Testarea;