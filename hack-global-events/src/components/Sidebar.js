import React from "react";
import "../styles/sidebar.css";
import arrow from "../assets/back-arrow.svg";

function Sidebar({
  open = false,
  event = {}
  })
{
  let sidebarClass = (open==true) ? "sidebar" : "inactive";
  return(
    <div className={sidebarClass}>
      <img src={arrow} alt="" className="back-arrow-image"/>
      <h1 className="event-name">{event.name}</h1>
      <h2>{getTime(event.start_time)} - {getTime(event.end_time)}</h2>
    </div>
  );
}

function getTime(unixTimestamp){
  let d = new Date(unixTimestamp);
  return d.getHours() + ':' + d.getMinutes();
}

export default Sidebar;