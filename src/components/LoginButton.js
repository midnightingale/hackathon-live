//password is htn2021

import React from "react";
import "../styles/loginbutton.css";

function LoginButton({type, location}){
  return(
    <div className={"login-button"}>
      login
    </div>
  )
}



function openModal(){
  document.getElementById("info-modal").style.display = "block";
}

function closeModal(){
  document.getElementById("info-modal").style.display = "none";
}

export default LoginButton;