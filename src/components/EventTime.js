import React from "react";
import {getTime, getDate} from "../helpers/time.js";

export default function EventTime({event}){
  const startTimestamp = event.starttime * 1000;
  const endTimestamp = event.endtime * 1000;

  return(
    <div>
      <h2 className="eventcard-event-time">{getTime(startTimestamp)}
          {endTimestamp!=0 && (" - " + getTime(endTimestamp))}</h2>
    </div>
  )
}
