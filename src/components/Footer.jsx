import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo2.webp";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
         {/* <img src={logo} alt="Logo" className="mt-0 w-16 h-16" /> */}
         <h2 className="text-2xl font-bold text-red-500 mb-4">Movic</h2>
          <p className="text-gray-300">
            Movic is an Egyptian engineering company
            founded in 2020, specialized in the supply and
            installation of high-quality firefighting systems
            and HVAC (Heating, Ventilation & Air
            Conditioning) solutions.    
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-red-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-500 transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-red-500 transition">Services</Link></li>
            <li><Link to="/products" className="hover:text-red-500 transition">Products</Link></li>
            <li><Link to="/partners" className="hover:text-red-500 transition">Partners</Link></li>
            <li><Link to="/contact" className="hover:text-red-500 transition">Contact</Link></li>
        </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-red-500"/> <span className="hover:text-red-500 transition">+201055854777</span> 
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-red-500"/> <span className="hover:text-red-500 transition">info@moviceg.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-500"/><span className="hover:text-red-500 transition">October, Industrial Zone.</span> 
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link to={""} className="text-gray-300 hover:text-red-500 transition">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link to={""} className="text-gray-300 hover:text-red-500 transition">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link to={""} className="text-gray-300 hover:text-red-500 transition">
              <Instagram className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} MOVIC
      </div>
    </footer>
  );
}
