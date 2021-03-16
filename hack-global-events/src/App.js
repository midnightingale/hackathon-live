import './App.css';
import React from "react"; 
import Header from "./components/Header";
import EventCard from "./components/EventCard";
  
class App extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      loggedIn: false,
      sidebarActive: false,
      eventActive: null                 
    }; 
    this.event1 = {
      "id": 1,
      "name": "Vonage API Workshop",
      "event_type": "workshop",
      "permission": "private",
      "start_time": 1610442000000,
      "end_time": 1610443800000,
      "description": "A Nanoleaf Shapes Mini Triangle Smarter Kit will be awarded to each member of the winning team for Best Use of Vonage API. Vonage is a cloud communications platform that allows developers to integrate voice, video and messaging into their applications using their communication APIs. So whether you want to build video calls into your app, create a Facebook bot, or build applications on top of programmable phone numbers, Vonage has got you covered",
      "speakers": [
        {
          "name": "Vonage",
          "profile_pic": null
        }
      ],
      "public_url": "",
      "private_url": "https://hopin.com/events/hack-the-north-2020",
      "related_events": [
        2,
        3
      ]
    }
  } 

  render() { 
    return ( 
      <div> {/*leave this here*/}
      <Header />   

      <div className="events-container">
      <EventCard event={this.event1}/> 
      </div>
         
      </div> /*leave this here*/
    ); 
  } 
} 

export default App;
