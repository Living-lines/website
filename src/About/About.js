import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';
import Timeline from './timeline/timeline.js';
import { motion, useTransform, useScroll } from "framer-motion";
import brandImage from "../assets/brand-image.jpg"

function About() {
    const navigate = useNavigate();
    const [experienceYears, setExperienceYears] = useState(1);
    const imageRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const imageRotate = useTransform(scrollYProgress, [0, 1], ['0deg', '5deg']);

    const aboutImage1 = "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/about-image-1.png";
    const aboutImage2 = "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/about-image-2.jpg";
    const ourValue = "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/our-value.jpg";


    useEffect(() => {
        const handleScroll = () => {
            if (imageRef.current) {
                imageRef.current.style.transform = `translateY(${window.scrollY * 0.2}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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

    const handleGetInTouchClick = () => {
        navigate('/contact');
    };

    return (
        <div className='main-container'>

            {/* EVERYTHING YOU DESIRE SECTION */}
            <div className="desire-section">
                <div className="desire-text">
                    <h1 className="desire-heading">Everything you desire<br />under one roof</h1>
                    <ul className="product-list">
                        <li>Sanitary</li>
                        <li>Taps</li>
                        <li>Tiles</li>
                        <li>Shower Panels</li>
                        <li>Electricals</li>
                        <li>Artifacts</li>
                        <li>Interior Decors</li>
                        <li>Lights</li>
                        <li>Chandeliers</li>
                        <li>Switches</li>
                        <li>Furniture</li>
                        <li>Wallclocks</li>
                        <li>Mirrors</li>
                        <li>Cabinets</li>
                        <li>Accessories</li>
                        <li>Paints</li>
                    </ul>
                </div>
                <div className="desire-image-container">
                    <img src={aboutImage1} alt="Everything You Desire" className="desire-image" />
                </div>
            </div>

            {/* ABOUT SECTION */}
            <div className="about-description-section">
                <motion.div
                    className="about-description-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>About Living Lines</h2>
                    <p>
                        For over 25 years, Living Lines has been your trusted one-stop destination for building elegant
                        homes. We offer a wide range of sanitaryware, bathware, tiles, electrical, and plumbing products—
                        all under one roof.
                    </p>
                    <p>
                        With 150+ experts and one of the largest product displays in the state, we bring unmatched variety,
                        innovation, and value. Every item we offer adds excellence to your home and elegance to your lifestyle.
                    </p>
                    <p>
                        From design to selection, we make homebuilding effortless, stylish, and complete.
                    </p>
                </motion.div>
            </div>

            <Timeline />

            {/* BRAND PROMISE SECTION */}
            <motion.div
                className="brand-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="brand-text">
                    <h1>
                        <span className="big-letter">A</span> brand is a promise.
                        <br />
                        <span className="indent">A good brand is a</span> <br />
                        <span className="double-indent">promise kept.</span>
                    </h1>
                </div>
                {/* <motion.div
                    className="brand-image-container"
                    whileHover={{ scale: 1.1, rotate: '5deg' }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <img src={brandImage} alt="Luxury Interior" className="brand-image" />
                </motion.div> */}
                <div className="brand-image-container">
                    <img src={brandImage} alt="Luxury Interior" className="brand-image" />
                </div>
            </motion.div>

            {/* Our Value + Vision & Mission Section */}
            <div className="container">
                <motion.div
                    className="text-section"
                    initial={{ opacity: 1, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileInView={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
                >
                    <h1 className="highlight-about">Our Value</h1>
                    <h2 className="title">Trusted by a wide community</h2>
                    <p className="description">
                        Living Lines is a preferred choice among <strong>homeowners</strong>, <strong>architects</strong>, <strong>contractors</strong>,
                        <strong> plumbers</strong>, <strong>masons</strong>, <strong>electricians</strong>, <strong>builders</strong>, <strong>small scale business owners</strong>,
                        and other <strong>technicians and vendors</strong>. Our unmatched product range and reliable service make us a one-stop destination for premium home-building materials.
                    </p>
                </motion.div>

                <div className="cards">
                    <motion.div
                        className="card"
                        whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
                        whileInView={{ rotateY: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                        <div className="icon">💡</div>
                        <h3 className="card-title">Vision</h3>
                        <p className="card-text">
                            Delivering 100+ top-tier brands to experience quality dream homes.
                        </p>
                    </motion.div>

                    <motion.div
                        className="card"
                        whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
                        whileInView={{ x: [-10, 10, -10, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror" }}
                    >
                        <div className="icon">🛋️</div>
                        <h3 className="card-title">Mission</h3>
                        <p className="card-text">
                            To be the most trusted showroom which excels in customer service and builds complete home solutions.
                        </p>
                    </motion.div>
                </div>
            </div>

        </div>
    );
}

export default About;
