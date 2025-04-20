import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './navbar.css';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" id="nava">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Personal_Page" id="logo">
            Tanishk Raj
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Personal_Page" id="navLink">
                  Home
                </Link>
              </li>
              <div className="dropdown">
                <Link className="btn dropdown-toggle" id="navLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/Personal_Page/education">Education</Link></li>
                  <li><Link className="dropdown-item" to="/Personal_Page/skills">Skills</Link></li>
                  <li><Link className="dropdown-item" to="/Personal_Page/certifications">Certifications</Link></li>
                  <li><Link className="dropdown-item" to="/Personal_Page/achievements">Achievements</Link></li>
                </ul>
              </div>
              <li className="nav-item">
                <Link className="nav-link" to="/Personal_Page/projects" id="navLink">
                  Projects
                </Link>
              </li>
              <li className='nav-item'>
                <ScrollLink
                  className='nav-link'
                  to="footer"
                  smooth={true}
                  duration={500}
                  id="navLink"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
