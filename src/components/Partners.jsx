import { motion } from "framer-motion";
import partner1 from "../assets/partner1.webp";
import partner2 from "../assets/partner2.webp";
import partner3 from "../assets/partner3.webp";
import partner4 from "../assets/partner4.webp";
import bgImage from "../assets/SER.webp";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const partners = [
  { id: 1, name: "Suez", logo: partner1 },
  { id: 2, name: "Banque Misr", logo: partner2 },
  { id: 3, name: "ECG", logo: partner3 },
  { id: 4, name: "IDEG", logo: partner4 },
];

export default function Partners() {
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timeout = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timeout);
    }, []);
  
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center bg-slate-900">
        <motion.div
          className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    );
  }

  return (
    <>
    <Navbar></Navbar>
    <div className="text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <motion.h1
            className="text-white text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Strategic Partners
          </motion.h1>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 md:px-12 bg-gradient-to-tr from-[#ffe6e6] via-[#fff8e1] to-[#ffe6e6]">
        <motion.h2
          className="text-center text-4xl md:text-5xl font-bold text-red-600 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Trusted by Industry Leaders
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="relative group backdrop-blur-xl bg-white/50 rounded-2xl shadow-lg border border-white/40 overflow-hidden p-6 transition hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Glowing Border on Hover */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-red-400 via-yellow-300 to-red-500 opacity-0 group-hover:opacity-100 blur-xl z-0 transition duration-700"></div>

              <div className="relative z-10 flex flex-col items-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-28 h-28 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  {partner.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
    <Footer></Footer>
    </>
  );
}
