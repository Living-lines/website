import React from 'react';
import './About.css';
import aboutImage1 from '../assets/about-image-1.png';
import aboutImage2 from '../assets/about-image-2.jpg';
import aboutImage3 from '../assets/about-image-3.webp';
import ourValue from '../assets/our-value.jpg';
import Timeline from './timeline/timeline.js';
import Experience from './experience/experience.js'
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useState, useEffect, useRef } from 'react';
import Footer from '../footer/Footer';


function About() {
    const [experienceYears, setExperienceYears] = useState(1);
    const imageRef = useRef(null);
    const { scrollYProgress } = useViewportScroll();
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const imageRotate = useTransform(scrollYProgress, [0, 1], ['0deg', '5deg']);

    useEffect(() => {
        const animateNumber = () => {
            let start = 1;
            const end = 23;
            const range = end - start;
            let current = start;
            const increment = end > start ? 1 : -1;
            const stepTime = Math.abs(Math.floor(2000 / range));

            const timer = setInterval(() => {
                current += increment;
                setExperienceYears(current);
                if (current === end) {
                    clearInterval(timer);
                }
            }, stepTime);
        };

        animateNumber();

        const handleScroll = () => {
            if (imageRef.current) {
                const scrollY = window.scrollY;
                imageRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className="home-container">
                <img src={aboutImage1} alt="Background" className="background-image" />
                <div className="overlay-content">
                    <div className="left-section">
                        <img src={aboutImage2} alt="Overlay" className="small-image" />
                    </div>
                    <div className="right-section">
                        <h1 className="main-heading">EVERYTHING YOU DESIRE</h1>
                        <p className="sub-text">
                            Tailored interior design by experienced professionals, crafted just for you.
                            Unlock a world of endless possibilities with our unique ideas.
                        </p>
                        <button className="glass-button">Get in Touch</button>
                    </div>
                </div>
            </div>

            <Timeline />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="brand-container"
            >
                <div className="brand-text">
                    <h1>
                        <span className="big-letter">A</span> brand is a promise.
                        <br />
                        <span className="indent">A good brand is a</span> <br />
                        <span className="double-indent">promise kept.</span>
                    </h1>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    // transition={{ duration: 0.8, delay: 0.2 }}
                    className="brand-image-container"
                    whileHover={{ scale: 1.1, rotate: '5deg' }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <img src={ourValue} alt="Luxury Interior" className="brand-image" />
                </motion.div>
            </motion.div>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    // transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-section"
                    whileInView={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
                >
                    <h1 className="highlight-about">Our Value</h1>
                    <h2 className="title">Trusted by Homeowners and Professionals Alike</h2>
                    <p className="description">
                        With a reputation for quality and reliability, Living Lines has become
                        a preferred choice for homeowners, architects, and contractors. Our
                        extensive inventory and commitment to customer satisfaction make us a
                        trusted name in the industry.
                    </p>
                </motion.div>
                <div className="cards">
                    <motion.div
                        whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
                        initial={{ opacity: 0, y: 50, rotateX: -20 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        // transition={{ duration: 1.2 }}
                        className="card"
                        whileInView={{ rotateY: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                        <div className="icon">💡</div>
                        <h3 className="card-title">Vision</h3>
                        <p className="card-text">
                            Living Lines, where quality meets experience, and your vision finds
                            its perfect expression.
                        </p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
                        initial={{ opacity: 0, y: 50, rotateX: -20 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        // transition={{ duration: 1.2 }}
                        className="card"
                        whileInView={{ x: [-10, 10, -10, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror" }}
                    >
                        <div className="icon">🛋️</div>
                        <h3 className="card-title">Mission</h3>
                        <p className="card-text">
                            To build a relationship with our clients on the basis of mutual
                            trust and respect, and offer top-notch customer service.
                        </p>
                    </motion.div>
                </div>
            </div>


            {/* <div className="experience-container">
                <div className="image-section">
                    <img ref={imageRef} src={aboutImage3} alt="Modern Bathroom" />
                    <div className="experience">
                        <span>{experienceYears}</span>+ Year Experience
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    // transition={{ duration: 0.8 }}
                    className="text-section"
                    whileInView={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                >
                    <h2 className="animated-title">Sai Balaji Marketing</h2>
                    <p className="animated-paragraph">
                        Living Lines, where quality meets experience, and your vision finds its perfect expression. For over two decades, Living Lines has been an icon in the building materials industry, offering a diverse range of top-notch products in the retail and wholesale markets. Established 23 years ago, our showroom has become synonymous with trust, quality, and innovation.
                    </p>
                    <ul className="animated-list">
                        <li>Innovate</li>
                        <li>Decorate</li>
                        <li>Elevate</li>
                        <li>Your Interior</li>
                    </ul>
                </motion.div>
            </div> */}
            <Experience/>
            <Footer />

        </div>
    );
}

export default About;