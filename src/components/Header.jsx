import React from 'react';
import './Header.css';

import logo from '../assets/logo.jpg'; // Import the logo

const Header = () => {
 
  return (
    <>
      <header className="small-header" style={{ textAlign: 'center' }}>
        <p>
          <i className="far fa-envelope"></i> Email: lifespringclinic@hotmail.com
          &nbsp;&nbsp;&nbsp;
          <i className="fas fa-phone-alt"></i> Helpline: +91 48435 97683 
          &nbsp;&nbsp;&nbsp;
          <i className="fas fa-phone-alt"></i> Call: +91 95263 80999 
          &nbsp;&nbsp;&nbsp;
          <i className="fas fa-phone-alt"></i> Home Health: +91 90612 36888 
          &nbsp;&nbsp;&nbsp;
          <i className="far fa-clock"></i> All Days: 9:00 AM to 9:00 PM
        </p>
      </header>
      
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="Logo" />
          <h1>LifeSpring</h1>
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/Contact">Contact</a>
          <button className="header-button" onClick={() => window.location.href='http://localhost/lifespring/admin/index.php'}>Admin Login</button>
        </nav>
      </header>
    </>
  );
};

export default Header;

