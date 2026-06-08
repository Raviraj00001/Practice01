import React from "react";
import Buttons from "./components/buttons/buttons";
import Navbar from "./components/Navbar";
const APP=()=>{
  return(
    <div className="container">
      Navbar
      <Navbar/>
      Buttons
      <Buttons/>
      <h1>CSS</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
    </div>
  )
}

export default APP;