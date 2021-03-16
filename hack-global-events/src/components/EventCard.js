import React from "react";
import "../styles/eventcard.css";
import { Link } from 'react-router-dom'
import TypeTag from "./TypeTag";

function EventCard({event}){

  return(
    <div className={"card " + event.event_type + "-card"}>
    <h3 className={"event-name"}> {event.name} </h3>
    <TypeTag type={event.event_type}/>
    </div>
  )
}

export default EventCard;