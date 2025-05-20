import React, { useEffect, useState } from 'react';
import './Catalogs.css';

export default function Catalogs() {
  const [catalogs, setCatalogs] = useState([]);

  useEffect(() => {
    fetch('https://backend-tawny-one-62.vercel.app/api/catalogs')
      .then(res => res.json())
      .then(data => setCatalogs(data))
      .catch(err => console.error('Failed to load catalogs:', err));
  }, []);

  return (
    <section className="catalogs-section">
      <h2 className="catalogs-heading">Tiles Catalogs</h2>
      <p className="catalogs-subtext">
        Browse and download product catalogs categorized by tile brand.
      </p>

      <div className="brands-container">
        {catalogs.map((cat, idx) => (
          <div key={cat.id ?? idx} className="brand-card">
            <div className="logo-container">
              <img
                src={cat.image_url}
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
              <a
                href={cat.pdf_url}
                download
                className="btn outline"
              >
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
