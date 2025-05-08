import React from 'react';
import './Catalogs.css';

import Anchor from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/anchor logo.png';
import AstralPipes from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/astral pipes logo.jpg';
import Austin from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/austin logo.png';
import Besten from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/besten logo.png';
import Carysil from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/carysil logo.png';
import Cri from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/cri logo.png';
import Elleys from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/elleys Logo.png';
import Eureka from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/eureka logo.jpg';
import Euroqo from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/euroqo logo.jpg';
import Finolex from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/finolex logo.png';
import Franke from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/franke logo.png';
import Havells from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/havells logo.png';
import HiFi from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/hi fi logo.png';
import Jaquar from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/jaquar logo.png';
import Kolors from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kolors logo.png';
import Kuko from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kuka logo.png';
import Legrand from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/legrand logo.png';
import Luker from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/luker logo.jpg';
import Nirali from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/nirali logo.jpeg';
import Norisys from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/norisys logo.png';
import Philips from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/philips logo.png';
import Prince from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/prince logo.jpg';
import Sudhakar from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/sudhakar pipes logo.png';
import VGuard from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/v-guard logo (1).png';

const samplePDF = '/catalogs.pdf'; // Ensure this path is correct

const brands = [
    { name: 'Anchor', logo: Anchor },
    { name: 'Astral Pipes', logo: AstralPipes },
    { name: 'Austin', logo: Austin },
    { name: 'Besten', logo: Besten },
    { name: 'Carysil', logo: Carysil },
    { name: 'CRI', logo: Cri },
    { name: 'Elleys', logo: Elleys },
    { name: 'Eureka', logo: Eureka },
    { name: 'Euroqo', logo: Euroqo },
    { name: 'Finolex', logo: Finolex },
    { name: 'Franke', logo: Franke },
    { name: 'Havells', logo: Havells },
    { name: 'HiFi', logo: HiFi },
    { name: 'Jaquar', logo: Jaquar },
    { name: 'Kolors', logo: Kolors },
    { name: 'Kuko', logo: Kuko },
    { name: 'Legrand', logo: Legrand },
    { name: 'Luker', logo: Luker },
    { name: 'Nirali', logo: Nirali },
    { name: 'Norisys', logo: Norisys },
    { name: 'Philips', logo: Philips },
    { name: 'Prince', logo: Prince },
    { name: 'Sudhakar', logo: Sudhakar },
    { name: 'VGuard', logo: VGuard },
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