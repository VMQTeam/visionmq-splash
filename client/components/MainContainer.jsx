import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Team from './Team.jsx';
import Demo from './Demo.jsx';
import Footer from './Footer.jsx'



const MainContainer = () => {

  return (
    <div id='main-container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/demo' element={<Demo/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default MainContainer;