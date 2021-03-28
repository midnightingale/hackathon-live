import React, {useEffect, useState} from "react";
import {fetchEvents} from "../helpers/fetchEvents.js";
import EventCard from "./EventCard.js";

export default function EventList({setActiveEvent}){
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(response => setEvents(response)); 
  }, []);
  
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
