import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react"; // WhatsApp icon
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import { Link } from "react-router-dom";
const images = [hero1, hero2, hero3];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className=" relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          loading="lazy"
          alt={`Hero ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
            index === current ? "opacity-100 scale-110 z-10" : "opacity-0 scale-100 z-0"
          }`}
        />
      ))}

      {/* Hero Text Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 flex items-center justify-center px-4 text-center z-20">
        <motion.div
          className="text-white max-w-2xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Reliable Firefighting & HVAC Solutions
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Protecting lives & enhancing comfort since 2020.
          </motion.p>

          <Link
            to={"/contact"}
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* ✅ WhatsApp Floating Button */}
      {/* 📞 Phone Call Floating Button */}
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <a
        href="https://wa.me/201055854777"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
          <Phone className="w-6 h-6 text-white" />
        </div>
      </a>
    </div>
    </section>
  );
}
