import React from "react";
import "../styles/sidebar.css";
import arrow from "../assets/back-arrow.svg";
import {getTime, getDate} from "../helpers/time.js";
import TypeTag from "./TypeTag";
import Speaker from "./Speaker";

export default function Sidebar({isOpen = false, event, events, changeEvent, close}){
  let sidebarVisibility = (isOpen === true) ? "sidebar" : "inactive";
  const startTimestamp = event.starttime * 1000;
  const endTimestamp = event.endtime * 1000;

  return(
    <div className={sidebarVisibility}>
      <img src={arrow} alt="" className="back-arrow-image" onClick={close}/>
      <h1 className="sidebar-event-name">{event.name}</h1>
      <h2 className="sidebar-event-date">{getDate(startTimestamp)}</h2>
      <h2 className="sidebar-event-time">{getTime(startTimestamp)}
          {endTimestamp!=0 && (" - " + getTime(endTimestamp))}</h2>
      <TypeTag type={event.eventtype} size="large-tt"/>
      
      {/*{event.host && 
      <div>
        <h3 className="sidebar-header">Host</h3>
          <Speaker name={event.host} pic={event.hostpic}/>
      </div>}*/}

      <h3 className="sidebar-header">Description</h3>
      <p className="description-body">{event.description}
      {event.description && <br />}
      {"Join us in " + event.location + " of the vhHacks Virtual Venue to participate."}
      </p>
    </div>
  );
}
