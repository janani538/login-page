// import React from 'react';
// import "./Login.css";

// function Login(){




import React from 'react';
import "./Login.css";
import {replace} from 'react-router-dom';



// const Login = () => {
  function Login(){
  var userdata = [
    {username: "Akira",passcode: 457,cart:[]},
    {username: "kaira",passcode: 458,cart:[]},
    {username: "tara",passcode: 459,cart:[]},
  ];
  const signup=() =>{
    var username=document.getElementById("username").value;
    var passcode=document.getElementById("passcode").value;
    var activeuserdetail=userdata.filter((data)=>{
         return username ==data.username;
    });
    console.log(activeuserdetail);
    if(activeuserdetail.length>0){
      if(activeuserdetail[0].passcode == passcode){
        localStorage.setItem("username",activeuserdetail[0].username);
        window.location.replace("/Home");
      }else{
        console.log("wrong passcode");
      }
    }
  };
   return ( 
    <div className ="main">  
    <h1>Google</h1>
    <h3>Login</h3>
    <h4>Name:</h4>
      <input type="text" placeholder="enter name" id="username"/>
    <h4>PassWord:</h4>
      <input type="text" placeholder="password" id="passcode"/>
      <button id="one" onClick={signup}>submit</button> 
      <p>already have account?<a href="#" >signup</a></p>
        </div>
    
  );
}

export default Login;



