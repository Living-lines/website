import React, { useState, useEffect } from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';
import Timeline from './timeline/timeline.js';
import { motion } from "framer-motion";
import location1 from "../assets/location_1.jpg";
import location2 from "../assets/location_2.jpg";
import location3 from "../assets/location_3.jpg";

function About() {
    const navigate = useNavigate();
    const [experienceYears, setExperienceYears] = useState(1);

    const aboutImage1 = "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/about-image-1.png";

    useEffect(() => {
        const featureList = document.querySelector('.feature-list');
        const items = document.querySelectorAll('.feature-item');

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                featureList.classList.add('reveal');
                items.forEach((item, index) => {
                    item.style.animationName = 'fadeUp';
                    item.style.animationDelay = `${index * 0.1}s`;
                    item.style.animationDuration = '0.6s';
                    item.style.animationFillMode = 'forwards';
                    item.style.opacity = '0';
                });
            } else {
                featureList.classList.remove('reveal');
                items.forEach((item) => {
                    item.style.animationName = 'none';
                    item.style.opacity = '0';
                });
            }
        }, { threshold: 0.3 });

        if (featureList) observer.observe(featureList);

        return () => {
            if (featureList) observer.unobserve(featureList);
        };
    }, []);

    useEffect(() => {
        let start = 1;
        const end = 23;
        const stepTime = Math.abs(Math.floor(2000 / (end - start)));
        let current = start;
        const timer = setInterval(() => {
            current += 1;
            setExperienceYears(current);
            if (current >= end) clearInterval(timer);
        }, stepTime);
    }, []);

    return (
        <div className='main-container'>

            <div className="feature-showcase">
                <div className="feature-text">
                    <h1 className="feature-heading">Everything You Desire<br />Under One Roof</h1>
                    <ul className="feature-list">
                        {["Sanitary", "Taps", "Tiles", "Shower Panels", "Electricals", "Artifacts", "Interior Decors", "Lights",
                            "Chandeliers", "Switches", "Furniture", "Wallclocks", "Mirrors", "Cabinets", "Accessories", "Paints",
                            "Plumbing", "Pipes", "Sinks", "Washbasins", "Pumps & Motors", "Fans"].map((item, i) => (
                            <li className="feature-item" key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="feature-images">
                    <div className="main-img-container">
                        <img src={aboutImage1} alt="Main Display" className="main-feature-img" />
                        {/* <img src={aboutImage1} alt="Secondary Display" className="secondary-feature-img" /> */}
                    </div>
                </div>
            </div>

            <div className="about-living-section">
                <motion.h2
                    className="about-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    About Living Lines
                </motion.h2>

                <div className="about-info-parts">
                    {["For over 25 years, Living Lines has been your trusted one-stop destination for building elegant homes. We offer a wide range of sanitaryware, bathware, tiles, electrical, and plumbing products — all under one roof.",
                        "With 150+ experts and one of the largest product displays in the state, we bring unmatched variety, innovation, and value. Every item we offer adds excellence to your home and elegance to your lifestyle.",
                        "From design to selection, we make homebuilding effortless, stylish, and complete."].map((text, index) => (
                            <motion.p
                                className="about-description-block"
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                {text}
                            </motion.p>
                        ))}
                </div>
            </div>

            <Timeline />

            {/* <div className="branches-section">
                <motion.h2
                    className="branches-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Our Branches
                </motion.h2> */}

                {/* <div className="branches-gallery">
                    {[location1, location2, location3].map((src, index) => (
                        <motion.div
                            key={index}
                            className="branch-card"
                            initial={{ opacity: 0, x: -150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0, delay: index * 0.4, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <img src={src} alt={`Branch ${index + 1}`} className="branch-photo" />
                        </motion.div>
                    ))}
                </div> */}
            {/* </div> */}

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
                        icon: "💡",
                        title: "Vision",
                        text: "Delivering 100+ top-tier brands to experience quality dream homes.",
                    }, {
                        icon: "🧫️",
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
}

export default About;
