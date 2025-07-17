import React from 'react';
import { Link } from 'react-router-dom';


function Events() {
  return (
    <section id="events" className="events section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Events</h2>
        <p className="section-subtitle">Explore, Engage, Excel</p>
      </div>

      <div className="container">
        <div className="row gy-5">

          {/* eSports */}
          <div className="col-12" data-aos="fade-up" data-aos-delay={'100'} >
            <div className="event-card">
              <div className="event-img-container">
                <img src="assets/img/events/esports.jpg" className="event-img" alt="eSports" />
                <div className="event-overlay">
                  <h4>eSports</h4>
                  <Link to="/Register">
                    <button className="register-btn">Register</button>
                  </Link>
                </div>
              </div>
              <div className="content">
                <h3>eSports</h3>
                <p>Step into the world of competitive gaming! Battle it out with the best players and rise to victory in our high-energy eSports tournaments.</p>
              </div>
            </div>
          </div>

          {/* Workshops */}
          <div className="col-12" data-aos="fade-up" data-aos-delay={'100'}>
            <div className="event-card reverse">
              <div className="event-img-container">
                <img src="assets/img/events/hackathon.jpg" className="event-img" alt="Workshops" />
                <div className="event-overlay">
                  <h4>Workshops</h4>
                  <Link to="/Register">
                    <button className="register-btn">Register</button>
                  </Link>
                </div>
              </div>
              <div className="content">
                <h3>Workshops</h3>
                <p>Join our hands-on workshops led by industry professionals and gain valuable skills in coding, AI, design, and more. Perfect for learners of all levels!</p>
              </div>
            </div>
          </div>

          {/* Hackathon */}
          <div className="col-12" data-aos="fade-up" data-aos-delay={'100'}>
            <div className="event-card">
              <div className="event-img-container">
                <img src="assets/img/events/img-4.jpg" className="event-img" alt="Hackathon" />
                <div className="event-overlay">
                  <h4>Hackathon</h4>
                  <Link to="/Register">
                    <button className="register-btn">Register</button>
                  </Link>
                </div>
              </div>
              <div className="content">
                <h3>Hackathon</h3>
                <p>Code, collaborate, and compete! Our 24-hour Hackathon is your chance to turn ideas into reality. Solve real-world problems with your team!</p>
              </div>
            </div>
          </div>

          {/* Tech Quiz */}
          <div className="col-12" data-aos="fade-up" data-aos-delay={'100'}>
            <div className="event-card reverse">
              <div className="event-img-container">
                <img src="assets/img/events/workshop.jpg" className="event-img" alt="Tech Quiz" />
                <div className="event-overlay">
                  <h4>Tech Quiz</h4>
                  <Link to="/Register">
                    <button className="register-btn">Register</button>
                  </Link>
                </div>
              </div>
              <div className="content">
                <h3>Tech Quiz</h3>
                <p>Put your tech knowledge to the test! Participate in our tech quiz and win exciting prizes. From coding to current trends – we cover it all.</p>
              </div>
            </div>
          </div>

          {/* Treasure Hunt */}
          <div className="col-12" data-aos="fade-up" data-aos-delay={'100'}> 
            <div className="event-card">
              <div className="event-img-container">
                <img src="assets/img/events/treasure-hunt.jpg" className="event-img" alt="Treasure Hunt" />
                <div className="event-overlay">
                  <h4>Treasure Hunt</h4>
                  <Link to="/Register">
                    <button className="register-btn">Register</button>
                  </Link>
                </div>
              </div>
              <div className="content">
                <h3>Treasure Hunt</h3>
                <p>Decode the clues, race against time, and uncover hidden treasures! A thrilling campus-wide adventure for teams who love solving mysteries.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Events;





















// import React from 'react';
// import { Link } from 'react-router-dom';

// function Events() {
//   return (
//     <section id="events" className="events section">
//       <div className="container section-title" data-aos="fade-up">
//         <h2>Our Events</h2>
//         <p className="section-subtitle">Explore, Engage, Excel</p>
//       </div>

//       <div className="container">
//         <div className="row gy-5">

//           {/* eSports */}
//           <div className="col-12">
//             <div className="full-box" data-aos="fade-up" data-aos-delay={100}>
//               <img src="assets/img/events/speaker-1.jpg" className="event-img left" alt="eSports" />
//               <div className="content">
//                 <h3>eSports</h3>
//                 <p>Step into the world of competitive gaming! Battle it out with the best players and rise to victory in our high-energy eSports tournaments.</p>
//                 <Link to="/Register"><button className="register-btn">Register</button></Link>
//               </div>
//             </div>
//           </div>

//           {/* Workshops */}
//           <div className="col-12">
//             <div className="full-box reverse" data-aos="fade-up" data-aos-delay={100}>
//               <img src="assets/img/events/workshop.jpg" className="event-img right" alt="Workshops" />
//               <div className="content">
//                 <h3>Workshops</h3>
//                 <p>Join our hands-on workshops led by industry professionals and gain valuable skills in coding, AI, design, and more. Perfect for learners of all levels!</p>
//                 <Link to="/Register"><button className="register-btn">Register</button></Link>
//               </div>
//             </div>
//           </div>

//           {/* Hackathon */}
//           <div className="col-12">
//             <div className="full-box" data-aos="fade-up" data-aos-delay={100}>
//               <img src="assets/img/events/hackathon.jpg" className="event-img left" alt="Hackathon" />
//               <div className="content">
//                 <h3>Hackathon</h3>
//                 <p>Code, collaborate, and compete! Our 24-hour Hackathon is your chance to turn ideas into reality. Solve real-world problems with your team!</p>
//                 <Link to="/Register"><button className="register-btn">Register</button></Link>
//               </div>
//             </div>
//           </div>

//           {/* Tech Quiz */}
//           <div className="col-12">
//             <div className="full-box reverse" data-aos="fade-up" data-aos-delay={100}>
//               <img src="assets/img/events/hackathon.jpeg" className="event-img right" alt="Tech Quiz" />
//               <div className="content">
//                 <h3>Tech Quiz</h3>
//                 <p>Put your tech knowledge to the test! Participate in our tech quiz and win exciting prizes. From coding to current trends – we cover it all.</p>
//                 <Link to="/Register"><button className="register-btn">Register</button></Link>
//               </div>
//             </div>
//           </div>

//           {/* Treasure Hunt */}
//           <div className="col-12">
//             <div className="full-box" data-aos="fade-up" data-aos-delay={100}>
//               <img src="assets/img/events/treasure-hunt.jpg" className="event-img left" alt="Treasure Hunt" />
//               <div className="content">
//                 <h3>Treasure Hunt</h3>
//                 <p>Decode the clues, race against time, and uncover hidden treasures! A thrilling campus-wide adventure for teams who love solving mysteries.</p>
//                 <Link to="/Register"><button className="register-btn">Register</button></Link>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Events




















