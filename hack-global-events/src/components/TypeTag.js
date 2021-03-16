import React from "react";
// import "../styles/typetag.css";
// import '../styles/global.css';
import { Link } from 'react-router-dom'

function TypeTag({type}){
  return(
    <div> getType(type) </div>
  )
}

function getType(typeString){
  switch (typeString) {
    case "workshop":
      return "Workshop";
    case "activity":
      return "Activity";
    case "tech_talk":
      return "Tech Talk";
  }
}