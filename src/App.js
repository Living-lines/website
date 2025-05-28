import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import BrandPage from './brandsPage/brandsPage';
import Footer from './footer/Footer';
import ProductPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Catalogs from './Catalogs/Catalogs';
import Loader from './pages/Loader';

// Loader wrapper to use useLocation inside Router
function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate loading time, or replace with actual data fetching logic if needed
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <div className="app-container" style={{ opacity: loading ? 0.5 : 1 }}>
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/brands" element={<BrandPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/catalogs" element={<Catalogs />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/loader" element={<Loader />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;