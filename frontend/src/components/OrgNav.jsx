import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

function OrgNav() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const location = useLocation();

  const toggleMobileNav = () => {
    setIsMobileNavActive((prev) => !prev);
  };

  const isHomePage = location.pathname === '/';

  const handleLogout = () => {
    localStorage.removeItem('isOrganizer');
    navigate('/');
  };


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
              <NavLink to="/OrgDashboard" end className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMobileNav}>
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/AllRegistrations" end className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMobileNav}>
                Registrations
              </NavLink>
            </li>
             <li>
              <NavLink to="/Messages" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMobileNav}>
                Queries
              </NavLink>
            </li>
            <li>
              <NavLink to="/AddEvent" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMobileNav}>
                Add Event
              </NavLink>
            </li>
            

            {isMobileNavActive && (
            <Link to="/">
              <button onClick={handleLogout} className="btn btn-danger">Logout</button>
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

        <Link to="/">
              <button onClick={handleLogout} className="btn btn-danger mx-3">Logout</button>
            </Link>
      </div>
    </header>
  );
}

export default OrgNav;
