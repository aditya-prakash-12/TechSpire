import React, { useEffect, useState } from 'react';
import EditEventModal from './EditEventModal';
import { useNavigate } from 'react-router-dom';
import OrgNav from '../components/OrgNav';
import Footer from '../components/Footer';

function OrgDashboard() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

   useEffect(() => {
      const isOrganizer = localStorage.getItem('isOrganizer');
      if (!isOrganizer) {
        navigate('/OrgLogin');
      } else {
        fetchEvents();
      }
    }, []);
  

  const fetchEvents = async () => {
    const res = await fetch("https://techspire-2.onrender.com/events");
    const data = await res.json();
    setEvents(data.data || []);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this event?");
    if (!confirm) return;

    const res = await fetch(`https://techspire-2.onrender.com/delete-event/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    alert(data.message);
    fetchEvents();
  };

  const handleEditSave = async (updatedEvent) => {
    const res = await fetch(`https://techspire-2.onrender.com/update-event/${updatedEvent._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedEvent),
    });

    const data = await res.json();
    alert(data.message);
    fetchEvents();
  };

  return (
    <>
    <OrgNav/>
   
    <div className="container section-title py-5" data-aos="fade-up">
      <h2 className="text-center mt-5 mb-5 " >Manage Events</h2>
      <div className="row gy-4">
        {events.map((event) => (
          <div className="col-md-6" key={event._id}>
          <div
            className="p-4 rounded shadow text-white d-flex flex-column justify-content-between"
            style={{
              backgroundColor: "#121212",
              minHeight: "460px", // ✅ Fixed min height
              height: "100%",
            }}
          >
              <img src={`https://techspire-2.onrender.com${event.image}`} className="img-fluid rounded mb-3" style={{ maxHeight: "250px", width: "100%", objectFit: "cover" }} alt={event.title} />
              <h4>{event.title}</h4>
            <p style={{ maxHeight: "100px", display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical',overflowY: "hidden", textOverflow:"ellipsis" }}>
              {event.description}
            </p>
              <p><strong>Date:</strong> {event.date} | <strong>Time:</strong> {event.time}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              <div className="d-flex justify-content-between">
                <button className="btn  btn-outline-light" onClick={() => { setSelectedEvent(event); setShowModal(true); }}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(event._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      

      {showModal && (
        <EditEventModal
          show={showModal}
          onClose={() => setShowModal(false)}
          eventData={selectedEvent}
          onSave={handleEditSave}
        />
      )}
    </div>

    <Footer/>
    </>
  );
}

export default OrgDashboard;
