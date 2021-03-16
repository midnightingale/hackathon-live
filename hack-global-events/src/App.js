import './App.css';
import React from "react"; 
import Header from "./components/Header";
  
class App extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { loggedIn: false }; 
  } 
  render() { 
    return ( 
      <div> {/*leave this here*/}
      <Header />   
         
         
      </div> /*leave this here*/
    ); 
  } 
} 

export default App;
