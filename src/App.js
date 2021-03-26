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
      activeEvent: {},
      sidebarOpen: false,
      loggedIn: false
    };
  }

  componentDidMount() {
    this.grabEvents();
  } 

  componentDidUpdate(){
    this.grabEvents();
  }

  // template for JSON api from google sheets: https://benborgers.com/posts/google-sheets-json
  grabEvents(){
    fetch("https://spreadsheets.google.com/feeds/list/1prC0JJpl7fpFOkaEUGu0vDXPVB8A6c4UIJmKNExd0yY/1/public/values?alt=json")
      .then(res => res.json())
      .then(json => {
        const data = []; 
        const rows = json.feed.entry;

        for(const row of rows) {
          const formattedRow = {};

          for(const key in row) {
            if(key.startsWith("gsx$")) {
              formattedRow[key.replace("gsx$", "")] = row[key].$t;
            }
          }
          data.push(formattedRow);
        }
        let sortedEvents = data.sort(
          (a, b) => a.starttime - b.starttime
        );
        this.setState({events: sortedEvents}) //return data; (do this when functional component)
        //console.log(this.state.events);
      })
  }

  render() { 
    return ( 
      <div className={(this.state.sidebarOpen) ? 
                      "left-shift main-container" : 
                      "main-container"}> 
        <Header />
        <Sidebar
          isOpen={this.state.sidebarOpen}
          event={this.state.activeEvent}
          events={this.state.events}
          changeEvent={(event) => { 
            this.setState({activeEvent: event})}}
          close={() => { 
            this.setState({sidebarOpen: false})}}
        />  
        <div className="events-container"> 
          {this.state.events.map((event) => (
            <EventCard 
              event={event} 
              update={() => { 
                this.setState({activeEvent: event,
                                sidebarOpen: true})
              }}/>
          ))}
        </div>
      </div>
    ); 
  } 
} 

export default App;
