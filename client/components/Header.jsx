import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  

  return (
    <div> 
    <div id='header'>
    <div id='header1'>
      <a href='/'><img src='../assets/VISIONMQ.png' alt="Vision MQ logo" id="logo" /></a>
    </div>
      <div id='header2'>
        <Link to='/team'><button id='header-button'>team</button></Link>
        <Link to='/demo'><button id='header-button'>demo</button></Link>
      </div>
    </div>
    <hr></hr>
    <hr></hr>
    </div>
  )
}

export default Header;