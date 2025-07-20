import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Gallery from '../components/Gallery'
import Speakers from '../components/Speakers'
import Schedule from '../components/Schedule'
import Sponsors from '../components/Sponsors'


function Home() {
  return (
   <>
   {/* <Navbar/> */}
   <section id="hero" className="hero section dark-background">
  <img src="/assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
  <div className="container d-flex flex-column align-items-center text-center mt-auto">
    <h2 data-aos="fade-up" data-aos-delay={100} >
      THE ANNUAL
      <br />
      <span>TECHNOLOGY</span> FEST
    </h2>
    <p data-aos="fade-up" data-aos-delay={200}>
      21-23 December, Gyan Bhawan, Gandhi Maidan, Patna-800001
    </p>
    <div data-aos="fade-up" data-aos-delay={300} >
      <a
        href="https://youtu.be/iMAfIRaLl3k?si=j63BlIY2eFQnhKWC&t=2"
        className="glightbox pulsating-play-btn mt-3"
      />
    </div>
  </div>
  <div className="about-info mt-auto position-relative">
    <div className="container position-relative" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-8">
          <h2>About The Event</h2>
          <p style={{color:"gray"}}>
            Join us for a dynamic celebration of innovation, creativity, and technology. Our annual tech event brings together bright minds from across the region to compete, collaborate, and create in a series of thrilling competitions, workshops, exhibitions, and guest talks. Whether you're a coder, designer, gamer, or tech enthusiast, there's something here for everyone. Let's innovate the future—together!


          </p>
        </div>
        <div className=" col-lg-2 mt-4">
          <h3>Where</h3>
          <p style={{color:"gray"}}>Gyan Bhawan, Gandhi Maidan, Patna-800001</p>
        </div>
        <div className="col-lg-2 mt-4">
          <h3>When</h3>
          <p style={{color:"gray"}}>
            Monday to Wednesday
            <br />
            21-23 December
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<Gallery/>
<Speakers/>
<Sponsors/>
{/* <Footer/> */}

   </>
  )
}

export default Home