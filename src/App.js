import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import BrandPage from './brandsPage/brandsPage';
import Footer from './footer/Footer';
import ProductPage from './pages/ProductsPage';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Catalogs from './Catalogs/Catalogs';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/brands" element={<BrandPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/catalogs" element={<Catalogs/>}/>
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
