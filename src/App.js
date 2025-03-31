// App.js
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar'; // Correct path for Navbar
import About from './About/About'; // Correct path for About
import BrandCarousel from './brand/brand';
import Footer from './footer/Footer';

function App() {
  return (
    <BrowserRouter>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route path="/brand" element={<BrandCarousel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;