import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import OrgNav from '../components/OrgNav';

function Messages() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isOrganizer = localStorage.getItem('isOrganizer');
    if (!isOrganizer) {
      navigate('/OrgLogin');
    } else {
      fetchMessages();
    }
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch('https://techspire-2.onrender.com/Messages');
      const data = await res.json();
      if (data.message === 'success') {
        setMessages(data.data);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isOrganizer');
    navigate('/');
  };

  return (
    <>
    <OrgNav/>
    <br /> <br/>
    <div className="container mt-5">
     <div className="container section-title text-center" data-aos="fade-up">
          <h2>View Messages</h2>
          <p>Access all the messages from the Contact Us page.</p>
           
        </div>
      {messages.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Submitted On</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, index) => (
                <tr key={msg._id}>
                  <td>{index + 1}</td>
                  <td>{msg.name}</td>
                 <td>
                <a
                    href={`https://mail.google.com/mail/?view=cm&to=${msg.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {msg.email}
                </a>
                </td>

                  <td>{msg.subject}</td>
                  <td>{msg.message}</td>
                  <td>{new Date(msg.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">No messages found.</p>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default Messages
