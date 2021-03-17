import React from "react";
import "../styles/eventcard.css";
import TypeTag from "./TypeTag";

function EventCard(props){
  return(
    <div className={"card " + props.event.event_type + "-card"}
         onClick={props.update}>
    <h3 className={"event-name"}> {props.event.name} </h3>
    <TypeTag type={props.event.event_type}/>
    </div>
  )
}

export default EventCard;