import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const location = useLocation();

  const toggleMobileNav = () => {
    setIsMobileNavActive((prev) => !prev);
  };

  const isHomePage = location.pathname === '/';

  return (
    <header
      id="header"
      className={`header d-flex align-items-center fixed-top ${isMobileNavActive ? 'mobile-nav-active' : ''} ${!isHomePage ? 'header-dark' : ''}`}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link to="/" className="logo d-flex align-items-center me-auto" >
          <img src="/assets/img/logo.png" alt="Event Logo" />
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMobileNav}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/EventPage" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMobileNav}>
                Events
              </NavLink>
            </li>
             <li>
              <NavLink to="/Check" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMobileNav}>
                Find Registration
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMobileNav}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/ContactPage" className={({ isActive }) => isActive ? 'active' : '' } onClick={toggleMobileNav}>
                Contact
              </NavLink>
            </li>

            {isMobileNavActive && (
            <Link
              to="/Register"
              className="cta-btn d-block d-xl-none text-white text-center mt-3"
              style={{ marginLeft: '20px', marginRight: "20px", maxWidth:"175px" }}
           onClick={toggleMobileNav}
           >
              Register
            </Link>
          )}    


          </ul>

                  {/* Mobile-only register button (inside navmenu) */}
          
          <i
            className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileNav}
            style={{ cursor: 'pointer' }}
          />

            

        </nav>

        <Link className="cta-btn d-none d-xl-block " to="/Register">
          Register
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
