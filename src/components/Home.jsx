import { motion } from "framer-motion";
import Hero from "../pages/hero";
import About from "../pages/aboutPage";
import Services from "../pages/servicesPage";
import Products from "../pages/productsPage";
import Navbar from "./Navbar";
import VisionMission from "../pages/visionMission";
import WhyChoose from "../pages/whyChoose";
import CounterPage from "../pages/counterPage";
import FightBanner from "../pages/fightBanner";
import ImageGallery from "../pages/imagesGallery";
import ContactsPage from "../pages/contactsPage";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import { useEffect, useState } from "react";
import Clients from "../pages/clients";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-screen flex justify-center items-center bg-slate-900">
          <motion.div
            className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Products />
          <VisionMission />
          <WhyChoose />
          <CounterPage />
          <ImageGallery />
          <FightBanner />
          <ContactsPage />
          <Clients></Clients>
          <Footer />
          <ScrollToTopButton />
          
        </motion.div>
      )}
    </>
  );
}
