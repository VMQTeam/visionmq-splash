import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  

  return (
    <div> 
    <div id='header'>
    <div id='header1'>
      <a href='/'><img src='https://images2.imgbox.com/43/cd/7tz2s2d1_o.png' alt="Vision MQ logo" id="logo" /></a>
    </div>
      <div id='header2'>
        <Link to='/team'><button id='team-button'>team</button></Link>
        <Link to='/demo'><button id='demo-button'>demo</button></Link>
      </div>
    </div>
    <hr></hr>
    <hr></hr>
    </div>
  )
}

export default Header;