import React from "react";
import EventCard from "./EventCard.js";

export default function EventList({events, setActiveEvent}){
  return(
    <div>
      {events.map((event) => (
          <EventCard 
            event={event} 
            setActiveEvent={setActiveEvent}/>)
        )}
    </div>
  )
}
