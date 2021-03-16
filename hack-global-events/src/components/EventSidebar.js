import React from "react";
// import "../styles/eventcard.css";
import { Link } from 'react-router-dom'

function EventCard(){
  return(
    <Link>
    <h3> {event.title} </h3>
    <TypeTag type={events.event_type}/>
    </Link>
  )
}