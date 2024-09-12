import React from 'react';
import './events.css'; // Custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Camera from '../assets/IMG-20240910-WA0008.jpg';
import game from '../assets/WhatsApp Image 2024-09-10 at 12.32.38_468a0bd9.jpg';
import short from '../assets/IMG-20240910-WA0006.jpg';
import sitch from '../assets/IMG-20240910-WA0009.jpg';
import connections from '../assets/IMG-20240910-WA0008.jpg'

// Card Component
const Card = ({ imgSrc, title, description, name, phone, rules }) => {

  return (
    <div className="card mx-auto my-3" style={{ maxWidth: '350px', height: '350px' }}>
      <img src={imgSrc} alt={title} className="card-logo" />
      <h2 className="card-title text-center mt-4">{title}</h2>
      <div className="card-content">
        <p className="card-text">{description}</p>
        <div className="names text-center">
          <h6 className='text-bold'>Student Co-Ordinators</h6>
          Name: {name}<br />Phone: {phone}
        </div>
        <div className="text-center mb-4">
          <button className="btn btn-outline-light mt-2" >Rules and Regulations</button>
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

// Main Non-technical Events Page Component
const Nontechnical = () => {
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
    <div className="events mb-5">
      <h1 className="text-center pt-5 pb-5 text-primary">Non-Technical Events</h1>
      <div className="container d-flex flex-wrap justify-content-between">
        <Card
          imgSrc={connections}
          title="Connection"
          description="A fun connecting game where participants quickly establish links with others through engaging tasks or challenges."
          name="Hariharan & AshmaNasreen"
          phone="6374440187"
          rules={[
            '⦁ Time: 01:00 PM 02:00 PM',
            '⦁	Maximum of 2 teams allowed to participate from a college.',
            '⦁	Each team has a maximum of 2 members.',
            '⦁	Competition will carry out in 2 Rounds (Preliminary & Finals).',
            '⦁	Discussion allowed for 2 minutes.',
            '⦁	Mobile phones are not allowed.'
            
          ]}
        />
        <Card
          imgSrc={Camera}
          title="Photography"
          description="A contest where participants showcase their creativity by capturing stunning images that align with a specific theme."
          name="Mathan & Lokith"
          phone="75025 61343"
          rules={[
            '⦁ Individual Event.',
            '⦁ Campus photography, Portrait photography, Panorama photography & Nature photography. Choose any one theme and submit the three best photographs.',
            '⦁ The photographs that are submitted should be captured within the campus.',
            '⦁ No edits, no filters.',
            '⦁ Mobile phones & Cameras are allowed to take photos.',
            '⦁ Submit it on event day within 12.30 pm.',
            '⦁ Photographs should not include any vulgarity or offensive matter.',
            '⦁ The judge\'s decision will be the final.',
          ]}
        />
        <Card
          imgSrc={short}
          title="Short Film"
          description="A contest that challenges participants to create a compelling narrative within a short time frame through visual storytelling."
          name="Leo yaswanth & Gopi Krishnan"
          phone="6382512475"
          rules={[
            '⦁ Maximum of 2 teams allowed to participate from a college.',
            '⦁ Each team has a maximum of 4 members.',
            '⦁ Duration of the video is 5 minutes.',
            '⦁ The clips should not be from movies, Promos, or other short films.',
            '⦁ Music can use any type.',
            '⦁ Short films should be uploaded to Google drive and shared the Link on the website (www.geekmatics.in/login.php).',
            '⦁ The judge\'s decision will be the final.',
          ]}
        />
        <Card
          imgSrc={sitch}
          title="Switch"
          description="A dynamic activity where participants rapidly adapt to changing rules, testing agility and quick thinking."
          name="Riffat & Renita"
          phone="9751964148"
          rules={[
            '⦁ A college can send 2 participants.',
            '⦁ The topic will be provided on the spot.',
            '⦁ A person shall be given 30 seconds of preparation time.',
            '⦁ Sentence should not be repeated.',
            '⦁ Participant must not pause more than 5 seconds.',
            '⦁ Participant must speak only in English.',
          ]}
        />
        <Card
          imgSrc={game}
          title="Gaming"
          description="The gaming competition challenges participants to showcase their skills in popular video games, competing against others to win prizes and recognition."
          name="Thilip Kumar & Sathyanand"
          phone="956630864"
          rules={[
            '⦁ A college can send 2 participants.',
            '⦁ The topic will be provided on the spot.',
            '⦁ A person shall be given 30 seconds of preparation time.',
            '⦁ Sentence should not be repeated.',
            '⦁ Participant must not pause more than 5 seconds.',
            '⦁ Participant must speak only in English.',
          ]}
        />
      </div>
    </div>
    </>
  );
};

export default Nontechnical;
