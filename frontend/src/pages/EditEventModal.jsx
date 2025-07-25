import React, { useState } from 'react';


function EditEventModal({ show, onClose, eventData, onSave }) {
  const [formData, setFormData] = useState({ ...eventData });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (new Date(formData.date) < new Date()) {
      alert("Please select a future date.");
      return;
    }

    try {
      let imageUrl = formData.image;

      if (imageFile) {
        const imgData = new FormData();
        imgData.append('image', imageFile);

        const uploadRes = await fetch('https://techspire-2.onrender.com/upload-image', {
          method: 'POST',
          body: imgData,
        });

        const uploadJson = await uploadRes.json();
        imageUrl = uploadJson.imageUrl;
      }

      const updatedEvent = { ...formData, image: imageUrl };
      await onSave(updatedEvent);
      onClose();
    } catch (err) {
      alert("Failed to update event.");
      console.error(err);
    }
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content text-white" style={{ backgroundColor: 'rgba(220, 20, 60, 0.9)' }}>
          <div className="modal-header">
            <h5 className="modal-title">Edit Event</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea name="description" rows="3" value={formData.description} onChange={handleChange} className="form-control" required />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Time</label>
                  <input type="time" name="time" value={formData.time} onChange={handleChange} className="form-control" required />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Venue</label>
                <input type="text" name="venue" value={formData.venue} onChange={handleChange} className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Change Image (optional)</label>
                <input type="file" accept="image/*" onChange={handleFileChange} className="form-control" />
              </div>
            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-light">Update</button>
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditEventModal;
