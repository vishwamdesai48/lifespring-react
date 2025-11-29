import React from 'react';
import './Footer.css';
import logo from '../assets/logo.jpg'; // Import the logo
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <>
      {/* Big Footer */}
      <div className="big-footer">
        <div className="footer-content">
          <div className="footer-section logo">
            <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
            <h3>LIFESPRING</h3>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-google"></i>
            </div>
          </div>
          <div className="footer-section">
            <h4>OTHER SERVICES</h4>
            <ul>
              <li style={{ paddingBottom: '8px' }}>Lab Test at Home</li>
              <li style={{ paddingBottom: '8px' }}>Home health care</li>
              <li style={{ paddingBottom: '8px' }}>Corporate wellness</li>
              <li>School health</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>QUICK LINKS</h4>
            <ul>
              <li style={{ paddingBottom: '8px' }}>Home</li>
              <li style={{ paddingBottom: '8px' }}>About</li>
              <li style={{ paddingBottom: '8px' }}>Contact Us</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>QUICK CONTACT</h4>
            <ul>
              <li style={{ paddingBottom: '8px' }}><i className="fas fa-phone"></i> +91 4842 205733</li>
              <li style={{ paddingBottom: '8px' }}><i className="fas fa-phone"></i> +91 9995 442200</li>
              <li style={{ paddingBottom: '8px' }}><i className="fas fa-phone"></i> Home Health: +91 90612 36888</li>
              <li style={{ paddingBottom: '8px' }}><i className="fas fa-envelope"></i> lifespring@hotmail.com</li>
              <li style={{ paddingBottom: '8px' }}><i className="fas fa-map-marker-alt"></i> 2nd Floor, APMC Building, Station Road, Sagrampura, Surat -396445</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Small Footer */}
      <footer className="small-footer">
        <p>&copy; 2025 LifeSpring. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;

