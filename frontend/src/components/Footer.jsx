import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer id="footer" className="footer dark-background">
  <div className="footer-top">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-3 col-md-6 footer-about">
          <Link to="/" className="logo d-flex align-items-center">
            <span className="sitename"><img src="/assets/img/logo.png" alt="" /></span>
          </Link>
          <div className="footer-contact pt-1">
            <p>Gyan Bhawan</p>
            <p>Gandhi Maidan, Patna 800001</p>
            <p className="mt-3">
              <strong>Phone:</strong> <span>+91 72045 85021</span>
            </p>
            <p>
              <strong>Email:</strong> <span>techspire@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About us</Link>
            </li>
            <li>
              <Link to="/EventPage">Schedule</Link>
            </li>
            <li>
              <Link to="/">Terms of service</Link>
            </li>
            <li>
              <Link to="/">Privacy policy</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Our Events</h4>
          <ul>
            <li>
              <Link to="/Register">eSports</Link>
            </li>
            <li>
              <Link to="/Register">Workshops</Link>
            </li>
            <li>
              <Link to="/Register">Hackathon</Link>
            </li>
            <li>
              <Link to="/Register">Tech Quiz</Link>
            </li>
            <li>
              <Link to="/Register">Treasure Hunt</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Register Now</h4>
          <div className="qr"><img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://techspire-2-frontend.onrender.com/Register" alt="Register QR Code" />
</div>
        </div>
    
      </div>
    </div>
  </div>
  <div className="copyright text-center">
    <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
      <div className="d-flex flex-column align-items-center align-items-lg-start">
        <div>
          © Copyright{" "}
          <strong>
            <span>TechSpire</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
        
          Designed by Adii
        </div>
      </div>
      <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
        <a href="https://x.com/" target='_blank'>
          <i className="bi bi-twitter-x" />
        </a>
        <a href="https://www.facebook.com/" target='_blank'>
          <i className="bi bi-facebook" />
        </a>
        <a href="https://www.instagram.com/" target='_blank'>
          <i className="bi bi-instagram" />
        </a>
        <a href="https://in.linkedin.com/" target='_blank'>
          <i className="bi bi-linkedin" />
        </a>
      </div>
    </div>
  </div>
</footer>
</>
  )
}

export default Footer
