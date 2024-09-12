import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase.js'; // Adjust the import based on your Firebase setup

const Reg = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: 'Male',
    email: '',
    number: '',
    cldgname: '',
    department: '',
    year: '',
    events: [],
  });
  const [formErrors, setFormErrors] = useState('');
  const [selectedEvents, setSelectedEvents] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Handle event selection change (limit to 2)
  const handleEventChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      if (selectedEvents.length > 1) {
        setFormErrors('You cannot select more than two events.');
        e.target.checked = false;
      } else {
        setSelectedEvents([...selectedEvents, value]);
        setFormData(prevData => ({ ...prevData, events: [...prevData.events, value] }));
        setFormErrors(''); // Clear error if valid
      }
    } else {
      setSelectedEvents(selectedEvents.filter(event => event !== value));
      setFormData(prevData => ({ ...prevData, events: prevData.events.filter(event => event !== value) }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.number)) {
      setFormErrors('Please enter a valid 10-digit phone number.');
      return;
    }

    // Get the current date and time
    const now = new Date();
    const currentDateTime = now.toLocaleString(); // Or use any other format you need

    // Add date and time to form data
    const dataWithDateTime = { 
      ...formData, 
      dateTime: currentDateTime 
    };

    // If validation passes, submit the form data
    try {
      await addDoc(collection(db, "registrations"), dataWithDateTime);
      alert('Registration successful!');
      
      // Reset form data
      setFormData({
        name: '',
        gender: 'Male',
        email: '',
        number: '',
        cldgname: '',
        department: '',
        year: '',
        events: [],
      });
      setSelectedEvents([]);
    } catch (error) {
      setFormErrors('Error submitting the form: ' + error.message);
    }
  };

  return (
    <div className="container mt-5">
      <fieldset className="border p-4 col-6 offset-3 rounded mb-5">
        <legend className="col-5 w-auto fw-bold">Registration Form</legend>
        {formErrors && <p className="text-danger text-center">{formErrors}</p>}
        <form onSubmit={handleSubmit} className="form">
          {/* Name Input */}
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-4 col-form-label">First Name:</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="name" name="name" value={formData.name} placeholder='Enter Your Name' onChange={handleChange} required />
            </div>
          </div>
          <br />

          {/* Gender Input */}
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Gender:</label>
            <div className="col-sm-8">
              <div className="form-check">
                <input type="radio" className="form-check-input" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} />
                <label className="form-check-label">Female</label>
              </div>
            </div>
          </div>
          <br />

          {/* Email Input */}
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-4 col-form-label">Email:</label>
            <div className="col-sm-8">
              <input type="email" className="form-control" id="email" placeholder='Enter Your Email id' name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <br />

          {/* Phone Number Input */}
          <div className="form-group row">
            <label htmlFor="number" className="col-sm-4 col-form-label">Mobile:</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="number" name="number" placeholder='Enter Your Phone Number' value={formData.number} onChange={handleChange} />
            </div>
          </div>
          <br />

          {/* College Name Input */}
          <div className="form-group row">
            <label htmlFor="cldgname" className="col-sm-4 col-form-label">College Name:</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="cldgname" name="cldgname" placeholder='Enter Your College Name' value={formData.cldgname} onChange={handleChange} required />
            </div>
          </div>
          <br />

          {/* Department Input */}
          <div className="form-group row">
            <label htmlFor="department" className="col-sm-4 col-form-label">Department:</label>
            <div className="col-sm-8">
              <select className="form-control" id="department" name="department" value={formData.department} onChange={handleChange} required>
                <option value="" disabled>Select Department</option>
                <option value="MCA">MCA</option>
                <option value="MBA">MBA</option>
                <option value="B.Sc CS">B.Sc CS</option>
                <option value="B.Sc IT">B.Sc IT</option>
                <option value="BBA">BBA</option>
                <option value="BCA">BCA</option>
              </select>
            </div>
          </div>
          <br />

          {/* Year Input */}
          <div className="form-group row">
            <label htmlFor="year" className="col-sm-4 col-form-label">Year:</label>
            <div className="col-sm-8">
              <select className="form-control" id="year" name="year" value={formData.year} onChange={handleChange} required>
                <option value="1">I</option>
                <option value="2">II</option>
                <option value="3">III</option>
                <option value="4">IV</option>
              </select>
            </div>
          </div>
          <br />

          {/* Events Checkbox Group */}
          <div className="form-group row">
            <label htmlFor="events" className="col-sm-4 col-form-label">Events:</label>
            <div className="col-sm-8">
              {['Debugging', 'Web Design', 'Paper Presentation', 'Quiz', 'Ad Mad', 'Coderacer', 'Connections', 'Photography', 'Short Film', 'Switch', 'Gaming', 'Solo/Group Dance', 'Rangoli', 'Mehandi'].map(event => (
                <div className="form-check" key={event}>
                  <input type="checkbox" className="form-check-input" name="events" value={event} onChange={handleEventChange} />
                  <label className="form-check-label">{event}</label>
                </div>
              ))}
            </div>
          </div>
          <br />
          <a className='text-danger text-decoration-none fw-bold'>(Those who are participating in shortfilm and paper presentation event kindly check the corresponding event rules and upload the document in the given drive link)</a>
          {/* Submit Button */}
          <div className="form-group row">
            <div className="col-sm-8 offset-4 mt-4">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Reg;
