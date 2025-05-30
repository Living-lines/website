import React, { useState } from 'react';
import './Contact.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const locations = [
  {
    name: "VISAKHAPATNAM",
    address: `#9-1-48/A, NEW RESAPUVANIPALEM,
NEAR AUDI SHOWROOM
VISAKHAPATNAM - 530013`,
    mapSrc:
      "https://www.google.com/maps?q=9-1-48/A,+New+Resapuvanipalem,+Visakhapatnam,+530013&output=embed",
  },
  {
    name: "MADHURAWADA",
    address: `Survey No. : 40/2/A, Beside Prince Dhaba, P.M.Palem, Madhurawada,
Visakhapatnam -530041`,
    mapSrc:
      "https://www.google.com/maps?q=Prince+Dhaba,+P.M.Palem,+Madhurawada,+Visakhapatnam,+530041&output=embed",
  },
  {
    name: "VIZIANAGARAM",
    address: `8-32-58, No. 61/2C, V.T.Agraharam,
Beside Ketala Weigh Bridge, Gandhi Nagar, Vizianagaram - 535004`,
    mapSrc:
      "https://www.google.com/maps?q=Ketala+Weigh+Bridge,+Gandhi+Nagar,+Vizianagaram,+535004&output=embed",
  },
];

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
      <div className="contact-hero">
        <div className="hero-intro">
          <h1>We’re Here to Support You</h1>
          <p>
            Whether you have questions, need product advice, or want to discuss your project,
            our expert team is ready to assist. Reach out anytime — we value your trust and satisfaction.
          </p>
        </div>

        <div className="hero-image">
          <img
            src={require('../../src/assets/contact-us1.jpg')}
            alt="Contact Us"
          />
        </div>
      </div>

      <div className="contact-info-cards">
        <div className="info-card">
          <h3>Customer Support</h3>
          <p>Call us at <a href="tel:+918074253744">+91 80742 53744</a> or email <a href="mailto:saibalajimarketing@gmail.com">saibalajimarketing@gmail.com</a></p>
        </div>
        <div className="info-card">
          <h3>Visit Our Office</h3>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            style={{ maxWidth: 260, margin: "0 auto" }}
          >
            {locations.map((loc, idx) => (
              <SwiperSlide key={idx}>
                <div>
                  <p>{loc.address}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="info-card">
          <h3>Working Hours</h3>
          <p>Monday - Saturday: 9:00 AM - 9:00 PM<br />Sunday: Closed</p>
        </div>
      </div>

      <div className="connect-us-card">
        <h3>Connect With Us</h3>
        <p>Stay in the loop by following us on social media for updates, offers, and much more!</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-link facebook">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-link instagram">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="social-link twitter">Twitter</a>
        </div>
      </div>

      <div className="hero-cta">
        <h2>Ready to Get Started?</h2>
        <p>Send us a message below and let’s discuss your home needs!</p>
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
          <h2 style={{ color: '#ff6000' }}>Our Locations</h2>
          <p style={{ color: '#000' }}>Visit us at any of our showrooms:</p>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            style={{ maxWidth: 420, margin: "0 auto" }}
          >
            {locations.map((loc, idx) => (
              <SwiperSlide key={idx}>
                <div className="map-block">
                  <h3>{loc.name}</h3>
                  <p>{loc.address}</p>
                  <iframe
                    src={loc.mapSrc}
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={loc.name}
                  ></iframe>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Contact;