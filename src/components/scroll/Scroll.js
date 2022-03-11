import React, {useState} from 'react';
import {FaArrowCircleDown} from 'react-icons/fa';
// import { Button } from './Styles';
import './scroll.css';
const Scroll = () =>{
	
const [visible, setVisible] = useState(true)
	
const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;

	setVisible(true)
};
	
const scrollToBottom = () =>{
	window.scrollTo({
	top: document.documentElement.scrollHeight,
	behavior: 'auto'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};
	
window.addEventListener('scroll', toggleVisible);
	
return (
	<button onClick={scrollToBottom}
	style={{display: 'inline'}}>
	<FaArrowCircleDown />
	</button>
);

}
	
export default Scroll;
