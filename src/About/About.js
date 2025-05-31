import React, { useEffect, useState } from 'react';
import './About.css';
import location_1 from '../assets/location_1.jpg';
import location_2 from '../assets/location_2.jpg';
import Timeline from './timeline/timeline';
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";


const AboutUs = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 25;
    const duration = 1000;
    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-horizontal-wrapper">


      <div className="about-3column-layout">
        {/* LEFT COLUMN */}
        <div className="column left-column">
          <img src={location_1} alt="location_1" className="image-large" />
          <div className="quality-card">
            <p>Consistent quality.<br/> Every time. <br/>Every unit.</p>
          </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="column middle-column">
          <div className="experience-card">
            <span className="years-count">{count}</span>
            <p className="experience-text">Years of Experience &<br />Trusted Customers</p>
          </div>
          <img src={location_2} alt="location_2" className="image-large" />
        </div>

        {/* RIGHT COLUMN */}
        <div className="column right-column">
          <div className="company-name">LIVING LINES</div>
          {/* <h2 className="company-name">Sai Balaji Marketing</h2> */}
          <h3 className="about-subtitle">About</h3>
          <p className="about-text">
            Living Lines, where quality meets experience, and your vision finds its perfect expression.
            For over two decades, Living Lines has been an icon in the building materials industry,
            offering a diverse range of top-notch products in the retail and wholesale markets.
            Established 23 years ago, our showroom has become synonymous with trust, quality, and innovation.
          </p>
        </div>
      </div>
      <Timeline />



      <div className="value-section">
        <motion.div
          className="value-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="value-highlight">Our Value</h1>
          <h2 className="value-subtitle">Trusted by a wide community</h2>
          <p className="value-description">
            Living Lines is a preferred choice among <strong>homeowners</strong>, <strong>architects</strong>, <strong>contractors</strong>,
            <strong> plumbers</strong>, <strong>masons</strong>, <strong>electricians</strong>, <strong>builders</strong>, <strong>small scale business owners</strong>,
            and other <strong>technicians and vendors</strong>. Our unmatched product range and reliable service make us a one-stop destination for premium home-building materials.
          </p>
        </motion.div>

        <div className="value-cards">
          {[{
            icon: <FaEye style={{ fontSize: "2.2rem", color: "#ff6000" }} />,
            title: "Vision",
            text: "Delivering 100+ top-tier brands to experience quality dream homes.",
          }, {
            icon: <FaBullseye style={{ fontSize: "2.2rem", color: "#ff6000" }} />,
            title: "Mission",
            text: "To be the most trusted showroom which excels in customer service and builds complete home solutions."
          }].map((card, i) => (
            <motion.div
              key={i}
              className="value-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.07, rotate: 1 }}
            >
              <div className="value-icon">{card.icon}</div>
              <h3 className="value-card-title">{card.title}</h3>
              <p className="value-card-text">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
