import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css';

function ACarousel() {
  return (
    <>
    <Carousel interval={3000} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=First+Slide"
          alt="First slide"
          style={{height:'500px'}}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Second+Slide"
          alt="Second slide"
          style={{height:'500px'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Third+Slide"
          alt="Third slide"
          style={{height:'500px'}}
        />
      </Carousel.Item>
    </Carousel>
    <br/>
    <br/>
    <br/>
    <h1 className='col-5 text-dark offset-4'>Welcome to KGiSL IIM</h1>
    <hr/>
      <p className='pb-5 ps-2 pe-2'>Established in the year 2002, the KGiSL Institute of Information Management (KGiSL-IIM) enjoys the industry-sponsored institute status sharing the same ambiance and facilities of the sponsors, KGiSL.It is the brainchild of Dr. Ashok Bakthavathsalam, Founder and Managing Director of KG Information Systems Private Limited (KGiSL).
      WELCOME!KGiSL Institute of
Information ManagementEstablished in the year 2002, the KGiSL Institute of Information Management (KGiSL-IIM) enjoys the industry-sponsored institute status sharing the same ambiance and facilities of the sponsors, KGiSL.It is the brainchild of Dr Ashok Bakthavathsalam, Founder and Managing Director of KG Information Systems Private Limited (KGiSL)
View Profile
 The primary advantage of KGiSL-IIM is its location right inside the industry.  The Institute provides adequate hands-on experience to its students on all relevant aspects of information and communication technologies. 24×7 Computer centre connected to servers via layer-3 manageable switches, two H4 satellite earth stations located on the campus, International Private Leased Circuits (IPLCS), in-Campus banking facility and ATMs, 24×7 cafeteria, campus medical clinic,
Hostels, Gyms are some of the facilities available for KGiSL-IIM.
</p>
<div className="bg-light d-flex justify-content-center align-items-center min-vh-100 mb-5">
      <div className="container bg-white p-4 shadow-sm">
        <h2 className="text-center mb-4">Event Schedule</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th colSpan="3" className="bg-primary text-white text-center">
                INAUGURAL SESSION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:30 am</td>
              <td>Prayer</td>
            </tr>
            <tr>
              <td>9:35 am</td>
              <td>Lighting Lamp</td>
            </tr>
            <tr>
              <td>9:40 am</td>
              <td>Welcome Address</td>
            </tr>
            <tr>
              <td>9:50 am</td>
              <td>Welcome Dance</td>
            </tr>
            <tr>
              <td>9:55 am</td>
              <td>Chief Guest Address</td>
            </tr>
            <tr>
              <td>10:15 am</td>
              <td>Refreshment</td>
            </tr>
            <tr>
              <th colSpan="3" className="bg-primary text-white text-center">
                EVENT SESSION - TECHNICAL
              </th>
            </tr>
            <tr className="text-center font-weight-5">
              <td className="bold">TIME</td>
              <td className="bold">EVENTS</td>
              <td className="bold">PLACE</td>
            </tr>
            <tr>
              <td>10:30 am - 12:00 pm</td>
              <td>Paper Presentation</td>
              <td>IIM Auditorium</td>
            </tr>
            <tr>
              <td>11:00 am - 01:00 pm</td>
              <td>Web Design</td>
              <td>Lab</td>
            </tr>
            <tr>
              <td>01:00 pm - 03:00 pm</td>
              <td>Debugging</td>
              <td>Lab</td>
            </tr>
            <tr>
              <td>12:00 pm - 01:00 pm</td>
              <td>Poster Design</td>
              <td>Classroom 3</td>
            </tr>
            <tr>
              <td>10:30 am - 12:30 pm</td>
              <td>Quiz</td>
              <td>Classroom 1</td>
            </tr>
            <tr>
              <td>11:00 am - 12:00 pm</td>
              <td>Code Race</td>
              <td>Classroom 2</td>
            </tr>
            <tr>
              <th colSpan="3" className="bg-primary text-white text-center">
                EVENTS SESSION - NON TECHNICAL
              </th>
            </tr>
            <tr>
              <td>10:30 am - 12:30 pm</td>
              <td>Connection</td>
              <td>Classroom 3</td>
            </tr>
            <tr>
              <td>11:00 am - 12:00 pm</td>
              <td>Switch</td>
              <td>Classroom 4</td>
            </tr>
            <tr>
              <td>10:30 am - 12:30 pm</td>
              <td>Photography</td>
              <td>IIM Auditorium</td>
            </tr>
            <tr>
              <td>10:30 am - 12:30 pm</td>
              <td>Short Film</td>
              <td>IIM Auditorium</td>
            </tr>
            <tr>
              <td></td>
              <td>Gaming</td>
              <td></td>
            </tr>
            <tr>
              <th colSpan="3" className="bg-primary text-white text-center">
                EVENTS SESSION - CULTURALS
              </th>
            </tr>
            <tr>
              <td>2:00 pm - 3:00 pm</td>
              <td>Solo & Group Dance</td>
              <td>Open Auditorium</td>
            </tr>
            <tr>
              <td>11:30 am - 12:30 pm</td>
              <td>Rangoli</td>
              <td>Outside Campus</td>
            </tr>
            <tr>
              <td>3:00 pm - 4:00 pm</td>
              <td>Orchestra</td>
              <td>Open Auditorium</td>
            </tr>
            <tr>
              <th colSpan="3" className="bg-primary text-white text-center">
                VALEDICTORY SESSION
              </th>
            </tr>
            <tr>
              <td>4:30 pm</td>
              <td>Welcome Address & Chief Guest Address</td>
            </tr>
            <tr>
              <td>4:40 pm</td>
              <td>Keynote Address</td>
            </tr>
            <tr>
              <td>4:45 pm</td>
              <td>Prize Distribution</td>
            </tr>
            <tr>
              <td>4:50 pm</td>
              <td>Vote of Thanks</td>
            </tr>
            <tr>
              <td>5:00 pm</td>
              <td>National Anthem</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default ACarousel;
