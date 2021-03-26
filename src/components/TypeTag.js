import React from "react";
import "../styles/typetag.css";

function TypeTag({type, size}){
  return(
    <div className={"type-tag " + type + " " + size}>
      {type}
    </div>
  )
}

export default TypeTag;