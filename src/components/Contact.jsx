import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import contactImage from '../assets/contact.jpg'; // Import contact image

const Contact = () => {
  return (
    <section className="contact" style={{ backgroundImage: `url(${contactImage})` }}>
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p><FaEnvelope style={{ marginRight: '10px' }} /> Email: contact@doctorclinic.com</p>
        <p><FaPhone style={{ marginRight: '10px' }} /> Phone: +1 234 567 8900</p>
        <p><FaMapMarkerAlt style={{ marginRight: '10px' }} /> Address: 123 Health St., Wellness City</p>
      </div>
      <style jsx>{`
        .contact {
          background-size: cover;
          background-position: center;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .contact-info {
          background-color: rgba(255, 255, 255, 0.8);
          padding: 20px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default Contact;

