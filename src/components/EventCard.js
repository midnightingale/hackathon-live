import React from "react";
import "../styles/eventcard.css";
import TypeTag from "./TypeTag";

export default function EventCard({event, update}){
  return(
    <div className={"card " + event.eventtype + "-card"}
         onClick={update}>
    <h3 className={"event-name"}> {event.name} </h3>
    <TypeTag type={event.eventtype} size="small-tt"/>
    </div>
  )
}