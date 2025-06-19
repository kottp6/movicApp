import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import about1 from "../assets/about1.webp";
import about2 from "../assets/about2.webp";
import about3 from "../assets/about3.webp";

const aboutImages = [about1, about2, about3];

export default function About() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="min-h-screen bg-white text-gray-800 px-4 sm:px-6 lg:px-16 py-16 hover:text-red-500 transition">
      {/* Page Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="relative inline-block text-4xl tracking-wider sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-600 via-yellow-500 to-red-500 text-transparent bg-clip-text">
          About Movic
          <span className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-24 h-1 rounded-full bg-red-500 shadow-md animate-pulse"></span>
        </h1>

        <p className="mt-6 text-gray-600 opacity-50 text-base sm:text-lg md:text-xl">
          Delivering professional Firefighting and HVAC solutions with precision,
          innovation, and integrity since 2020.
        </p>
      </motion.div>

      {/* Image + Company Info */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Slider Image */}
        <motion.div
          className="relative overflow-hidden rounded-xl shadow-lg h-[300px] sm:h-[400px] md:h-[500px]"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {aboutImages.map((img, index) => (
            <img
              key={index}
              src={img}
              loading="lazy"
              alt={`About ${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are ?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed text-justify">
            Movic is an Egyptian engineering company founded in 2020, specializing
            in the supply and installation of advanced firefighting and HVAC systems.
            We serve a wide range of sectors including residential, commercial,
            industrial, and government facilities.
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Established in 2020 with strong technical expertise</li>
            <li>End-to-end solutions from design to installation</li>
            <li>Certified & experienced engineers and technicians</li>
            <li>Fast project execution with competitive pricing</li>
            <li>Commitment to safety and international standards</li>
          </ul>
        </motion.div>
      </div>

      {/* Core Values */}
      <div className="mt-20 max-w-6xl mx-auto text-center">
    <motion.h3
        className="text-2xl font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
    >
        Our Core Values
    </motion.h3>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
        {
            title: "Reliability",
            desc: "We build trust through dependable systems and services.",
        },
        {
            title: "Professionalism",
            desc: "Our certified engineers ensure the highest standards.",
        },
        {
            title: "Innovation",
            desc: "We integrate modern tech for better safety and efficiency.",
        },
        ].map((value, i) => (
        <motion.div
            key={i}
            className="bg-red-50 border border-red-100 rounded-xl p-6 shadow-md transition-all duration-300 hover:scale-105 hover:bg-white hover:border-red-300 hover:shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
        >
            <h4 className="text-xl font-semibold text-red-600 mb-2">{value.title}</h4>
            <p className="text-gray-700 text-sm sm:text-base">{value.desc}</p>
        </motion.div>
        ))}
    </div>
    </div>

    </section>
  );
}
