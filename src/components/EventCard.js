import React from "react";
import "../styles/eventcard.css";
import TypeTag from "./TypeTag";

function EventCard({event, update}){
  return(
    <div className={"card " + event.event_type + "-card"}
         onClick={update}>
    <h3 className={"event-name"}> {event.name} </h3>
    <TypeTag type={event.event_type} location="main-page-tt"/>
    </div>
  )
}

export default EventCard;