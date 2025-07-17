import React from 'react'

function Speakers() {
  return (
    <>
    <section id="speakers" className="speakers section">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>
      Event Speakers
      <br />
    </h2>
  </div>
  {/* End Section Title */}
  <div className="container">
    <div className="row gy-4">
      <div
        className="col-xl-3 col-lg-4 col-md-6"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="member">
          <img
            src="assets/img/speakers/speaker-1.jpg"
            className="img-fluid"
            alt=""
          />
          <div className="member-info">
            <div className="member-info-content">
              <h4>
                <a href="speaker-details.html">Mark Zuckerberg</a>
              </h4>
              <span>Chairman & CEO - Meta Platforms</span>
            </div>
            <div className="social">
              <a href="">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="">
                <i className="bi bi-facebook" />
              </a>
              <a href="">
                <i className="bi bi-instagram" />
              </a>
              <a href="">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End Team Member */}
      <div
        className="col-xl-3 col-lg-4 col-md-6"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <div className="member">
          <img
            src="assets/img/speakers/speaker-2.jpg"
            className="img-fluid"
            alt=""
          />
          <div className="member-info">
            <div className="member-info-content">
              <h4>
                <a href="speaker-details.html">Dr. S. Jaishankar</a>
              </h4>
              <span>External Affairs Minister</span>
            </div>
            <div className="social">
              <a href="">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="">
                <i className="bi bi-facebook" />
              </a>
              <a href="">
                <i className="bi bi-instagram" />
              </a>
              <a href="">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End Team Member */}
      <div
        className="col-xl-3 col-lg-4 col-md-6"
        data-aos="fade-up"
        data-aos-delay={300}
      >
        <div className="member">
          <img
            src="assets/img/speakers/speaker-3.jpg"
            className="img-fluid"
            alt=""
          />
          <div className="member-info">
            <div className="member-info-content">
              <h4>
                <a href="speaker-details.html">Dr. S. Jyoti</a>
              </h4>
              <span>Founder & CEO - IBM</span>
            </div>
            <div className="social">
              <a href="">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="">
                <i className="bi bi-facebook" />
              </a>
              <a href="">
                <i className="bi bi-instagram" />
              </a>
              <a href="">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End Team Member */}
      <div
        className="col-xl-3 col-lg-4 col-md-6"
        data-aos="fade-up"
        data-aos-delay={400}
      >
        <div className="member">
          <img
            src="assets/img/speakers/speaker-4.jpg"
            className="img-fluid"
            alt=""
          />
          <div className="member-info">
            <div className="member-info-content">
              <h4>
                <a href="speaker-details.html">Mr. Narayan Murthy</a>
              </h4>
              <span>Founder & President - Infosys</span>
            </div>
            <div className="social">
              <a href="">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="">
                <i className="bi bi-facebook" />
              </a>
              <a href="">
                <i className="bi bi-instagram" />
              </a>
              <a href="">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End Team Member */}
    </div>
  </div>
</section>
</>
  )
}

export default Speakers