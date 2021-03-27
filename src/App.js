import './App.css';
import React, { useState, useEffect } from 'react';
import {fetchEvents} from "./helpers/fetchEvents.js";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EventList from "./components/EventList";

export default function App(){
  const [events, setEvents] = useState([]);
  const [activeEvent, setActiveEvent] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    fetchEvents().then(response => setEvents(response)); 
  }, []);

  return(
    <div className={sidebarOpen ? 
                    "left-shift main-container" : 
                    "main-container"}> 
      <Header />
      {/*<Sidebar
        isOpen={sidebarOpen}
        event={activeEvent}
        close={() => setSidebarOpen(false)}
      />*/}  
      <EventList events={events}
        setActiveEvent={setActiveEvent}/>
    </div>
  );
}
