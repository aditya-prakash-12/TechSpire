import React from 'react'


function Schedule() {
  return (
    <>
    <section id="schedule" className="schedule section">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>
      Event Schedule
      <br />
    </h2>
    <p>
     Your guide to three days of innovation, competition, and collaboration.
    </p>
  </div>
  {/* End Section Title */}
  <div className="container">
    <ul className="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay={100}>
  <li className="nav-item">
    <button
      className="nav-link active"
      data-bs-toggle="tab"
      data-bs-target="#day-1"
      type="button"
      role="tab"
    >
      Day 1
    </button>
  </li>
  <li className="nav-item">
    <button
      className="nav-link"
      data-bs-toggle="tab"
      data-bs-target="#day-2"
      type="button"
      role="tab"
    >
      Day 2
    </button>
  </li>
  <li className="nav-item">
    <button
      className="nav-link"
      data-bs-toggle="tab"
      data-bs-target="#day-3"
      type="button"
      role="tab"
    >
      Day 3
    </button>
  </li>
</ul>

    <div
      className="tab-content row justify-content-center"
      data-aos="fade-up"
      data-aos-delay={200}
    >
      <h3 className="sub-heading">
       A dynamic 3-day journey featuring workshops, tech quizzes, eSports, hackathons, treasure hunts, and inspiring sessions—culminating in celebration and recognition.
      </h3>
      {/* Schdule Day 1 */}
      <div
        role="tabpanel"
        className="col-lg-9 tab-pane fade show active"
        id="day-1"
      >
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>09:30 AM</time>
          </div>
          <div className="col-md-10">
            <h4>Registration</h4>
            <p>Participants complete entry formalities and collect event kits.</p>
          </div>
        </div>
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>10:00 AM</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img
                src="assets/img/speakers/speaker-1-2.jpg"
                alt="Brenden Legros"
              />
            </div>
            <h4>
              Inaugral Ceremony <span>Dr. K. Shubham</span>
            </h4>
            <p>Marking the official commencement of the tech fest with dignitaries, lamp lighting, and welcome address..</p>
          </div>
        </div>
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>11:00 AM</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img
                src="assets/img/speakers/speaker-3-2.jpg"
                alt="Hubert Hirthe"
              />
            </div>
            <h4>
              Keynote <span>Dr. S. Jyoti</span>
            </h4>
            <p>
             Insights into future tech trends by industry experts.
            </p>
          </div>
        </div>
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>12:00 AM</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img
                src="assets/img/speakers/speaker-2-2.jpg"
                alt="Cole Emmerich"
              />
            </div>
            <h4>
              Workshop: Generative AI <span>Prof. Neeraj Kumar Rai</span>
            </h4>
            <p>
              Hands-on session exploring how AI creates text, images, and more using cutting-edge models.
            </p>
          </div>
        </div>
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>02:00 PM</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img
                src="assets/img/speakers/speaker-4-2.jpg"
                alt="Jack Christiansen"
              />
            </div>
            <h4>
              Lunch <span>Cafeteria</span>
            </h4>
            <p>Enjoy a refreshing meal and recharge for the upcoming sessions.</p>
          </div>
        </div>
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>03:00 PM</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img
                src="assets/img/speakers/speaker-5.jpg"
                alt="Alejandrin Littel"
              />
            </div>
            <h4>
              Tech Quiz: Round 1
               <span> Dr. Naveen Kumar</span>
            </h4>
            <p>A thrilling test of tech knowledge, logic, and speed—compete to claim the top spot!</p>
          </div>
        </div>
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>04:00 PM</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img
                src="assets/img/speakers/speaker-6.jpg"
                alt="Willow Trantow"
              />
            </div>
            <h4>
              Tech Quiz: Final Round <span>Dr. Naveen Kumar</span>
            </h4>
            <p>The ultimate face-off among top teams to crown the true tech champions.</p>
          </div>
        </div>
      </div>
      {/* End Schdule Day 1 */}
      {/* Schdule Day 2 */}
      <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-2">
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>10:00 AM</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img
                src="assets/img/speakers/speaker-1-2.jpg"
                alt="Brenden Legros"
              />
            </div>
            <h4>
              Treasure Hunt: Round 1 <span>Prof. Prasanna Kumar</span>
            </h4>
            <p>Decode clues and race across campus in this exciting test of wit and teamwork.</p>
          </div>
        </div>
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>11:00 AM</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img
                src="assets/img/speakers/speaker-3-2.jpg"
                alt="Hubert Hirthe"
              />
            </div>
            <h4>
              Workshop: IoT <span>Prof. Anupriya</span>
            </h4>
            <p>
              Learn how smart devices communicate and build your own connected solutions.
            </p>
          </div>
        </div>
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>1:00 AM</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img
                src="assets/img/speakers/speaker-2-2.jpg"
                alt="Cole Emmerich"
              />
            </div>
            <h4>
              Treasure Hunt: Final Round <span>Prof. Prasanna Kumar</span>
            </h4>
            <p>
              Advanced puzzles and faster challenges await as teams battle for the final prize.
            </p>
          </div>
        </div>
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>02:00 PM</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img
                src="assets/img/speakers/speaker-4-2.jpg"
                alt="Jack Christiansen"
              />
            </div>
            <h4>
              Lunch <span>Cafeteria</span>
            </h4>
            <p>Enjoy a refreshing meal and recharge for the upcoming sessions.</p>
          </div>
        </div>
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>03:00 PM</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img
                src="assets/img/speakers/speaker-5.jpg"
                alt="Alejandrin Littel"
              />
            </div>
            <h4>
              eSports{" "}
              <span>Dr. Sushant Kumar Dubey</span>
            </h4>
            <p>High-octane gaming battles where strategy, reflexes, and teamwork decide the winner.</p>
          </div>
        </div>
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>04:00 PM</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img
                src="assets/img/speakers/speaker-6.jpg"
                alt="Willow Trantow"
              />
            </div>
            <h4>
              Workshop: Cyber Security <span>Prof. Prasanna Kumar</span>
            </h4>
            <p>Learn to safeguard digital assets and explore ethical hacking fundamentals.</p>
          </div>
        </div>
      </div>
      {/* End Schdule Day 2 */}
      {/* Schdule Day 3 */}
      <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-3">
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>10:00 AM</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img
                src="assets/img/speakers/speaker-2-2.jpg"
                alt="Hubert Hirthe"
              />
            </div>
            <h4>
              Hackathon Registration <span>Student Committee</span>
            </h4>
            <p>
              Student coordinators facilitate seamless team onboarding and query resolution.
            </p>
          </div>
        </div>
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>11:00 AM</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img
                src="assets/img/speakers/speaker-3-2.jpg"
                alt="Cole Emmerich"
              />
            </div>
            <h4>
              Hackathon: Ideation <span>Dr. Naveen Kumar</span>
            </h4>
            <p>
              Teams brainstorm innovative solutions and finalize their project approach.
            </p>
          </div>
        </div>
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>12:00 AM</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img
                src="assets/img/speakers/speaker-1-2.jpg"
                alt="Brenden Legros"
              />
            </div>
            <h4>
              Hackathon: Development <span>Dr. Naveen Kumar</span>
            </h4>
            <p>Teams bring their ideas to life through coding, designing, and prototyping.</p>
          </div>
        </div>
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>02:00 PM</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img
                src="assets/img/speakers/speaker-4-2.jpg"
                alt="Jack Christiansen"
              />
            </div>
            <h4>
              Lunch <span>Cafeteria</span>
            </h4>
            <p>Enjoy a refreshing meal and recharge for the upcoming sessions.</p>
          </div>
        </div>
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>03:00 PM</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img
                src="assets/img/speakers/speaker-5.jpg"
                alt="Alejandrin Littel"
              />
            </div>
            <h4>
              Hackathon: Presentation and Evaluation{" "}
              <span>Dr. Naveen Kumar</span>
            </h4>
            <p>Teams showcase their solutions to judges, followed by critical review and scoring.</p>
          </div>
        </div>
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>04:00 PM</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img
                src="assets/img/speakers/speaker-6.jpg"
                alt="Willow Trantow"
              />
            </div>
            <h4>
              Prize Distribution & Valedictory Ceremony <span>Hon'ble Chief Guest</span>
            </h4>
            <p>Winners are celebrated and the event concludes with reflections, gratitude, and farewells.</p>
          </div>
        </div>
      </div>
      {/* End Schdule Day 3 */}
    </div>
  </div>
</section>
</>
  )
}

export default Schedule