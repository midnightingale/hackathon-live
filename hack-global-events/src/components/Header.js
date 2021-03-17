import React from "react";
import "../styles/header.css";
import hgi from "../assets/logo.svg";

function Header(){
  return(
    <div className="header-container">
      <a href="https://hackthenorth.com/">
        <img src={hgi} alt="HGI logo" className="logo-image"/>
      </a>
      <h1>events</h1>   
    </div>
  )
}

export default Header;
