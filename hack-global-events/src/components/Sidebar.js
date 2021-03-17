import React from "react";
import "../styles/sidebar.css";
import arrow from "../assets/back-arrow.svg";
import TypeTag from "./TypeTag";
import Speaker from "./Speaker";

function Sidebar({isOpen = false, event, close}){
  let sidebarVisibility = (isOpen === true) ? "sidebar" : "inactive";
  return(
    <div className={sidebarVisibility}>
      <img src={arrow} alt="" className="back-arrow-image" onClick={close}/>
      <h1 className="sidebar-event-name">{event.name}</h1>
      <h2 className="sidebar-event-time">{getTime(event.start_time)} - {getTime(event.end_time)}</h2>
      <TypeTag type={event.event_type} location="sidebar-tt"/>
      
      <h3>Speakers</h3>
      {/*event.speakers.map((speaker) => (
        <Speaker name={speaker.name}
                 pic={speaker.profile_pic}/>
      ))*/}
      <h3>Description</h3>
      <h3>Related Events</h3>
      <a target="_blank" href={getURL(event)} className="attend-button">
        attend
      </a>
    </div>
  );
}

//returns time of event
function getTime(unixTimestamp){
  let d = new Date(unixTimestamp);
  let minutes = (d.getMinutes() === 0) ? 
                "00" : d.getMinutes();
  return d.getHours() + ':' + minutes;
}

//returns correct (public/private) URL for event
function getURL(event, permission = "public"){
  if(permission === "public"){
    return event.public_url;
  } else if (permission === "private"){
    return event.private_url;
  }
}

export default Sidebar;