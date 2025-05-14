

import React, { useState } from 'react';
import './Contact.css';  // For custom styling
import ImageSlider from '../ImageSlider/ImageSlider';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        location: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('https://backend-tawny-one-62.vercel.app/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert('✅ Message sent successfully!');
            } else {
                alert('❌ Failed to send message!');
            }
        } catch (err) {
            console.error('Error:', err);
            alert('❌ Error sending message!');
        }
    };

    return (
        <div className="contact-container">
            <div className="header-contact">
                <div className="contact-text">
                    <h1>GET IN TOUCH</h1>
                </div>
                <div className="contact-image">
                    <img
                        src="https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/contact-us.webp"
                        alt="Contact Us"
                    />
                </div>
            </div>

            <div className="contact-details">
                <div className="contact-item">
                    <span className="icon phone-icon"></span>
                    <p className="contact-info">8074253744</p>
                </div>
                <div className="contact-item">
                    <span className="icon email-icon"></span>
                    <p className="contact-info">saibalajimarketing@gmail.com</p>
                </div>
            </div>

            <div className='message-contact-details'>
                <div className="message-section">
                    <h2>Send Us a Message</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <input
                            type="text"
                            name="location"
                            placeholder="Your Location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="send-button">Send Message</button>
                    </form>
                </div>

                <div className="location-section">
                    <h2>Our Location</h2>
                    <p>Visit us at our office:</p>
                    <p>Gandhi Nagar, Vizianagaram, Andhra Pradesh, 535004</p>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.239436297686!2d83.10319217540946!3d17.73413685086742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35d3a6c1fd314d%3A0x579299a78b2b24bc!2sGandhi%20Nagar%2C%20Vijayanagaram%2C%20Andhra%20Pradesh%2C%20535004!5e0!3m2!1sen!2sin!4v1678882307918!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            <ImageSlider />
        </div>
    );
}

export default Contact;

