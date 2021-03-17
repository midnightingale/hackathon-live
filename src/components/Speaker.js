import React from "react";
import "../styles/speaker.css";
import defaultpic from "../assets/defaultpic.svg";

function Speaker({name, pic}){
  let picURL = defaultpic;
  if(pic !== null){
    picURL = pic;
  }

  return(
    <div className="horizontal-container">
      <img src={picURL} alt="speaker" className="speaker-pic"/>
      <p className="speaker-name">{name}</p>   
    </div>
  )
}

export default Speaker;
