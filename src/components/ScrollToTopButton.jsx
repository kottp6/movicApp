// components/ScrollToTopButton.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react"; // Optional: You can use another icon

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer fixed w-14 h-14 flex items-center justify-center bottom-26 right-6 z-50 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg focus:outline-none"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </AnimatePresence>
  );
}
