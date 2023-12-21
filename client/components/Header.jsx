import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  

  return (
    <div> 
    <div id='header'>
    <div id='header1'>
      <a href='/'><img src='https://vvdmdrousbbddqvwovru.supabase.co/storage/v1/object/sign/Assets/VISIONMQ.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBc3NldHMvVklTSU9OTVEucG5nIiwiaWF0IjoxNzAzMTczNzIyLCJleHAiOjQ4NTY3NzM3MjJ9.48vSAd8nLaeARECDLCRj9vYSgePL5itcaCDZu1BahD8&t=2023-12-21T15%3A48%3A42.826Z' alt="Vision MQ logo" id="logo" /></a>
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