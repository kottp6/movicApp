import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/about1.webp";
import aboutImg from "../assets/about2.webp";
import Navbar from "./Navbar";
import Footer from "./Footer";

const features = [
  { title: "Certified Engineers", desc: "Our team consists of highly qualified engineers." },
  { title: "Custom Solutions", desc: "We tailor every project to our client’s needs." },
  { title: "Fast Installation", desc: "Quick and safe deployment for all systems." },
];

export default function About() {
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
      <Navbar />
      <div className="text-gray-800">
        {/* Section 1: Hero */}
        <section
          className="relative h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-4xl md:text-6xl font-bold"
            >
              About Movic
            </motion.h1>
          </div>
        </section>

        {/* Section 2: Image + Text */}
        <section className="py-16 px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
          <motion.img
            src={aboutImg}
            alt="About Movic"
            loading="lazy"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="md:w-1/2 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-red-600">Who We Are</h2>
            <p className="text-gray-600">
              Movic is an Egyptian engineering company founded in 2020, specialized in the supply and installation
              of high-quality firefighting systems and HVAC solutions. We are committed to delivering reliable,
              innovative, and environmentally-friendly engineering services.
            </p>
            <p className="text-gray-600">
              Our engineers and technicians are industry veterans, focused on safety and client satisfaction.
              We have proudly delivered successful projects across Egypt.
            </p>
          </motion.div>
        </section>

        {/* Section 3: Features */}
        <section className="bg-gray-100 py-16 px-6 md:px-12">
          <motion.h3
            className="text-3xl font-bold text-center mb-10 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Movic?
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <h4 className="text-xl font-semibold text-red-600 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
