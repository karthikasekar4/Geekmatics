import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './events.css'; // Custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import dance from '../assets/dance.jpg';
import rangoli from '../assets/rangoli.jpg';
import mehandi from '../assets/mehandi.jpg';

// Reusable Card Component
const Card = ({ imgSrc, title, name, phone, rules }) => {
  return (
    <div className="card mx-auto my-3" style={{ maxWidth: '350px', height: '350px' }}>
      <img src={imgSrc} alt={title} className="card-logo" />
      <h2 className="card-title text-center mt-4">{title}</h2>
      <div className="card-content">
        <div className="names text-center">
          <h6 className="text-bold">Student Coordinator</h6>
          Name: {name}<br />Phone: {phone}
        </div>
        <div className="text-center mb-4">
          <button className="btn btn-outline-light mt-2">Rules and Regulations</button>
        </div>
        <ul className="rules card-list list-unstyled">
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Main Culturals Events Page Component with Sidebar
const Culturals = () => {
  const events = [
    {
      title: 'Dance (Solo / Group)',
      imgSrc: dance,
      name: 'Vignesh & Teena Sharon',
      phone: '6369942608',
      rules: [
        'Maximum of 2 teams allowed to participate from a college.',
        'Each team has a maximum of 3 - 6 members.',
        'Time allotted: 3-5 minutes.',
        'Props are allowed (No use of fire on stage).',
        'Vulgar/absence songs will lead to disqualification.',
        'The judge\'s decision will be final.',
        'The music file should be sent to support@geekmatics.in with the college name, department name, and participant\'s name attached.'
      ]
    },
    {
      title: 'Rangoli',
      imgSrc: rangoli,
      name: 'Prakash SA & Elavarshini',
      phone: '9994643948',
      rules: [
        'Maximum of 2 teams allowed to participate from a college.',
        'Each team has a maximum of 4 members.',
        'Maximum time allowed is 1 hour.',
        'Participants are not allowed to refer to any materials.',
        'All participants must carry their own materials for Rangoli.',
        'Size of Rangoli will be 4\' x 4\' feet.',
        'The topic/theme will be provided on the spot.',
        'Open to all students from UG & PG.'
      ]
    },
    {
      title: 'Mehandi',
      imgSrc: mehandi,
      name: 'Subbu Raman & Aparna',
      phone: '9629187050',
      rules: [
        'Maximum of 2 teams allowed to participate from a college.',
        'Each team has a maximum of 2 members.',
        'Maximum time allowed is 1 hour.',
        'A team must have 2 participants: one artist and the other as a subject (model).',
        'Mehandi design must cover one hand on both sides (palmar and dorsal).',
        'Topic: Bridal Mehandi'
      ]
    }
  ];

  return (
    <>
        <Carousel interval={2000}>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-img"
          src="https://th.bing.com/th?id=OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt=""
          style={{ height: '200px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th?id=OIP.MCLzVoExgXPyNi_V5gb1AwHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt=""
          style={{ height: '200px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th?id=OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt=""
          style={{ height: '200px' }}
        />
      </Carousel.Item>
    </Carousel>
    <div className="container-fluid mt-5">
      <div className="row mb-5">
        {/* Main Content Area */}
        <div className="col-12 ps-5">
          <h1 className="text-center pt-5 pb-5 text-primary">Cultural Events</h1>
          <div className="d-flex flex-wrap justify-content-between">
            {events.map((event, index) => (
              <Card
                key={index}
                imgSrc={event.imgSrc}
                title={event.title}
                name={event.name}
                phone={event.phone}
                rules={event.rules}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Culturals;
