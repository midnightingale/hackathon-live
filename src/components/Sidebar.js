import React from "react";
import "../styles/sidebar.css";
import arrow from "../assets/back-arrow.svg";
import {getDate} from "../helpers/time.js";
import TypeTag from "./TypeTag";
import EventTime from "./EventTime";
import Speaker from "./Speaker";

export default function Sidebar({isOpen, event, close}){
  const sidebarVisibility = (isOpen) ? "sidebar-active" : "sidebar-inactive";

  return(
    <div className={sidebarVisibility + " sidebar"}>
      <img src={arrow} alt="back" className="back-arrow-image" onClick={close}/>
      <h1 className="sidebar-event-name">{event.name}</h1>
      <h2 className="sidebar-event-date">{getDate(event.starttime)}</h2>
      <EventTime className="sidebar-event-time" event={event} size="large"/>
      <TypeTag type={event.eventtype} size="large-tt"/>
      
      {event.host && 
      <div>
        <h3 className="sidebar-header">Host</h3>
          <Speaker name={event.host} pic={event.hostpic}/>
      </div>}

      <h3 className="sidebar-header">Description</h3>
      <p className="description-body">{event.description}
      {event.description && <br />}
      {"Join us in " + event.location + " of the vhHacks Virtual Venue to participate."}
      </p>
    </div>
  );
}
