import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import BrandPage from './brandsPage/brandsPage';
import Footer from './footer/Footer';


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<BrandPage />} /> {/* Make sure BrandPage component is correctly imported */}
      </Routes>
    </Router>
  );
}

export default App;
