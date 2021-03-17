import React from "react";
import "../styles/relatedevent.css";

function RelatedEvent({relatedEventId, events, changeEvent}){
  let thisEvent = events.find(e => 
    e.id == relatedEventId);
  
  return(
    <div> {thisEvent && //make sure thisEvent exists before render
    <a className="related-event" onClick={()=>changeEvent(thisEvent)}>
      {thisEvent.name}
    </a>}
    </div>  
  )
}

export default RelatedEvent;
