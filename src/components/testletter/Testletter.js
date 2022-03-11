import React from "react";
import "./testletter.css"

const Testletter=({individualletterinfo})=>{
const {status}=individualletterinfo;

const statusvalue={
    correct:"test-letter-correct",
    incorrect:"test-letter-incorrect",
    notattempted:"test-letter-notattempted"
}[status];
    return (
        <span className={`test-letter ${statusvalue}`}>{individualletterinfo.testletter}</span>
    );
}
export default Testletter;