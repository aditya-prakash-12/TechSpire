import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import OrgNav from '../components/OrgNav';
import Footer from '../components/Footer';

function AllRegistrations() {
  const [registrations, setRegistrations] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('All Events');
  const [availableEvents, setAvailableEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isOrganizer = localStorage.getItem('isOrganizer');
    if (!isOrganizer) {
      navigate('/OrgLogin');
    } else {
      fetchRegistrations();
      fetchEvents();
    }
  }, []);

  const fetchRegistrations = async () => {
    try {
      const res = await fetch('https://techspire-2.onrender.com/all-registrations');
      const data = await res.json();
      if (data.message === 'success') {
        setRegistrations(data.data);
      }
    } catch (error) {
      console.error('Error fetching registrations:', error);
    }
  };

  const fetchEvents = async () => {
  try {
    const res = await fetch('https://techspire-2.onrender.com/events');
    const data = await res.json();
    if (data.message === 'success') {
      const eventNames = data.data.map(event => event.title);
      setAvailableEvents(eventNames);
    }
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};


  return (
    <>
    <OrgNav/>
      <br /><br />
      <section className="section">
        <div className="container section-title text-center" data-aos="fade-up">
          <h2>All Event Registrations</h2>
          <p>View all users who have registered for events.</p>
        
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
                {availableEvents.map((event, idx) => (
                    <option key={idx} value={event}>{event}</option>
                ))}
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
                    <th>Course</th>
                    <th>Semester</th>
                    <th>Institution Name</th>
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
                        <td>{reg.course}</td>
                        <td>{reg.semester}</td>
                        <td>{reg.institutionName}</td>
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
      <Footer />
    </>
  );
}

export default AllRegistrations
