import React from 'react';
import './App.css';
import './scrollbar.css';
import Header from './My_Components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Hero from './My_Components/Hero';
import Footer from './My_Components/Footer';
import Education from './My_Components/Education';
import Skills from './My_Components/Skills/Skills';
import {Project} from './components/Project.js';
import Ceritifications from './My_Components/Ceritifications.js';
function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/certifications' element={<Ceritifications/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
