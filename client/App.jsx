import React from 'react';
import MainContainer from './components/MainContainer.jsx';
import { BrowserRouter as Router } from 'react-router-dom'
import './style.css'

const App = () => {

  return (
    <div id='app'>
      <Router>
        <MainContainer/>
      </Router>
    </div>
  );
}

export default App;