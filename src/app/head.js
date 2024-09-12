import React from 'react';
import './head.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap's JavaScript bundle (includes Popper.js)

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark head">
        <div className="container-fluid mt-3 mb-3">
          <Link className="navbar-brand ms-3 ms-lg-5 fw-bolder" to="/">GeekMatics 2k24</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto d-flex flex-lg-row flex-column align-items-lg-center">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-lg-2" to="/technical">Technical</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-lg-2" to="/non-technical">Non-Technical</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-lg-2" to="/culturals">Culturals</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-lg-2" to="/about-us">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-lg-2" to="/register">Registration</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-lg-2" to="/admin">Admin </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
