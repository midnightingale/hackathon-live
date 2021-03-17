import React from "react";
import "../styles/loginmodal.css";

function LoginModal({displayPrivate}){
  return(
    <div className="login-modal modal">
      <div className="modal-content">
      <div className="close" onClick={() =>
        document.getElementsByClassName("login-modal")[0].style.display = "none"
      }>&nbsp;&times;&nbsp;</div>
      <form name="loginForm">
        <label for="username">Username:</label><br/>
        <input type="text" id="username" name="username" required/><br/>
        <label for="password">Password:</label><br/>
        <input type="text" id="password" name="password" required/><br/>
        <div className="button modal-submit" onClick={() => submit(displayPrivate)}>submit</div>
      </form>
      </div>
    </div>
  )
}

function closeModal(){
  //causes compilation to fail, needs fixing
  //document.getElementsByClassName("login-modal")[0].style.display = "none";
}

function submit(executeWhenValid){
  let user = document.getElementById("username").value;
  let pwd = document.getElementById("password").value;
  
  if(user === "htn" && pwd === "2021"){
    executeWhenValid();
  }
}

export default LoginModal;