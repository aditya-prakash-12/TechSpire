import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import Contact from '../components/Contact'

function ContactPage() {
  return (
    <>
{/* <Navbar/> */}
<br /><br />
    <section id="contact" className="contact section ">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Contact</h2>
    <p>
      Contact Us for Any Queries. Stay Connected With the TechSpire Team.
    </p>
  </div>
  {/* End Section Title */}
  <div className="container" data-aos="fade-up" data-aos-delay={100}>
    <div className="row gy-4">
      <div className="col-lg-6">
        <div
          className="info-item d-flex flex-column justify-content-center align-items-center"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <i className="bi bi-geo-alt" />
          <h3>Address</h3>
          <p className='text-center'>Amity University Patna, DPS More, Rupaspur, Patna 801503</p>
        </div>
      </div>
      {/* End Info Item */}
      <div className="col-lg-3 col-md-6">
        <div
          className="info-item d-flex flex-column justify-content-center align-items-center"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <i className="bi bi-telephone" />
          <h3>Call Us</h3>
          <p>+91 72045 85021</p>
        </div>
      </div>
      {/* End Info Item */}
      <div className="col-lg-3 col-md-6">
        <div
          className="info-item d-flex flex-column justify-content-center align-items-center"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <i className="bi bi-envelope" />
          <h3>Email Us</h3>
          <p>techspire@gmail.com</p>
        </div>
      </div>
      {/* End Info Item */}
    </div>
    <div className="row gy-4 mt-1">
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.777569381345!2d85.05206687372907!3d25.612306477446047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed56457e773c5d%3A0x26f4637f762e3747!2sAmity%20University%2C%20Patna!5e0!3m2!1sen!2sin!4v1752508901347!5m2!1sen!2sin"
          frameBorder={0}
          style={{ border: 0, width: "100%", height: 400 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* End Google Maps */}
      <Contact/>
      {/* End Contact Form */}
    </div>
  </div>
</section>
<Faq/>
{/* <Footer/> */}
</>
  )
}

export default ContactPage