import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';
//import aboutImage1 from '../assets/about-image-1.png'; // Ensure you import the image here
//import aboutImage2 from '../assets/about-image-2.jpg';
//import ourValue from '../assets/our-value.jpg';
import Timeline from './timeline/timeline.js';
import { motion, useTransform, useScroll } from "framer-motion";
// import Footer from '../footer/Footer';
// import BrandCarousel from '../brand/brand.js';
// import logoImage from '../../src/assets/logo.jpg';
// import { faUser, faGlobe } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function About() {
    const navigate = useNavigate();
    const [experienceYears, setExperienceYears] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const imageRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const imageRotate = useTransform(scrollYProgress, [0, 1], ['0deg', '5deg']);
    const [isScrolled, setIsScrolled] = useState(false);

    // Using external image locations for the images
    const aboutImage1 = "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/about-image-1.png";
    const aboutImage2 = "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/about-image-2.jpg";
    const ourValue = "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/our-value.jpg";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const animateNumber = () => {
            let start = 1;
            const end = 23;
            const stepTime = Math.abs(Math.floor(2000 / (end - start)));
            let current = start;

            const timer = setInterval(() => {
                current += 1;
                setExperienceYears(current);
                if (current >= end) {
                    clearInterval(timer);
                }
            }, stepTime);
        };

        animateNumber();

        const handleScroll = () => {
            if (imageRef.current) {
                imageRef.current.style.transform = `translateY(${window.scrollY * 0.2}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleGetInTouchClick = () => {
        navigate('/contact');
    };

    return (
        <div className='main-container'>

            <div
                className="home-container"
                style={{ backgroundImage: `url(${aboutImage1})` }}
            >
                <div className="overlay-content">
                    <div className="left-section">
                        <motion.img
                            src={aboutImage2}
                            alt="Overlay"
                            className="small-image"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            whileHover={{ scale: 1.1 }}
                        />
                    </div>
                    <div className="right-section">
                        <h1 className="main-heading">EVERYTHING YOU DESIRE</h1>
                        <p className="sub-text">
                            Tailored interior design by experienced professionals, crafted just for you.
                            Unlock a world of endless possibilities with our unique ideas.
                        </p>
                        <motion.button
                            className="glass-button"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleGetInTouchClick}
                        >
                            Get in Touch
                        </motion.button>
                    </div>
                </div>
            </div>

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
                <motion.div
                    className="brand-image-container"
                    whileHover={{ scale: 1.1, rotate: '5deg' }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <img src={ourValue} alt="Luxury Interior" className="brand-image" />
                </motion.div>
            </motion.div>

            <div className="container">
                <motion.div
                    className="text-section"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
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
                        className="card"
                        whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
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
                        className="card"
                        whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
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
        </div>
    );
}

export default About;
