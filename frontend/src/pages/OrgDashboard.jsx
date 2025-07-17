import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function OrgDashboard() {
  const [registrations, setRegistrations] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('All Events');
  const navigate = useNavigate();

  useEffect(() => {
    const isOrganizer = localStorage.getItem('isOrganizer');
    if (!isOrganizer) {
      navigate('/OrgLogin');
    } else {
      fetchRegistrations();
    }
  }, []);

  const fetchRegistrations = async () => {
    try {
      const res = await fetch('http://localhost:8000/all-registrations');
      const data = await res.json();
      if (data.message === 'success') {
        setRegistrations(data.data);
      }
    } catch (error) {
      console.error('Error fetching registrations:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isOrganizer');
    navigate('/');
  };

  return (
    <>
      {/* <Navbar /> */}
      <br /><br />
      <section className="section">
        <div className="container section-title text-center" data-aos="fade-up">
          <h2>All Event Registrations</h2>
          <p>View all users who have registered for events.</p>
         <div className="d-flex justify-content-center gap-3 mt-3">
           <Link to="/Messages"><button className="btn btn-primary">
    View Queries
  </button></Link>
  <button onClick={handleLogout} className="btn btn-danger">
    Logout
  </button>
 
</div>
        </div>

        <div className="container mt-4" data-aos="fade-up" data-aos-delay="100">
          <div className="row mb-3">
            <div className="col-md-4">
              <select
                className="form-select"
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
              >
                <option value="All Events">All Events</option>
                <option value="eSports">eSports</option>
                <option value="Workshops">Workshop</option>
                <option value="Hackathon">Hackathon</option>
                <option value="Tech Quiz">Tech Quiz</option>
                <option value="Treasure Hunt">Treasure Hunt</option>
              </select>
            </div>
          </div>

          {registrations.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Event</th>
                    <th>Message</th>
                    <th>Registered On</th>
                  </tr>
                </thead>
                <tbody>
                  {registrations
                    .filter((reg) => selectedEvent === 'All Events' || reg.event === selectedEvent)
                    .map((reg, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{reg.name}</td>
                        <td>{reg.email}</td>
                        <td>{reg.phone}</td>
                        <td>{reg.event}</td>
                        <td>{reg.message || '-'}</td>
                        <td>{new Date(reg.createdAt).toLocaleString()}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center">No registrations found.</p>
          )}
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default OrgDashboard;
