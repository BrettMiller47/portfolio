import './App.css';
import Nav from './components/Nav/index';
import Contact from './components/Contact';
import Footer from './components/Footer/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ThemeProvider from './utils/ThemeContext';


function App() {

  return (
    <ThemeProvider>
      <Router>
        <Nav />
        <Routes>
          <Route 
            path="/portfolio" 
            element={<Home />} 
          />
          <Route 
            path="/pipeline" 
            element={<Portfolio />} 
          />
        </Routes>
        <Contact />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
