import './App.css';
import Nav from './components/nav/Nav';
import Landing from './components/landing/Landing';
import Scroll from "./components/scroll/Scroll";
import Footer from "./components/footer/Footer";
import Challenge from './components/challengearea/Challenge';
import { Component } from 'react';
import {SAMPLE_PARAGRAPHS} from './data/sampleParagraphs';
//Animate on Scroll Library and typewriter-effect library have been added.

const totalTime=60;
const paraUrl="http://metaphorpsum.com/paragraphs/1/10";
const defaultState={
  completeParagraph:"",
  timeStarted:false,
  timeRemaining:totalTime,
  words:0,
  characters:0,
  wpm:0,
  testinfo:[]
    }

class App extends Component{
  state=defaultState;

fetchRandomParagraph=()=>{
  const info=SAMPLE_PARAGRAPHS[Math.floor(Math.random()*SAMPLE_PARAGRAPHS.length)];
  
  // this.setState({completeParagraph:info});
  const paralettersarr=info.split("");
  const testinfo=paralettersarr.map((paraletter)=>{
    return {
      testletter:paraletter,
      status:"not attempted"
    }
  });
this.setState({...defaultState,testinfo, completeParagraph:info});
}

fetchparagraph=()=>{
  fetch(paraUrl)
  .then((response)=>response.text())
  .then((info)=>{
this.setState({completeParagraph:info});
  const paralettersarr=info.split("");
  const testinfo=paralettersarr.map((paraletter)=>{
    return {
      testletter:paraletter,
      status:"not attempted"
    }
  });
this.setState({...defaultState,testinfo, completeParagraph:info});
})
}

componentDidMount(){
  this.fetchRandomParagraph();   
}

  startTimer=()=>{
    this.setState({timeStarted:true});

    const timer= setInterval(()=>{
       if(this.state.timeRemaining>0)
       {
        const timespent=totalTime-this.state.timeRemaining;
        const wpm=timespent>0 ? (this.state.words/timespent)*totalTime : 0;
             this.setState(
           {timeRemaining: this.state.timeRemaining-1,
           wpm:parseInt(wpm)
           })
       }
       else{
         clearInterval(timer);
       }
    },1000);
  }
  
  startAgain=()=>{
    this.fetchRandomParagraph();
  }

  handleinput=(inputt)=>{
    if(!this.state.timeStarted)
    {this.startTimer();}

const characters=inputt.length;
const words=inputt.split(" ").length;
const index=characters-1;

//For underflow condition
if(index<0)
{
  this.setState({
    testinfo:[
      {testletter:this.state.testinfo[0].testletter,
      status:"notAttempted"
      },
      ...this.state.testinfo.slice(1)
    ],
    characters,
    words
  })
return;
}

//For overflow condition
if(index>=this.state.completeParagraph.length)
{
  this.setState({characters,words});
  return;
}

//Main logic for backspace case:

const testinfo=this.state.testinfo;
if(!(index===this.state.completeParagraph.length-1))
testinfo[index+1].status="notAttempted";

//check for correctly typed letter
const isCorrect=inputt[index]===testinfo[index].testletter;

//update testinfo
testinfo[index].status=isCorrect ? "correct" : "incorrect";

//update state
this.setState({
  testinfo,
  words,
  characters
})
}

  render(){
    console.log("rendered",this.state.testinfo);
  return (
    <div className="App">
      <Nav/>
      <div className='mainpart'>
      <Landing/>
      <Scroll/>
      <Challenge
        completeParagraph={this.state.completeParagraph}
        words={this.state.words}
        characters={this.state.characters}
        wpm={this.state.wpm}
        timeRemaining={this.state.timeRemaining}
        timeStarted={this.state.timeStarted}
        testinfo={this.state.testinfo}
        oninput={this.handleinput}
        startAgain={this.startAgain}
      />
      </div>
      <Footer/>
    </div>
  );
  }
}

export default App;
