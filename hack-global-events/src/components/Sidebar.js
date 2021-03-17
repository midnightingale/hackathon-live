import React from "react";
import "../styles/sidebar.css";
import arrow from "../assets/back-arrow.svg";

function Sidebar({
  isOpen = false,
  event,
  close
  })
{
  let sidebarVisibility = (isOpen === true) ? "sidebar" : "inactive";
  return(
    <div className={sidebarVisibility}>
      <img src={arrow} alt="" className="back-arrow-image" onClick={close}/>
      <h1 className="sidebar-event-name">{event.name}</h1>
      <h2 className="sidebar-time">{getTime(event.start_time)} - {getTime(event.end_time)}</h2>
    </div>
  );
}

//helper function to return time of event
function getTime(unixTimestamp){
  let d = new Date(unixTimestamp);
  let minutes = (d.getMinutes() === 0) ? 
                "00" : d.getMinutes();
  return d.getHours() + ':' + minutes;
}

export default Sidebar;