import React from "react";
import "../styles/header.css";
import vhh from "../assets/logo.png";

function Header(){
  return(
    <div className="header-container">
      <a href="https://vhhacks.ca/">
        <img src={vhh} alt="vhHacks logo" className="logo-image"/>
      </a>
      <h1>vhHacks 2021</h1>  
      <h3 className="subtitle">live schedule</h3> 
    </div>
  )
}

export default Header;
