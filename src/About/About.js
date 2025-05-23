import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';
import Timeline from './timeline/timeline.js';
import { motion, useTransform, useScroll } from "framer-motion";
import brandImage from "../assets/brand-image.jpg"
import location1 from "../assets/location_1.jpg";
import location2 from "../assets/location_2.jpg";
import location3 from "../assets/location_3.jpg";


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


    /* Ganesh Code */
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



    /* End of Ganesh Code */

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
            {/*<div className="desire-section">
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
                        <li>Plumbing</li>
                        <li>Pipes</li>
                        <li>Sinks</li>
                        <li>Washbasins</li>
                        <li>Pumps & Motors</li>
                        <li>Fans</li>
                        <li>Plywood</li>
                    </ul>
                </div>
                <div className="desire-image-container">
                    <img src={aboutImage1} alt="Everything You Desire" className="desire-image" />
                </div>
            </div> */}


            <div className="feature-showcase">
                <div className="feature-text">
                    <h1 className="feature-heading">Everything You Desire<br />Under One Roof</h1>
                    <ul className="feature-list">
                        {[
                            "Sanitary", "Taps", "Tiles", "Shower Panels", "Electricals", "Artifacts", "Interior Decors", "Lights",
                            "Chandeliers", "Switches", "Furniture", "Wallclocks", "Mirrors", "Cabinets", "Accessories", "Paints",
                            "Plumbing", "Pipes", "Sinks", "Washbasins", "Pumps & Motors", "Fans", "Plywood"
                        ].map((item, i) => (
                            <li className="feature-item" key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="feature-images">
                    <div className="main-img-container">
                        <img src={aboutImage1} alt="Main Display" className="main-feature-img" />
                        <img src={aboutImage1} alt="Secondary Display" className="secondary-feature-img" />
                    </div>
                </div>
            </div>







            {/* ABOUT SECTION */}
            {/*<div className="about-description-section">
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
            </div> */}



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
                    {[
                        "For over 25 years, Living Lines has been your trusted one-stop destination for building elegant homes. We offer a wide range of sanitaryware, bathware, tiles, electrical, and plumbing products — all under one roof.",
                        "With 150+ experts and one of the largest product displays in the state, we bring unmatched variety, innovation, and value. Every item we offer adds excellence to your home and elegance to your lifestyle.",
                        "From design to selection, we make homebuilding effortless, stylish, and complete."
                    ].map((text, index) => (
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
            </div><br /><br />


            <Timeline />

            {/* BRAND PROMISE SECTION */}
            {/* <motion.div
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
                
                <div className="brand-image-container">
                    <img src={brandImage} alt="Luxury Interior" className="brand-image" />
                </div>
            </motion.div> */}

            {/*<div className="branch-section">
                <h2 className="branch-heading">Our Branches</h2>

                <div className="branch-gallery">
                    {[location1, location2, location3].map((src, index) => (
                        <div key={index} className="branch-box">
                            <img src={src} alt={`Branch ${index + 1}`} className="branch-image" />
                        </div>
                    ))}
                </div>
            </div> */}


            <div className="branches-section">
                <motion.h2
                    className="branches-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Our Branches
                </motion.h2>

                <div className="branches-gallery">
                    {[location1, location2, location3].map((src, index) => (
                        <motion.div
                            key={index}
                            className="branch-card"
                            initial={{ opacity: 0, x: -150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0,
                                delay: index * 0.4,
                                ease: "easeOut"
                            }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <img src={src} alt={`Branch ${index + 1}`} className="branch-photo" />
                        </motion.div>
                    ))}
                </div>
            </div>









            {/* Our Value + Vision & Mission Section */}
            {/*<div className="container">
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
            </div> */}


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
                    {[
                        {
                            icon: "💡",
                            title: "Vision",
                            text: "Delivering 100+ top-tier brands to experience quality dream homes.",
                        },
                        {
                            icon: "🛋️",
                            title: "Mission",
                            text: "To be the most trusted showroom which excels in customer service and builds complete home solutions.",
                        },
                    ].map((card, i) => (
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
