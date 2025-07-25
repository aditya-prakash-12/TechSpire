import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './components/Contact'
import About from './pages/About'
import Register from './pages/Register'
import EventPage from './pages/EventPage'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'
import Schedule from './components/Schedule'
import Speakers from './components/Speakers'

import Venue from './components/Venue'


import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS

import { useEffect } from 'react';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ContactPage from './pages/ContactPage'
import Check from './pages/Check'
import OrgLogin from './pages/OrgLogin'
import OrgDashboard from './pages/OrgDashboard'
import ScrollToTop from './components/ScrollToTop';
import Events from './components/Events'
import Messages from './pages/Messages'
import Sponsors from './components/Sponsors'
import AddEvent from './pages/AddEvent'



function App() {

   useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <>
    <Router>
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/EventPage" element={<EventPage/>}/>
        <Route path="/Faq" element={<Faq/>}/>
        <Route path="/Footer" element={<Footer/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Navbar" element={<Navbar/>}/>
        <Route path="/Schedule" element={<Schedule/>}/>
        <Route path="/Speakers" element={<Speakers/>}/>
        <Route path="/Venue" element={<Venue/>}/>
        <Route path="/ContactPage" element={<ContactPage/>}/>
        <Route path="/Check" element={<Check/>}/>
        <Route path="/OrgLogin" element={<OrgLogin/>}/>
        <Route path="/OrgDashboard" element={<OrgDashboard/>}/>
        <Route path="/Events" element={<Events/>}/>
        <Route path="/Messages" element={<Messages/>}/>
        <Route path="/Sponsors" element={<Sponsors/>}/>
        <Route path="/AddEvent" element={<AddEvent/>}/>

              
        
      </Routes>

    </Router>
    </>
  )
}

export default App
