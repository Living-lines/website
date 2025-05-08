import React from 'react';
import './Catalogs.css';

// Commented image imports image address
// import Anchor from '../assets/anchor logo.png';
// import AstralPipes from '../assets/astral pipes logo.jpg';
// import Austin from '../assets/austin logo.png';
// import Besten from '../assets/besten logo.png';
// import Carysil from '../assets/carysil logo.png';
// import Cri from '../assets/cri logo.png';
// import Elleys from '../assets/elleys Logo.png';
// import Eureka from '../assets/eureka logo.jpg';
// import Euroqo from '../assets/euroqo logo.jpg';
// import Finolex from '../assets/finolex logo.png';
// import Franke from '../assets/franke logo.png';
// import Havells from '../assets/havells logo.png';
// import HiFi from '../assets/hi fi logo.png';
// import Jaquar from '../assets/jaquar logo.png';
// import Kolors from '../assets/kolors logo.png';
// import Kuko from '../assets/kuka logo.png';
// import Legrand from '../assets/legrand logo.png';
// import Luker from '../assets/luker logo.jpg';
// import Nirali from '../assets/nirali logo.jpeg';
// import Norisys from '../assets/norisys logo.png';
// import Philips from '../assets/philips logo.png';
// import Prince from '../assets/prince logo.jpg';
// import Sudhakar from '../assets/sudhakar pipes logo.png';
// import VGuard from '../assets/v-guard logo (1).png';

const samplePDF = '/catalogs.pdf'; // Ensure this path is correct

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
    return (
        <section className="catalogs-section">
            <h2 className="catalogs-heading">🗂 Brand Catalogs</h2>
            <p className="catalogs-subtext">
                Browse and download product catalogs categorized by brand.
            </p>

            <div className="brands-container">
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
                                onClick={() => console.log(`Opening PDF: ${samplePDF}`)}
                            >
                                View Online
                            </a>
                            <a
                                href={samplePDF}
                                download
                                className="btn outline"
                                onClick={() => console.log(`Downloading PDF: ${samplePDF}`)}
                            >
                                Download PDF
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="request-section">
                <h4>📬 Prefer a physical copy?</h4>
                <p>Fill out a request form and we'll mail one to your address.</p>
                <a href="/request-catalog" className="btn primary">Request Printed Catalog</a>
            </div>
        </section>
    );
}
