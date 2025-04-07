import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import "./ProductPage.css";
import Popup from "./Popup";

const allImages = {
  bathroom: [...Array(9).keys()].map(i => `bathroom/bath${i + 1}.jpg`),
  house: [...Array(9).keys()].map(i => `house/house${i + 1}.jpg`),
  kitchen: [...Array(9).keys()].map(i => `kitchen/k${i + 1}.jpg`),
  sink: [...Array(9).keys()].map(i => `sinks/sink${i + 1}.jpg`),
};

const ProductPager = () => {
  const { productId } = useParams();

  const [filters, setFilters] = useState({
    bathroom: false,
    house: false,
    kitchen: false,
    sink: false,
  });

  const [showPopup, setShowPopup] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleImageClick = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);
  const toggleMobileFilters = () => setShowMobileFilters(!showMobileFilters);

  const handleFilterChanger = (category) => {
    setFilters((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const filteredImages = Object.keys(filters).reduce((acc, category) => {
    if (filters[category]) acc[category] = allImages[category];
    return acc;
  }, {});

  const allFilteredImages = Object.values(filteredImages).flat();
  const allImagesToDisplay = allFilteredImages.length > 0
    ? allFilteredImages
    : [...allImages.bathroom, ...allImages.house, ...allImages.kitchen, ...allImages.sink];

  

  return (
    <div className="products-pager">
      <button className="hamburger-icon" onClick={toggleMobileFilters}>
        ☰
      </button>

      <div className={`filters-sectionr ${showMobileFilters ? 'show-mobile-filters' : ''}`}>
        <h2 className="underline-heading">
          Filter <span className="icon-filter">🔍</span>
        </h2>
        <div className="filter-headingr">
          <div>House</div>
          <input type="checkbox" checked={filters.house} onChange={() => handleFilterChanger("house")} />
        </div>
        <div className="filter-headingr">
          <div>Kitchen</div>
          <input type="checkbox" checked={filters.kitchen} onChange={() => handleFilterChanger("kitchen")} />
        </div>
        <div className="filter-headingr">
          <div>Bathroom</div>
          <input type="checkbox" checked={filters.bathroom} onChange={() => handleFilterChanger("bathroom")} />
        </div>
        <div className="filter-headingr">
          <div>Sinks</div>
          <input type="checkbox" checked={filters.sink} onChange={() => handleFilterChanger("sink")} />
        </div>

        <div className="static-section">
          <h4>Color</h4>
          <label><input type="checkbox" /> White</label><br />
          <label><input type="checkbox" /> Grey</label>
        </div>
        <div className="static-section">
          <h4>Shape</h4>
          <label><input type="checkbox" /> Round</label><br />
          <label><input type="checkbox" /> Square</label>
        </div>
        <div className="static-section">
          <h4>Material</h4>
          <label><input type="checkbox" /> Ceramic</label><br />
          <label><input type="checkbox" /> Marble</label>
        </div>
        <div className="static-section">
          <h4>Location</h4>
          <label><input type="checkbox" /> Indoor</label><br />
          <label><input type="checkbox" /> Outdoor</label>
        </div>
        <div className="static-section">
          <h4>Category</h4>
          <label><input type="checkbox" /> Premium</label><br />
          <label><input type="checkbox" /> Budget</label>
        </div>

        <div className="sort-section">
          <h3 className="underline-heading">Sort By <span className="icon-filter">⇅</span></h3>
          <ul className="sort-options">
            <li>Price: Low to High</li>
            <li>Price: High to Low</li>
            <li>Branded</li>
            <li>Non-Branded</li>
            <li>Newest First</li>
            <li>Oldest First</li>
          </ul>
        </div>
      </div>

      <div className="products-sectionr">
        <div className="product-cardsr">
          {allImagesToDisplay.map((image, index) => (
            <div key={index} className="product-cardr" onClick={handleImageClick}>
              <img src={`/product_images/${image}`} alt={`Product ${index}`} className="product-imgr" />
              <div className="product-infor">
                <h4>Section: {image.split("/")[0]}</h4>
                
              </div>
            </div>
          ))}
        </div>
        {showPopup && <Popup onClose={handleClosePopup} />}
      </div>
    </div>
  );
};

export default ProductPager;
