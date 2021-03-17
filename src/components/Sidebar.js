import React from "react";
import "../styles/sidebar.css";
import arrow from "../assets/back-arrow.svg";
import TypeTag from "./TypeTag";
import Speaker from "./Speaker";
import RelatedEvent from "./RelatedEvent";

function Sidebar({isOpen = false, event, events, changeEvent, close}){
  let sidebarVisibility = (isOpen === true) ? "sidebar" : "inactive";
  //let speakers;

  return(
    <div className={sidebarVisibility}>
      <img src={arrow} alt="" className="back-arrow-image" onClick={close}/>
      <h1 className="sidebar-event-name">{event.name}</h1>
      <h2 className="sidebar-event-date">{getDate(event.start_time)}</h2>
      <h2 className="sidebar-event-time">{getTime(event.start_time)} - {getTime(event.end_time)}</h2>
      <TypeTag type={event.event_type} location="sidebar-tt"/>
      
      {event.speakers && 
      <div>
        <h3>Speakers</h3>
        {event.speakers.map((speaker) => (
          <Speaker name={speaker.name}
                 pic={speaker.profile_pic}/>
        ))}
      </div>}

      <h3>Description</h3>
      <p className="description-body">{event.description}</p>
      
      {event.related_events && 
      <div>
        <h3>Related Events</h3>
        {event.related_events.map((re) => (
          <RelatedEvent relatedEventId={re}
                        events={events}
                        changeEvent={changeEvent}/>
        ))}
      </div>}
      
      <a target="_blank" href={getURL(event)} className="attend-button">
        <div >attend!</div>
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

//returns date of event
function getDate(unixTimestamp){
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let d = new Date(unixTimestamp);
  return months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
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