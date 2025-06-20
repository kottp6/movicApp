import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import logo from "../assets/logo2.webp";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center h-16 px-0 md:px-6 md:max-w-7xl md:mx-auto">
        {/* Logo - no margin/padding */}
        <div className="pl-4">
          <img src={logo} alt="MovicLogo" className="h-14 w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 pr-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-white hover:text-red-500 transition duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden pr-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="md:hidden absolute top-16 left-0 w-full bg-slate-800 shadow-lg px-4 py-4 space-y-2 z-40"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block text-white hover:text-red-500 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
