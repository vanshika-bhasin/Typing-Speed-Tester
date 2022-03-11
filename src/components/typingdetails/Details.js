import React from "react";
import './details.css';

const Details=({cardName,cardValue})=>{
return (
    <div className="details-area">
      <div className="card-name">{cardName}</div>
      <div className="card-value">{cardValue}</div>
    </div>
)
}
export default Details;