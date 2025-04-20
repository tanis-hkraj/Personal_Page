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
import {Achievement} from './components/Achievement.js';
import Ceritifications from './My_Components/Ceritifications.js';
function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/Personal_Page' element={<Hero/>}/>
        <Route path='/Personal_Page/education' element={<Education/>}/>
        <Route path='/Personal_Page/skills' element={<Skills/>}/>
        <Route path='/Personal_Page/projects' element={<Project/>}/>
        <Route path='/Personal_Page/certifications' element={<Ceritifications/>}/>
        <Route path='/Personal_Page/achievements' element={<Achievement/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
