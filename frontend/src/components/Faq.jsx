import React, { useState } from 'react';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "What is TechSpire?",
      answer:
        "TechSpire is the annual technical fest of Amity University, where students come together to showcase talent, build innovative projects, and compete in tech-based events like coding challenges, robotics, and more.",
    },
    {
      question: "Who can participate in the events?",
      answer:
        "All college students are eligible to participate. Some events may also be open to school students or external participants—please check the event details.",
    },
    {
      question: "How do I register for the fest?",
      answer:
        "You can register online via our official website in the 'Register' section. For individual events, you may need to register separately.",
    },
    {
      question: "Is there any registration fee?",
      answer:
        "Most events are free of cost. However, select workshops and competitions may require a nominal registration fee, which will be mentioned in the event details.",
    },
    {
      question: "Can I participate in more than one event?",
      answer:
        "Yes, you are welcome to participate in multiple events, provided the timings do not overlap.",
    },
    {
      question: "Will certificates and prizes be provided?",
      answer:
        "Yes. All participants will receive certificates, and winners will be awarded trophies, cash prizes, or goodies as per the event.",
    },
    {
      question: "Will there be workshops or guest lectures?",
      answer:
        "Yes, TechSpire includes hands-on workshops and expert sessions on trending topics like AI, IoT, Web Development, and Cybersecurity.",
    },
    {
      question: "Will accommodation be available for outstation students?",
      answer:
        "Limited accommodation is available on a first-come, first-served basis. Kindly contact the coordinators after registration to confirm availability.",
    },
    {
      question: "Where will the events take place?",
      answer:
        "Events will be held across the Amity University campus. Details of venue and timing will be provided in the schedule section.",
    },
    {
      question: "Whom should I contact in case of queries?",
      answer:
        "You can visit the 'Contact Us' page on the website or reach out to the event coordinators listed there for any assistance.",
    },
  ];

  return (
    <section id="faq" className="faq section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>Got questions? We've got answers to help you get the most out of TechSpire!</p>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay={100}>
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item ${activeIndex === index ? 'faq-active' : ''}`}
                  key={index}
                  onClick={() => toggleFaq(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <h3>{faq.question}</h3>
                  {activeIndex === index && (
                    <div className="faq-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                  <i
                    className={`faq-toggle bi ${
                      activeIndex === index ? 'bi-chevron-down' : 'bi-chevron-right'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
