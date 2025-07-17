import React, { useState } from 'react';

function Contact() {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://techspire-2.onrender.com/createContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData)
      });
      const data = await res.json();
      if (data.message === "success") {
        alert("Your message has been sent. Thank you!");
        setContactData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        alert("Failed to send message, please try again.");
      }
    } catch (error) {
      alert("Server error, please try again later.");
      console.error(error);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="col-lg-6">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="php-email-form"
        data-aos="fade-up"
        data-aos-delay={400}
      >
        <div className="row gy-4">
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={contactData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={contactData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12">
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject"
              value={contactData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12">
            <textarea
              name="message"
              className="form-control"
              rows={6}
              placeholder="Message"
              value={contactData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12 text-center">
            {isSubmitting && <div className="loading">Loading</div>}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
