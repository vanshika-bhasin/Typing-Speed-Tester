import React from 'react';
import './landing.css';
import Typewriter from 'typewriter-effect';
const Landing=()=>{
return (
<div className='landing'>
<div className='landingleft' data-aos="fade-right">
    <h1 className='texthead'>Test your typing...</h1>
    <div className='typevals'>
       <Typewriter
        options={{
            strings:["Speed","Accuracy","Mistakes"],
            autoStart:true,
            loop:true
        }}
       />
       
    </div>
</div>
<div className='landingright' data-aos="fade-left">
<img src="https://images.ctfassets.net/yqwtwibiobs4/3463AytAHZYcpl21E90QOI/47e2b0082da44327dbfc622a03c5f9ed/Computer-test-800x560__1_.jpg" alt="keyboard"/>
</div>
</div>
)}
export default Landing;