import React from "react";
import './maintypingarea.css'
import Testletter from "../testletter/Testletter";

const MainTypingarea=({timeRemaining,timeStarted,testinfo,oninput})=>{

    console.log(testinfo);
return (
    <div className="main-div">
        <div className="timer-area">
            <p className="timer">00:
            {timeRemaining>=10 ? timeRemaining : `0${timeRemaining}`}</p>
            <p className="timer-text">
                {!timeStarted && "Start typing to begin with the test"}
            </p>
        </div>
        <div className="textarea-part">
            <div className="textarea-left">
                <div className="textarea-paragraph text-areaa">
                    {/* {completeParagraph} */}
                    { 
                   testinfo.map((individualletterinfo,index)=>{
                      return (
                      <Testletter 
                      key={index}
                      individualletterinfo={individualletterinfo}/>
                      );
                    })
                    } 
                </div>
            </div>
            <div className="textarea-right">
                <textarea className="text-areaa" placeholder="Type here..."
                onChange={(e)=>
                    oninput(e.target.value)
                }>
                </textarea>
            </div>
        </div>
    </div>
)
}
export default MainTypingarea;