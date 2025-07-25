import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Check() {
  const [query, setQuery] = useState({ name: '', phone: '' });
  const [registrations, setRegistrations] = useState([]);
  const [status, setStatus] = useState({ loading: false, error: '', message: '' });

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: '', message: '' });
    setRegistrations([]);

    try {
      const res = await fetch('https://techspire-2.onrender.com/getRegistrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(query),
      });

      const result = await res.json();

      if (result.message === 'success') {
        setRegistrations(result.data);
        setStatus({ loading: false, error: '', message: '' });
      } else {
        setStatus({ loading: false, error: result.message, message: '' });
      }
    } catch (error) {
      setStatus({ loading: false, error: 'Server error', message: '' });
    }
  };

  return (
    <>
      <Navbar />
      <br /><br />
      <section id="check-registration" className="section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Check Your Event Registrations</h2>
          <p>Enter your name and contact number to view your registered events.</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit} className="php-email-form mb-4">
                <div className="row">
                  <div className="col-md-6 form-group mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={query.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mb-3">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Your Contact Number"
                      value={query.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-4" disabled={status.loading}>
                    {status.loading ? 'Searching...' : 'Check Registrations'}
                  </button>
                </div>
              </form>

              {/* Status messages */}
              {status.error && <div className="alert alert-danger text-center">{status.error}</div>}

              {/* Show registrations if found */}
              {registrations.length > 0 && (
                <div className="card p-3">
                  <h5>Registered Events:</h5>
                  <ul className="list-group list-group-flush">
                    {registrations.map((reg, idx) => (
                      <li className="list-group-item" key={idx}>
                        <strong>Event:</strong> {reg.event} <br />
                        <strong>Date Registered:</strong>{' '}
                        {new Date(reg.createdAt).toLocaleString()}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Check;
