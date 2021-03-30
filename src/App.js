import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EventList from "./components/EventList";

export default function App(){
  const [activeEvent, setActiveEvent] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const initialLoad = useRef(false);

  
  useEffect(()=> {if(initialLoad.current) setSidebarOpen(true)}, [activeEvent]);
  useEffect(()=>{initialLoad.current = true}, []);

  return(
    <div className={sidebarOpen ? 
                    "left-shift main-container" : 
                    "main-container"}> 
      <Header />
      <Sidebar
        isOpen={sidebarOpen}
        event={activeEvent}
        close={() => setSidebarOpen(false)}
      /> 
      <EventList setActiveEvent={setActiveEvent}/>
    </div>
  );
}
