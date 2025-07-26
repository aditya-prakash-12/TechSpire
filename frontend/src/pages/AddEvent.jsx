import React, { useState } from 'react';
import OrgNav from '../components/OrgNav';
import Footer from '../components/Footer';

function AddEvent() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    venue: '',
    image: '', // Will be set after upload
  });

  

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = '';

      // Step 1: Upload Image
      if (imageFile) {
        const imgFormData = new FormData();
        imgFormData.append('image', imageFile);

        const uploadRes = await fetch('https://techspire-2.onrender.com/upload-image', {
          method: 'POST',
          body: imgFormData,
        });

       const uploadData = await uploadRes.json();
imageUrl = uploadData.imageUrl || process.env.DEFAULT_EVENT_IMAGE;
// Returned from backend
      }

      // Step 2: Submit Event Data
      const eventRes = await fetch('https://techspire-2.onrender.com/add-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, image: imageUrl }),
      });

      const data = await eventRes.json();
      alert(data.message || 'Event added!');

      setFormData({
        title: '',
        description: '',
        date: '',
        time: '',
        venue: '',
        image: '',
      });
      setImageFile(null);
    } catch (error) {
      alert('Something went wrong.');
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <>
      <OrgNav />
      <br /><br />
      <section id="add-event" className="section">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center mb-0">
            <h2>Add New Event</h2>
            <p className="section-subtitle">Organize, Create, Inspire</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <form onSubmit={handleSubmit} className="p-4 shadow rounded text-white" style={{  backgroundColor: 'rgba(220, 20, 60, 0.7)' }}>

                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Enter event title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    name="description"
                    className="form-control"
                    placeholder="Enter event description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    required
                  />
                </div>

                <div className="mb-3 col-4">
                  <label className="form-label">Upload Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Date</label>
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Time</label>
                    <input
                      type="time"
                      name="time"
                      className="form-control"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Venue</label>
                  <input
                    type="text"
                    name="venue"
                    className="form-control"
                    placeholder="Enter venue"
                    value={formData.venue}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary px-4"
                    disabled={loading}
                   
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Adding...
                      </>
                    ) : (
                      'Add Event'
                    )}
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

export default AddEvent;
