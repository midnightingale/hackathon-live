import React from "react";
import {getTime} from "../helpers/time.js";
import "../styles/eventtime.css";

export default function EventTime({event, size}){
  console.log(event.endtime);
  return(
    <div>
      <h2 className={"event-time " + size}>{getTime(event.starttime)}
          {event.endtime && (" - " + getTime(event.endtime))}</h2>
    </div>
  )
}
