import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Selection from "./pages/Selection";
import Game from "./pages/Game";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <NavigationBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/selection" element={<Selection />} />
            <Route path="/game" element={<Game />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
