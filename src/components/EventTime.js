import React from "react";
import {getTime} from "../helpers/time.js";

export default function EventTime({event, size}){
  return(
    <div>
      <h2 className={"eventcard-event-time " + size}>{getTime(event.starttime)}
          {event.endtime!==0 && (" - " + getTime(event.endtime))}</h2>
    </div>
  )
}
