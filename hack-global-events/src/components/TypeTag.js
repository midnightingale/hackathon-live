import React from "react";
import "../styles/typetag.css";

function TypeTag({type}){
  return(
    <div className={"type-tag " + type}>
      {getType(type)}
    </div>
  )
}

function getType(typeString){
  switch (typeString) {
    case "workshop":
      return "workshop";
    case "activity":
      return "activity";
    case "tech_talk":
      return "tech talk";
  }
}

export default TypeTag;