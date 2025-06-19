import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import serviceBg from "../assets/services1.webp"; // replace with your image
import servicesImg from "../assets/services2.webp"; // replace with your image
import Navbar from "./Navbar";
import Footer from "./Footer";

const servicesData = [
  "Supply & Installation of Firefighting Systems (Pumps, Sprinklers, Cabinets, etc.)",
  "Supply & Installation of HVAC Systems (Split Units, VRF, Ducted Systems, etc.)",
  "Testing, Commissioning & Maintenance",
  "Technical Support & Consultation"
];

export default function Services() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
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
        <div>
            <Navbar></Navbar>
            <div className="text-gray-800">
            {/* Section 1: Hero */}
            <div
                className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${serviceBg})` }}
            >
                <div className="absolute inset-0 bg-black opacity-60" />
                <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-white text-4xl md:text-5xl font-bold text-center px-4"
                >
                Our Services
                </motion.h1>
            </div>

            {/* Section 2: Image and Description */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                <motion.img
                src={servicesImg}
                alt="Our Services"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full rounded shadow-lg"
                />
                <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-600">
                    Engineering Solutions You Can Trust
                </h2>
                <p className="text-gray-700 text-lg">
                    Movic provides comprehensive engineering services from design to maintenance,
                    ensuring safety, efficiency, and customer satisfaction. Our team delivers cutting-edge
                    firefighting and HVAC systems tailored to meet your project's demands.
                </p>
                </motion.div>
            </div>

            {/* Section 3: Services List */}
            <div className="bg-gray-100 py-16 px-6">
                <div className="max-w-6xl mx-auto text-center mb-12">
                <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl font-bold text-gray-900"
                >
                    What We Offer
                </motion.h3>
                <p className="mt-2 text-gray-600 text-lg">
                    We deliver high-performance systems and technical expertise.
                </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {servicesData.map((service, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white shadow-md p-6 rounded-md hover:shadow-lg transition"
                    >
                    <h4 className="text-lg font-semibold text-red-600 mb-2">• {service.split(" ")[0]}</h4>
                    <p className="text-gray-700">{service}</p>
                    </motion.div>
                ))}
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
      )}
    </>
  );
}
