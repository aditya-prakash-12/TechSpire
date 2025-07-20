import React from 'react'
import Navbar from '../components/Navbar'
import Venue from '../components/Venue'
import Footer from '../components/Footer'
import Sponsors from '../components/Sponsors'



function About() {
  return (
<>
{/* <Navbar/> */}
<br /><br />
<Venue/>

<section id="sponsors" className="sponsors section dark-background">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Sponsors</h2>
    <p>
      Proudly supported by our esteemed sponsors who make this event possible.
    </p>
  </div>
  {/* End Section Title */}
  <Sponsors/>
</section>

{/* <Footer/> */}

</>  
)
}

export default About