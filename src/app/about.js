import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'; // Include your custom styles here
import Carousel from 'react-bootstrap/Carousel';

const About = () => {
  return (
    <>
    <Carousel interval={3000} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=First+Slide"
          alt="First slide"
          style={{height:'200px'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Second+Slide"
          alt="Second slide"
          style={{height:'200px'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Third+Slide"
          alt="Third slide"
          style={{height:'200px'}}
        />
      </Carousel.Item>
    </Carousel>
    <div>
      <Header />
      <AboutSection />
      <CarouselSection />
      <FindUsSection />
    </div>
    </>
  );
};

const Header = () => (
  <header className="bg-primary text-white text-center py-3">
    <h1>KGISLIIM</h1>
  </header>
);

const AboutSection = () => (
  <section className="container my-4 bg-white rounded shadow">
    <div className="p-4 text-center">
      <h1>About KGISLIIM</h1>
      <p>
        KGISLIIM (KGISL Institute of Information Management) is dedicated to
        providing high-quality education in information management and technology. Established in the year 2002, KGISLIIM enjoys the industry-sponsored institute status, sharing the same ambiance and facilities of its sponsors, KGiSL.
      </p>
      <p>
        The institute is the brainchild of Dr. Ashok Bakthavathsalam, Founder and Managing Director of KG Information Systems Private Limited (KGiSL). One of the primary advantages of KGISLIIM is its location right inside the industry, providing students with hands-on experience in information and communication technologies.
      </p>
      <p>
        Facilities at KGISLIIM include a 24×7 computer center connected to servers via layer-3 manageable switches, two H4 satellite earth stations on campus, International Private Leased Circuits (IPLCs), an in-campus banking facility and ATMs, a 24×7 cafeteria, a campus medical clinic, hostels, and gyms.
      </p>
    </div>
  </section>
);

const CarouselSection = () => (
  <section className="container my-4">
    <h2 className="text-center">Image Location</h2>
    <div id="carouselExampleControls" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://via.placeholder.com/800x400?text=Image+1" className="d-block w-100" alt="Image 1" />
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x400?text=Image+2" className="d-block w-100" alt="Image 2" />
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x400?text=Image+3" className="d-block w-100" alt="Image 3" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </section>
);

const FindUsSection = () => (
  <section className="container my-4 bg-white rounded shadow">
    <h2 className="text-center">Find Us</h2>
    <p className="text-center">You can find us at our location on Google Maps:</p>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.424732417937!2d76.99534321065993!3d11.081688989040748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f7ed4cd20ec9%3A0xc98a2354126d2111!2sKgisl%20Institute%20Of%20Information%20Management!5e0!3m2!1sen!2sin!4v1725034290717!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded"
    ></iframe>
  </section>
);

export default About;
