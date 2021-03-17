import React from "react";
import "../styles/header.css";
import hgi from "../assets/logo.svg";

function Header(){
  return(
    <div className="header-container">
      <img src={hgi} className="logo-image"/>
      <h1>events</h1>   
    </div>
  )
}

export default Header;
