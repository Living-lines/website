import React, { useEffect, useState } from 'react';
import './Catalogs.css';

const samplePDF = '/catalogs.pdf'; // Static PDF for existing logos

const brands = [
  { name: 'Pavit', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/pavit%20logo.png' },
  { name: 'Bandhan', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/bandhan%20logo.png' },
  { name: 'Bonzo', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/bonzo%20logo.png' },
  { name: 'Motto', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/motto%20logo.png' },
  { name: 'Kajaria', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kajaria%20logo.png' },
  { name: 'RAK', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/rak%20logo.png' },
  { name: 'Brite', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/brite%20logo.png' },
  { name: 'Murano', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/murano%20logo.png' },
  { name: 'Qutone', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/qutone%20logo.png' },
  { name: 'Lavish', logo: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/lavish%20logo.png' },
];

export default function Catalogs() {
  const [newCatalogs, setNewCatalogs] = useState([]);

  useEffect(() => {
    fetch('https://backend-tawny-one-62.vercel.app/api/catalogs')
      .then((res) => res.json())
      .then((data) => setNewCatalogs(data))
      .catch((err) => console.error('Failed to load new catalogs:', err));
  }, []);

  return (
    <section className="catalogs-section">
      <h2 className="catalogs-heading"> Tiles Catalogs
      </h2>
      <p className="catalogs-subtext">
        Browse and download product catalogs categorized by tile brand.
      </p>

      <div className="brands-container">
        {/* Static tile brand logos */}
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

        {/* Admin-uploaded catalogs */}
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
