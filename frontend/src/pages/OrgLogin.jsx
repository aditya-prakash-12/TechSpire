import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function OrgLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy credentials for demo
    if (credentials.username === 'organizer' && credentials.password === 'adisingh') {
      localStorage.setItem('isOrganizer', 'true');
      navigate('/OrgDashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <Navbar />
      <br /><br />
      <section className="section">
        <div className="container section-title text-center" data-aos="fade-up">
          <h2>Organizer Login</h2>
          <p>Access the dashboard to view all event registrations.</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form onSubmit={handleLogin} className="php-email-form" autoComplete="off">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="form-control mb-3"
                  value={credentials.username}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control mb-3"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />

                {error && <div className="alert alert-danger">{error}</div>}

                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-4">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default OrgLogin;
