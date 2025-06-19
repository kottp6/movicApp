import { motion } from "framer-motion";
import product1 from '../assets/product7.webp';
import product2 from '../assets/product2.webp';
import product3 from '../assets/vision.webp';
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Fire Sprinkler Systems",
    image: product1,
  },
  {
    id: 2,
    name: "FM200 Systems",
    image: product2,
  },
  {
    id: 3,
    name: "Maintenance and Refilling",
    image: product3,
  }
];

export default function Products() {
  return (
    <section id="products" className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-50 px-4 py-16 sm:px-6 lg:px-20 text-gray-800">
      {/* Title */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 bg-clip-text text-transparent mb-4">
          Our Products
        </h1>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600">
          Premium fire safety and HVAC gear
        </p>
      </motion.div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-12">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="relative group overflow-hidden rounded-2xl shadow-xl bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Product Image */}
            <div className="h-[320px] sm:h-[360px] lg:h-[400px] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex flex-col items-center justify-center text-white text-center px-4">
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link to={'./products'} className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300">
          View All Products
        </Link>
      </motion.div>
    </section>
  );
}
