import React from 'react'
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ahmed H.",
    position: "Project Manager",
    message: "Excellent service! The team delivered on time and exceeded expectations.",
  },
  {
    id: 2,
    name: "Sara M.",
    position: "CEO, FireSecure Ltd.",
    message: "We saw an immediate improvement in customer satisfaction. Highly recommended!",
  },
  {
    id: 3,
    name: "Youssef A.",
    position: "Operations Lead",
    message: "Very professional, clean UI, and responsive support. Great experience overall.",
  },
];
export default function Clients() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 to-red-50 px-6 py-16 text-gray-800">
      {/* Section Title */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 bg-clip-text text-transparent mb-4">
          What Our Clients Say
        </h1>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
        
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <FaQuoteLeft className="text-red-500 text-3xl mb-4" />
            <p className="text-gray-700 mb-6 italic">"{item.message}"</p>
            <h4 className="text-lg font-semibold text-red-600">{item.name}</h4>
            <p className="text-sm text-gray-500">{item.position}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
