import { motion } from "framer-motion";
import {
  Wrench,
  ShieldCheck,
  ThermometerSun,
  Clock4,
  Users,
  Lightbulb
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Wrench size={32} className="text-red-600" />,
      title: "Fire Fighting Systems",
      desc: "Design, supply, and installation of fire suppression systems with global safety standards.",
    },
    {
      icon: <ThermometerSun size={32} className="text-red-600" />,
      title: "HVAC Solutions",
      desc: "Complete heating, ventilation, and air conditioning solutions for all project scales.",
    },
    {
      icon: <ShieldCheck size={32} className="text-red-600" />,
      title: "Maintenance & Support",
      desc: "24/7 maintenance to ensure your systems operate at peak efficiency and safety.",
    },
    {
      icon: <Clock4 size={32} className="text-red-600" />,
      title: "Rapid Execution",
      desc: "Timely project completion using experienced staff and smart management techniques.",
    },
    {
      icon: <Users size={32} className="text-red-600" />,
      title: "Experienced Team",
      desc: "Certified engineers and technicians committed to precision and quality.",
    },
    {
      icon: <Lightbulb size={32} className="text-red-600" />,
      title: "Innovative Approach",
      desc: "We use the latest technologies to build energy-efficient and safe systems.",
    },
  ];

  return (
    <section id="services" className="min-h-screen bg-gray-50 text-gray-800 px-4 sm:px-6 lg:px-20 py-16">
      <motion.div
        className="text-center max-w-4xl mx-auto mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
    >
  <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 bg-clip-text text-transparent">
    Discover Our Expert Services
  </h1>
  <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
  <p className="text-lg text-gray-700 sm:text-xl">
    Delivering reliable, innovative, and high-quality engineering solutions tailored to your needs.
  </p>
</motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 flex items-center justify-center bg-red-100 rounded-full mb-4 mx-auto">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm text-center">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
