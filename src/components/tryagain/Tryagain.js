import React from "react";
import './tryagain.css';

const TryAgain=({words,characters,wpm,startAgain})=>{
    return (
    <div className="tryagain-area">
<h1>Test Results🌟</h1>
<div className="result-area">
<p>
    <strong>Words:</strong> {words}
</p>
<p>
<strong>characters:</strong> {characters}
</p>
<p>
<strong>Speed:</strong> {wpm}
</p>
</div>
<div>
    <button className="end-buttons tryagain-btn" onClick={()=>startAgain()}>Try Again</button>
    <button onClick={
        ()=>{
            window.open("https://www.facebook.com/sharer/sharer.php?u=anything.com","facebook-share-dialog","width=500,height=600"); //Generic code to be able to share on Facebook
        }
    } className="end-buttons share-btn">
    Share
    </button>
    <button onClick={
        ()=>{
            window.open("https://www.twitter.com/intent/tweet?text=anything.com","twitter","width=500,height=600"); //Generic code to be able to share on Twitter
        }
    } className="end-buttons tweet-btn">
    Tweet    
    </button>
</div>

    </div>)
}
export default TryAgain;