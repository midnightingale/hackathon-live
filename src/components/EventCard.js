import React from "react";
import "../styles/eventcard.css";
import TypeTag from "./TypeTag";
import EventTime from "./EventTime";

export default function EventCard({event, setActiveEvent}){
  return(
    <div className={"card " + event.eventtype + "-card"}
         onClick={() => setActiveEvent(event)}>
    <h3 className={"event-name"}> {event.name} </h3>
    <EventTime event={event} size={"small"}/>
    <TypeTag type={event.eventtype} size="small-tt"/>
    </div>
  )
}