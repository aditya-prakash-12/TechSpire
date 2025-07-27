import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://techspire-2.onrender.com/events')
      .then(res => res.json())
      .then(data => setEvents(data.data || []))
      .catch(err => console.error('Error fetching events:', err));
  }, []);

  return (
    <section id="events" className="events section py-5">
      <div className="container section-title text-center mb-5" data-aos="fade-up">
        <h2>Our Events</h2>
        <p className="section-subtitle">Explore, Engage, Excel</p>
      </div>

      <div className="container">
        <div className="row gy-5">
          {events.map((event, index) => (
            <div className="col-12" key={index} data-aos="fade-up" data-aos-delay="100">
              <div
                  className={`d-flex flex-column flex-md-row ${index % 2 !== 0 ? 'flex-md-row-reverse' : ''} align-items-center shadow p-4 rounded`}
                  style={{
                    background: '#121212',
                    color: 'white',
                    minHeight: '320px', // Fixed minimum height
                    height: '100%', 
                    overflow: 'hidden'
                  }}
                >

                
                <div className="col-md-5 text-center mb-3 mb-md-0">
                  <img
                    src={ event.image || 'https://res.cloudinary.com/dgggfmllp/image/upload/v1753543105/default_event.jpg'}
                    className="img-fluid rounded"
                    alt={event.title}
                    style={{
                      maxHeight: '280px',
                      objectFit: 'cover',
                      width: '100%',
                      boxShadow: '0 0 20px rgba(220, 20, 60, 0.6)' // Crimson box-shadow
                    }}
                    onError={(e) => {
    e.target.src = 'https://res.cloudinary.com/dgggfmllp/image/upload/v1753543105/default_event.jpg';
  }}
                  />
                </div>

                <div className="col-md-7 ps-md-4">
                  <h3 className="fw-bold" style={{textShadow:'0px 0px 3px white'}}>{event.title}</h3>
                <p className="mb-2" style={{ maxHeight: '80px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical',overflowY: "hidden", textOverflow:"ellipsis" }}>
                  {event.description}
                </p>
                  <p className="mb-1"><strong>Date:</strong> {event.date}</p>
                  <p className="mb-1"><strong>Time:</strong> {event.time}</p>
                  <p className="mb-3"><strong>Venue:</strong> {event.venue}</p>
                  <Link to="/Register" state={{ selectedEvent: event.title }}>
                    <button className="btn btn-outline-light px-4">Register</button>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
