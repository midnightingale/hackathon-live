import React from "react";
import "../styles/loginbutton.css";

function LoginButton(){
  return(
    <div className={"login button"} onClick={openModal}>
      login
    </div>
  )
}

function openModal(){
  document.getElementsByClassName("login-modal")[0].style.display = "block";
}

export default LoginButton;