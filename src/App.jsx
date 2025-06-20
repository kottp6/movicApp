import { useEffect, useState } from 'react';
import { AnimatePresence } from "framer-motion";
import './App.css';
import About from "./components/About";
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import SplashScreen from './pages/splashScreen';
import Home from './components/Home';
import Partners from './components/Partners';
import NotFound from './components/NotFound';
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // changed here
import { Toaster } from 'react-hot-toast';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <AnimatePresence mode="wait">
        <SplashScreen key="splash" />
      </AnimatePresence>
    );
  }

  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route index={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
