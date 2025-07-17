import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

function Venue() {
  useEffect(() => {
    GLightbox({ selector: '.glightbox' });
  }, []);

  return (
    <>
      <section id="venue" className="venue section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Event Venue</h2>
          <p>
            Experience elegance and excellence at <strong>Gyan Bhawan</strong>, Patna
          </p>
        </div>

        <div className="container-fluid" data-aos="fade-up">
          <div className="row g-0">
            <div className="col-lg-6 venue-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.515050490185!2d85.14061377372948!3d25.621026077440504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59fc8f799ea9%3A0x539dcc0f016548bd!2sGyan%20Bhawan!5e0!3m2!1sen!2sin!4v1752509021918!5m2!1sen!2sin"
                frameBorder={0}
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen
                loading="lazy"
                title="Venue Location"
              />
            </div>
            <div className="col-lg-6 venue-info">
              <div className="row justify-content-center">
                <div className="col-11 col-lg-8 position-relative">
                  <h3>Gyan Bhawan, Gandhi Maidan, Patna</h3>
                  <p>
                    A premier convention center known for its modern facilities and vibrant atmosphere, perfect for hosting prestigious gatherings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
            <div
      className="container-fluid venue-gallery-container"
      data-aos="fade-up"
      data-aos-delay={100}
    >
      <div className="row g-0">
        <div className="col-lg-3 col-md-4">
          <div className="venue-gallery">
            <a
              href="/assets/img/venue-gallery/venue-gallery-1.jpg"
              className="glightbox"
              data-gall="venue-gallery"
            >
              <img
                src="/assets/img/venue-gallery/venue-gallery-1.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="venue-gallery">
            <a
              href="/assets/img/venue-gallery/venue-gallery-2.jpg"
              className="glightbox"
              data-gall="venue-gallery"
            >
              <img
                src="/assets/img/venue-gallery/venue-gallery-2.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="venue-gallery">
            <a
              href="/assets/img/venue-gallery/venue-gallery-3.jpg"
              className="glightbox"
              data-gall="venue-gallery"
            >
              <img
                src="/assets/img/venue-gallery/venue-gallery-3.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="venue-gallery">
            <a
              href="/assets/img/venue-gallery/venue-gallery-4.jpg"
              className="glightbox"
              data-gall="venue-gallery"
            >
              <img
                src="/assets/img/venue-gallery/venue-gallery-4.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="venue-gallery">
            <a
              href="/assets/img/venue-gallery/venue-gallery-5.jpg"
              className="glightbox"
              data-gall="venue-gallery"
            >
              <img
                src="/assets/img/venue-gallery/venue-gallery-5.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="venue-gallery">
            <a
              href="/assets/img/venue-gallery/venue-gallery-6.jpg"
              className="glightbox"
              data-gall="venue-gallery"
            >
              <img
                src="/assets/img/venue-gallery/venue-gallery-6.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="venue-gallery">
            <a
              href="/assets/img/venue-gallery/venue-gallery-7.jpg"
              className="glightbox"
              data-gall="venue-gallery"
            >
              <img
                src="/assets/img/venue-gallery/venue-gallery-7.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="venue-gallery">
            <a
              href="/assets/img/venue-gallery/venue-gallery-8.jpg"
              className="glightbox"
              data-gall="venue-gallery"
            >
              <img
                src="/assets/img/venue-gallery/venue-gallery-8.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Venue Section */}
  {/* Hotels Section */}
  <section id="hotels" className="hotels section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Hotels</h2>
      <p>
        Best nearby hotels offering comfort, convenience, and exceptional hospitality for a memorable stay during the event.
      </p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="card h-100">
            <div className="card-img">
              <img src="/assets/img/hotels-1.jpg" alt="" className="img-fluid" />
            </div>
            <h3>
              <a href="https://www.thepanachepatna.com/" target='_blank' className="stretched-link">
                The Panache
              </a>
            </h3>
            <div className="stars">
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </div>
            <p>0.4 km from the Venue</p>
          </div>
        </div>
        {/* End Card Item */}
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="card h-100">
            <div className="card-img">
              <img src="/assets/img/hotels-2.jpg" alt="" className="img-fluid" />
            </div>
            <h3>
              <a href="https://www.tajhotels.com/en-in/hotels/taj-city-centre-patna" target='_blank' className="stretched-link">
                Hotel Taj
              </a>
            </h3>
            <div className="stars">
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </div>
            <p>2.5 km from the Venue</p>
          </div>
        </div>
        {/* End Card Item */}
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="card h-100">
            <div className="card-img">
              <img src="/assets/img/hotels-3.jpg" target='_blank' className="img-fluid" />
            </div>
            <h3>
              <a href="https://www.lemontreehotels.com/lemon-tree-premier/patna/hotels-in-patna" className="stretched-link">
                Lemon Tree Premier
              </a>
            </h3>
            <div className="stars">
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </div>
            <p>1.2 km from the Venue</p>
          </div>
        </div>
        {/* End Card Item */}
      </div>
    </div>
  </section></>
  )
}

export default Venue