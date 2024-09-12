import React from 'react';
import './events.css'; // Custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import paper from '../assets/IMG-20240910-WA0017.jpg';
import web from '../assets/IMG-20240910-WA0012.jpg';
import debug from '../assets/IMG-20240910-WA0016.jpg';
import coderace from '../assets/IMG-20240910-WA0014.jpg'
import admad from '../assets/IMG-20240910-WA0013.jpg'
import quiz from '../assets/IMG-20240910-WA0015.jpg'

const Card = ({ imgSrc,title, description, name, phone, rules }) => {

  return (
    <div className="card mx-auto my-3 " style={{ maxWidth: '350px', height: '350px' }}>
      <img src={imgSrc} alt={title} className="card-logo" />
      <h2 className="card-title text-center mt-4">{title}</h2>
      <div className="card-content ">
        <p className="card-text">{description}</p>
        <div className="names text-center"><h6 className='text-bold'>Student Co-Ordinators </h6>Name: {name}<br />Phone: {phone}</div>
        <div className="text-center mb-4 ">
        <button className="btn btn-outline-light mt-2" >Rules and Regulations</button></div>
        <ul className="rules card-list list-unstyled">
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const App = () => {
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
      <h1 className='text-center pt-5 pb-5 text-primary'> Technical Events </h1>
      <div className="container d-flex flex-wrap justify-content-between">
      <Card
          imgSrc={paper}
          title="Paper Presentation"
          description="Showcase your research and communication skills by presenting a well-researched paper on a given topic."
          name="Jeeva & Janani "
          phone="7845626273"
          rules={[
            '⦁	Participants should communicate in English only.',
            '⦁	Participants are requested to converse in the English language during the presentation.',
            '⦁	Each participant is required to make a presentation-file (PowerPoint) in English based on his/her paper.',
            '⦁	 Equal participation by all the team members during the presentation.',
            '⦁	Time allotted for the presentation will be 10 minutes. 7 minutes for presentation and 3 minutes for asking questions by judges, the',
            '⦁	The presentation file (PowerPoint) should follow the following format: ',
            '⦁	Usage of background sounds is prohibited.',
            '⦁	Use clear and readable fonts.',
            '⦁	Usage of animations and pictures is permitted.',
            '⦁	Soft copy of the presentation should be uploaded to Google drive and copy the link and then log on to (https://drive.google.com/drive/folders/1carBYn46bFRNafIpJpfOX2mpFhvhFLz8?usp=sharing) and post it in the user portal.',
            '⦁	Once you uploaded the link, it will not be changed.',
            

          ]}
        />
        <Card
          imgSrc={web}
          title="Web Design"
          description="Design and develop a creative, responsive website within a limited time using HTML, CSS, and JavaScript."
          name="Kishore Kumar & Karthika s"
          phone="78069 99507"
          rules={[
            '⦁	Maximum of 2 teams allowed to participate from a college.',
            '⦁	Each team has a maximum of 2 members. ',
            '⦁	Time allotted will be 1 hour.',
            '⦁	The participants were given a screenshot of a webpage; they must recreate it using HTML, CSS, and JavaScript.',
            '⦁	Points are awarded based on how fast and accurately they have recreated it.',
            '⦁	Images, and logos will provide to the participants.',
            '⦁	Teams involved in any malpractice will be disqualified.',
            '⦁	Software available on the systems: VS Code.',
            '⦁	Judges decisions will be final.'
         
          ]}
        />
        <Card
          imgSrc={debug}
          title="Debugging"
          description="Test your problem-solving skills by identifying and fixing bugs in code across different programming languages."
          name="Vinith Kumar & Harini KB"
          phone="9025738933"
          rules={[
            '⦁	Maximum of 2 teams allowed to participate from a college.',
            '⦁	Each team has a maximum of 2 members. ',
            '⦁	Duration of the event will be half an hour.',
            '⦁	Bug may be of any type.',
            '⦁	The language used will be C/C++/Java/Python.',
            '⦁	Stage rounds: The debugging will have two rounds in total (Preliminary & Debugging).'
          ]}
        />
        <Card
          imgSrc={admad}
          title="AD MAD Show"
          description="Create a visually appealing and informative poster on a given theme, showcasing your graphic design skills."
          name="Udaya Kumar & Soundharanayaki"
          phone="9655571951"
          rules={[
            '⦁	A college can send I team with a maximum of 3-6 participants.',
            '⦁	Teams shall be given 5 minutes of preparation time.',
            '⦁	The participating team shall be allowed to perform for 3-5 minutes.',
            '⦁	Content Restrictions No vulgarity.',
            '⦁	The topic will provide on the spot.',
            '⦁	Judges decisions will be final.'
            
          ]}
        />
        <Card
          imgSrc={quiz}
          title="Quiz"
          description="Participate in a quiz that challenges your knowledge in various technical domains and general technology topics."
          name="Shibisharan & Priyanka"
          phone="9944626922"
          rules={[
            '⦁	Maximum of 2 teams allowed to participate from a college.',
            '⦁	Each team has a maximum of 2 members.',
            '⦁	Time allotted will be 1 hour.',
            '⦁	Stage rounds: The quiz will have two rounds in total (Preliminary & Rapid-fire).',
            '⦁	Round 1:',
            '⦁	Each team will be provided with an Objective type question paper, overwrite of answers will not be rewarded.',
            '⦁	The time limit for the first round will be 30 minutes.',
            '⦁	Each question carries one mark and no negative mark for wrong answers.',
            '⦁	Mobile phone usage is not allowed, and any malpractice will be disqualified.',
            '⦁	The team with the top 5 scores will proceed to the next round.',
            '⦁	Round 2:',
            '⦁	Personal technical issues will not be considered.',
            '⦁	Rapid Fire Round: The questions will be displayed on the screen.',
            '⦁	The game lobby launches displaying a unique game code for all the players to attend.',
            '⦁	Once all the players are in the game lobby the quiz starts.',
            '⦁	The time limit for the second round will be 30 minutes.'
            
          ]}
        />
        <Card
          imgSrc={coderace}
          title="Code Race"
          description="Compete against others in a coding challenge where speed and accuracy are key to solving programming tasks."
          name="Surya & Eruthaya Raj"
          phone="6369328157"
          rules={[
            '⦁	Maximum of 2 teams allowed to participate from a college',
            '⦁	Each team has a maximum of 2 members. ',
            '⦁	Events consist of two rounds (Prelims and Final)',
            '⦁	Prelims will be an MCQ based.',
            '⦁	In the final round, Participants will be asked to solve one problem within 30 minutes of the time limit.',
            '⦁	Participants can be used anyone programming languages like Java, Python, or C /C++,',
            '⦁	Final round will be on the Online Compiler.',
            '⦁	If any team can try to copy the code or any such kind of malpractice, will be disqualified immediately.',
            '⦁	Judges decisions will be final.'

          ]}
        />
      </div>
    </div>
    </>
  );
};

export default App;
