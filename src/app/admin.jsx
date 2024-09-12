import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure the path to firebase.js is correct

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [participants, setParticipants] = useState([]);

  const validEmail = 'karthika687@gmail.com';
  const validPassword = 'kgisliim@karthika';

  // Handle login submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === validEmail && password === validPassword) {
      setIsAuthenticated(true);
      fetchData();
    } else {
      setError('Invalid email or password');
    }
  };

  // Fetch data from Firebase
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'registrations'));
      const participantsData = querySnapshot.docs.map((doc) => doc.data());
      setParticipants(participantsData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching participants:', error);
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <div className="login-card animate-fade-in">
          <h1 className="login-title">Admin Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control animate-input"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control animate-input"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn btn-primary login-button animate-hover">Login</button>
          </form>
        </div>
        <style>{`
          .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, #6b73ff, #000dff);
            animation: backgroundFade 10s infinite alternate;
          }

          @keyframes backgroundFade {
            0% {
              background: linear-gradient(135deg, #6b73ff, #000dff);
            }
            100% {
              background: linear-gradient(135deg, #ff4e50, #f9d423);
            }
          }

          .login-card {
            background-color: #ffffff;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            width: 400px;
            animation: slideIn 1s ease;
          }

          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: translateY(-30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .login-title {
            text-align: center;
            font-size: 30px;
            font-weight: bold;
            color: #333333;
            margin-bottom: 30px;
            animation: fadeIn 1.5s ease;
          }

          .form-label {
            color: #333333;
            font-weight: bold;
          }

          .form-control {
            padding: 12px;
            font-size: 16px;
            border-radius: 5px;
            transition: all 0.3s ease;
            box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.1);
          }

          .form-control:focus {
            border-color: #007bff;
            box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
          }

          .login-button {
            width: 100%;
            padding: 12px;
            font-size: 18px;
            background-color: #007bff;
            border: none;
            color: #ffffff;
            border-radius: 8px;
            margin-top: 15px;
            transition: transform 0.3s ease, background-color 0.3s ease;
            animation: bounce 1.5s infinite alternate;
          }

          @keyframes bounce {
            0% { transform: translateY(0); }
            100% { transform: translateY(-5px); }
          }

          .login-button:hover {
            background-color: #0056b3;
            transform: scale(1.05);
          }

          .animate-hover {
            transition: transform 0.2s ease;
          }

          .animate-hover:hover {
            transform: translateY(-3px);
          }

          .animate-fade-in {
            animation: fadeIn 2s ease;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .animate-input {
            transition: all 0.3s ease;
          }

          .animate-input:focus {
            transform: scale(1.02);
          }
        `}</style>
      </div>
    );
  }

  // Show loading spinner
  if (loading) {
    return (
      <div id="loading">
        <div className="loading-animation"></div>
        <style>{`
          #loading {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f2f5;
          }
          .loading-animation {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 6px solid #cccccc;
            border-top-color: #007bff;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Render participant data
  return (
    <div className="container mt-5 animate-fade-in">
      <h1 className="text-center mb-5">Participant Details</h1>
      <table className="table table-hover table-striped pb-5">
        <thead className="table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Email Id</th>
            <th scope="col">Phone Number</th>
            <th scope="col">College Name</th>
            <th scope="col">Department</th>
            <th scope="col">Year</th>
            <th scope="col">Events</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => (
            <tr key={index}>
              <td>{participant.name}</td>
              <td>{participant.gender}</td>
              <td>{participant.email}</td>
              <td>{participant.number}</td>
              <td>{participant.cldgname}</td>
              <td>{participant.department}</td>
              <td>{participant.year}</td>
              <td>{participant.events.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style>{`
        .table {
          font-size: 16px;
          margin-bottom:50px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          animation: fadeIn 1.5s ease;
        }
        .table-hover tbody tr:hover {
          background-color: #f5f5f5;
        }
        .table-dark th {
          background-color: #343a40;
          color: #ffffff;
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease;
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;

