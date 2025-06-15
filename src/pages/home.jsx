import { motion } from "framer-motion";
import Hero from "./hero";
import About from "./aboutPage";
import Services from "./servicesPage";
import Products from "./productsPage";
import Navbar from "../components/Navbar";
import VisionMission from "./visionMission";
import WhyChoose from "./whyChoose";
import CounterPage from "./counterPage";
import FightBanner from "./fightBanner";
import ImageGallery from "./imagesGallery";
import ContactsPage from "./contactsPage";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Clients from "./clients";



export default function Home() {
  return (
    <motion.div
      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Services></Services>
        <Products></Products>
        <VisionMission></VisionMission>
        <WhyChoose></WhyChoose>
        <CounterPage></CounterPage>
        <ImageGallery></ImageGallery>
        <FightBanner></FightBanner>
        <Clients></Clients>
        <ContactsPage></ContactsPage>
        <Footer></Footer>
        <ScrollToTopButton />
        
    </motion.div>
  );
}
