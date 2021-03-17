import './App.css';
import React from "react"; 
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EventCard from "./components/EventCard";

class App extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = {
      events: [], 
      sidebarOpen: false,
      activeEvent: {},
      loggedIn: false
    };
  }

  componentDidMount() {
    fetch('https://api.hackthenorth.com/v3/graphql?query={ events { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }')
        .then(response => response.json())
        .then(dataIn => {
          let sortedEvents = dataIn.data.events.sort(
            (a, b) => a.start_time - b.start_time
          );
          this.setState({events: sortedEvents,
                         activeEvent: sortedEvents[0]});
        })
        .then(console.log(this.state));
  } 

  render() { 
    return ( 
      <div> 
        <Header />
        <Sidebar
          open={this.state.sidebarOpen}
          event={this.activeEvent}
        />  
        <div className="events-container"> 
          {this.state.events.map((event) => (
            <EventCard event={event} 
                       update={() => 
                        {console.log(event)
                        this.setState({activeEvent: event})}
                      }/>
          ))}
        </div>
      </div>
    ); 
  } 
} 

export default App;
