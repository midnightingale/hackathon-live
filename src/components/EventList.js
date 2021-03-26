import React from "react";
import "../styles/eventlist.css";

export default function EventList(){
  return(
    <div className={"type-tag " + type + " " + size}>
      {type}
    </div>
  )
}