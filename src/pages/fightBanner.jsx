import { motion } from "framer-motion";

export default function FightBanner() {
  return (
    <section className="relative bg-gray-100 overflow-hidden">
      {/* Content Container */}
      <div className="mb-20 max-w-7xl mx-auto px-4 py-16 sm:py-24 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-800"
        >
          We Are Ready to{" "}
          <span className="text-red-600">Fight</span> 24 Hours
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="cursor-pointer mt-8 md:mt-0 bg-gray-800 text-white px-6 py-3 font-semibold rounded hover:bg-gray-900 transition"
        >
          CALL US NOW
        </motion.button>
      </div>

      {/* Flame SVG */}
      <div className="absolute bottom-0 left-0 w-full z-10 ">
        <svg
            className="w-full h-28 md:h-32 lg:h-40"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            fill="currentColor"
            className="text-red-500"
            d="M0,192L40,170.7C80,149,160,107,240,117.3C320,128,400,192,480,213.3C560,235,640,213,720,181.3C800,149,880,107,960,85.3C1040,64,1120,64,1200,90.7C1280,117,1360,171,1400,197.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
        </svg>
    </div>
    </section>
  );
}
