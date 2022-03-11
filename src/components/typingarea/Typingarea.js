import React from "react";
import './typingarea.css';
import Details from "../typingdetails/Details"
import MainTypingarea from "../maintypingarea/MainTypingarea";
const Typingarea=({completeParagraph,words,characters,wpm,timeRemaining,timeStarted,testinfo,oninput})=>{
    return (
<div className="type-area">
<div className="detailsarea">
    <p>
      <Details cardName="Words" cardValue={words}/> 
    </p>
    <p>
    <Details cardName="Characters" cardValue={characters}/> 
    </p>
    <p>
    <Details cardName="Speed" cardValue={wpm}/> 
    </p>
</div>
<div className="typewriter-area">
    <MainTypingarea 
    timeRemaining={timeRemaining}
    timeStarted={timeStarted}
    completeParagraph={completeParagraph}
    testinfo={testinfo}
    oninput={oninput}
    />
</div>
</div>
    )
}
export default Typingarea;