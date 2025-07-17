import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://techspire-2.onrender.com/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.message === "success") {
        alert("Thank you for registering!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          event: '',
          message: ''
        });
      } else {
        alert("Failed to register. Please try again.");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      alert("Something went wrong. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      {/* <Navbar /> */}
      <br /><br />
      <section id="register" className="register section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Event Registration</h2>
          <p>Please fill out the form below to register for an event.</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 form-group mb-3">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      title="Enter a valid 10-digit phone number"
                    />
                  </div>
                  <div className="col-md-6 form-group mb-3">
                    <select
                      name="event"
                      className="form-select"
                      value={formData.event}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>-- Select Event --</option>
                      <option value="eSports">eSports</option>
                      <option value="Workshops">Workshop</option>
                      <option value="Hackathon">Hackathon</option>
                      <option value="Tech Quiz">Tech Quiz</option>
                      <option value="Treasure Hunt">Treasure Hunt</option>
                    </select>
                  </div>
                </div>

                <div className="form-group mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Additional Message (optional)"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary px-5 py-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Register Now"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center mt-5 mb-5">
  <p className="mb-2"> Are you an organizer?</p>
  <Link to="/OrgLogin" className="btn btn-outline-dark px-4 py-2">
    Organizer Login
  </Link>
</div>

      {/* <Footer /> */}
    </>
  );
}

export default Register;
