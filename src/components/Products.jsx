import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/vision.png';
import product5 from '../assets/product6.png';
import product6 from '../assets/product4.png';
import product7 from '../assets/product7.png';
import product8 from '../assets/about1.png';
import product9 from '../assets/product5.png';
import product10 from '../assets/counter.png';
import Navbar from './Navbar';
import Footer from './Footer';
import bgImage from '../assets/counter.png';

const products = [
  { id: 1, name: "CO2 System", image: product1 },
  { id: 2, name: "FM200 System", image: product2 },
  { id: 3, name: "Inergen Gas Systems", image: product3 },
  { id: 4, name: "Maintenance and Refilling", image: product4 },
  { id: 5, name: "Fire Alarm Systems", image: product5 },
  { id: 6, name: "Fire Sprinkler Systems", image: product7 },
  { id: 7, name: "Automatic Fire Search", image: product6 },
  { id: 8, name: "Fire Pump Systems", image: product8 },
  
  { id: 9, name: "HVAC Systems", image: product10 },
  { id: 10, name: "Installation Services", image: product9 },
];

export default function AllProducts() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
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
      {/* Hero Section with Background */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
          <motion.h1
            className="text-white text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            All Products
          </motion.h1>
        </div>
      </section>

      {/* Products Grid */}
      <div className="bg-gradient-to-br from-red-50 to-yellow-50 py-16 px-6 md:px-12">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-red-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Explore Our Full Product Line
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-4 group overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-56 w-full overflow-hidden rounded-md">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h2 className="text-lg font-bold text-center mt-4 text-red-600">
                {product.name}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}