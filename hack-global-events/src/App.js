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
      loggedIn: false,
      sidebarOpen: false,
      activeEvent: 1                
    };
  }

  componentDidMount() {
    fetch('https://api.hackthenorth.com/v3/graphql?query={ events { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }')
        .then(response => response.json())
        .then(dataIn => {
          let sortedEvents = dataIn.data.events.sort(
            (a, b) => a.start_time - b.start_time
          );
          this.setState({events: sortedEvents});
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
                       onClick={() => this.setState({activeEvent: event.id})}/>
          ))}
        </div>
      </div>
    ); 
  } 
} 

export default App;
