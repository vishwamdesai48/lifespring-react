import React from 'react';
import { FaUserMd, FaHeartbeat, FaHome, FaVial, FaCapsules, FaProcedures, FaUserNurse, FaBaby } from 'react-icons/fa';
import heroImage from '../assets/hero.jpg';
import '../components/Home.css';

const Home = () => {
  const colors = {
    blue: 'rgba(0, 0, 255, 0.1)',
    pink: 'rgba(255, 105, 180, 0.1)',
    red: 'rgba(255, 0, 0, 0.1)',
    green: 'rgba(0, 128, 0, 0.1)',
    purple: 'rgba(128, 0, 128, 0.1)',
    yellow: 'rgba(255, 255, 0, 0.1)',
    orange: 'rgba(255, 165, 0, 0.1)',
    teal: 'rgba(0, 128, 128, 0.1)'
  };

  return (
    <section className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImage} alt="Doctor Clinic" className="hero-image" />
        <div className="hero-overlay">
          <h2 className="hero-title">Welcome to LifeSpring</h2>
          <p className="hero-text">Your health is our priority. Book an appointment with our specialists today!</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-grid" style={{ padding: '2rem 0' }}>
        <ServiceCard icon={<FaUserMd />} title="Family Doctor" description="Expert care at every stage of life." color={colors.blue.replace('0.1', '0.8')} />
        <ServiceCard icon={<FaBaby />} title="Woman & Child Care" description="Specialized care for women and children." color={colors.pink.replace('0.1', '0.8')} />
        <ServiceCard icon={<FaHeartbeat />} title="Specialist Doctors" description="Expertise-focused physicians addressing specific medical needs." color={colors.red.replace('0.1', '0.8')} />
        <ServiceCard icon={<FaHome />} title="Home Healthcare" description="Medical services delivered in the comfort of your home." color={colors.green.replace('0.1', '0.8')} />
      </div>
      <div className="services-grid" style={{ padding: '2rem 0' }}>
        <ServiceCard icon={<FaProcedures />} title="In Patient / Day Care" description="Short-term and day-to-day medical care." color={colors.purple.replace('0.1', '0.8')} />
        <ServiceCard icon={<FaVial />} title="Diagnostic Laboratory" description="Precision testing for accurate health assessments." color={colors.yellow.replace('0.1', '0.8')} />
        <ServiceCard icon={<FaCapsules />} title="Pharmacy Services" description="Your one-stop for medications and essentials." color={colors.orange.replace('0.1', '0.8')} />
        <ServiceCard icon={<FaUserNurse />} title="Senior Citizen Care" description="Tailored support for elderly health and well-being." color={colors.teal.replace('0.1', '0.8')} />
      </div>

      <div style={{ padding: '2rem 0' }}></div> {/* Added padding between sections */}

      <div className="section-container">
        <div className="section-left">
          <h1>"More than</h1>
          <h2>1.2 Million Walk-in Consultations so far - India's leading and most Thriving Primary Healthcare chain"</h2>
          <p>
            It's more than just a healthcare provider; it's an integral part of the communities it serves. The model's 
            success is rooted in its commitment to being a 'mini hospital' in every neighborhood. By offering a 
            comprehensive suite of services, OFC eliminates the need for patients to shuttle between various healthcare 
            providers. The 'mini hospital' model embodies the convenience and accessibility that modern healthcare 
            demands.
          </p>
        </div>
        <div className="section-right">
          <h3>Patients Treated and Counting</h3>
          <h1>1,351,757</h1>
          <span>+ Patients</span>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description, color }) => {
  return (
    <div className="service-card" style={{ backgroundColor: color }}>
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Home;
