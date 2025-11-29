import React, { useState } from "react";
import "./About.css";
import aboutImage from "../assets/about.jpg";
import doctorImg from "../assets/doctor.jpg";
import womanChildImg from "../assets/woman_child.jpg";
import seniorImg from "../assets/senior.jpg";
import homeCareImg from "../assets/home_care.jpg";
import specialistImg from "../assets/specialist.jpg";
import pharmacyImg from "../assets/pharmacy.jpg";

const About = () => {
  const [showVision, setShowVision] = useState(false);
  const [showMission, setShowMission] = useState(false);

  const toggleVision = () => setShowVision(!showVision);
  const toggleMission = () => setShowMission(!showMission);

  const services = [
    { title: "24/7 Family Doctor Call", img: doctorImg },
    { title: "Woman and Child Care", img: womanChildImg },
    { title: "Senior Citizen Care", img: seniorImg },
    { title: "Home Healthcare", img: homeCareImg },
    { title: "Specialist Referrals", img: specialistImg },
    { title: "24/7 Pharmacy Services", img: pharmacyImg },
  ];

  return (
    <section className="about">
      <div className="about-banner" style={{ backgroundImage: `url(${aboutImage})` }}>
        <div className="overlay">
          <h1>About Us</h1>
          <p>
            Home <span>|</span> About
          </p>
        </div>
      </div>

      <div className="about-header">
        <h2>Welcome to LifeSpring Clinic</h2>
        <p>
          At LifeSpring, we believe in compassionate, affordable, and advanced healthcare
          services for every individual. Our dedicated team of medical professionals ensures
          personalized care to help you lead a healthier life.
        </p>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.img} alt={service.title} className="service-img" />
            <h3 className="service-title">{service.title}</h3>
          </div>
        ))}
      </div>

      <div className="vision-mission">
        <div className="vision" onClick={toggleVision}>
          <h3>Our Vision</h3>
          {showVision && (
            <p className="vision-mission-text">
              To be the most trusted healthcare provider offering world-class medical services
              with a patient-first approach.
            </p>
          )}
        </div>
        <div className="mission" onClick={toggleMission}>
          <h3>Our Mission</h3>
          {showMission && (
            <p className="vision-mission-text">
              Delivering high-quality, accessible, and innovative healthcare solutions to improve
              the well-being of our patients.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;