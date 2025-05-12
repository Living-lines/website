import React, { useEffect, useState } from 'react';
import './Catalogs.css';

const samplePDF = '/catalogs.pdf'; // Static PDF for existing logos

const brands = [
  { name: 'Anchor', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/anchor%20logo.png' },
  { name: 'Astral Pipes', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/astral%20pipes%20logo.jpg' },
  { name: 'Austin', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/austin%20logo.png' },
  { name: 'Besten', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/besten%20logo.png' },
  { name: 'Carysil', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/carysil%20logo.png' },
  { name: 'CRI', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/cri%20logo.png' },
  { name: 'Elleys', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/elleys%20Logo.png' },
  { name: 'Eureka', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/eureka%20logo.jpg' },
  { name: 'Euroqo', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/euroqo%20logo.jpg' },
  { name: 'Finolex', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/finolex%20logo.png' },
  { name: 'Franke', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/franke%20logo.png' },
  { name: 'Havells', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/havells%20logo.png' },
  { name: 'HiFi', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/hi%20fi%20logo.png' },
  { name: 'Jaquar', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/jaquar%20logo.png' },
  { name: 'Kolors', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kolors%20logo.png' },
  { name: 'Kuko', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kuka%20logo.png' },
  { name: 'Legrand', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/legrand%20logo.png' },
  { name: 'Luker', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/luker%20logo.jpg' },
  { name: 'Nirali', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/nirali%20logo.jpeg' },
  { name: 'Norisys', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/norisys%20logo.png' },
  { name: 'Philips', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/philips%20logo.png' },
  { name: 'Prince', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/prince%20logo.jpg' },
  { name: 'Sudhakar', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/sudhakar%20pipes%20logo.png' },
  { name: 'VGuard', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/v-guard%20logo%20(1).png' },
];

export default function Catalogs() {
  const [newCatalogs, setNewCatalogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/catalogs')
      .then((res) => res.json())
      .then((data) => setNewCatalogs(data))
      .catch((err) => console.error('Failed to load new catalogs:', err));
  }, []);

  return (
    <section className="catalogs-section">
      <h2 className="catalogs-heading">🗂 Brand Catalogs</h2>
      <p className="catalogs-subtext">
        Browse and download product catalogs categorized by brand.
      </p>

      <div className="brands-container">
        {/* Old static logos with sample PDF */}
        {brands.map((brand, idx) => (
          <div key={idx} className="brand-card">
            <div className="logo-container">
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
            </div>
            <h3 className="brand-name">{brand.name}</h3>
            <div className="catalog-buttons">
              <a
                href={samplePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
              >
                View Online
              </a>
              <a href={samplePDF} download className="btn outline">
                Download PDF
              </a>
            </div>
          </div>
        ))}

        {/* New catalogs uploaded by admin */}
        {newCatalogs.map((cat, idx) => (
          <div key={`new-${idx}`} className="brand-card">
            <div className="logo-container">
              <img
                src="https://via.placeholder.com/100x100?text=PDF"
                alt={cat.title}
                className="brand-logo"
              />
            </div>
            <h3 className="brand-name">{cat.title}</h3>
            <div className="catalog-buttons">
              <a
                href={cat.pdf_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
              >
                View Online
              </a>
              <a href={cat.pdf_url} download className="btn outline">
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
}
