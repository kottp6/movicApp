import { motion } from "framer-motion";
import {
  DollarSign,
  Clock,
  Users,
  Puzzle,
  ShieldCheck,
  Star,
} from "lucide-react";

const reasons = [
  {
    icon: <DollarSign size={36} className="text-red-600" />,
    title: "Competitive Pricing",
    desc: "Affordable solutions without compromising on quality or safety.",
  },
  {
    icon: <Clock size={36} className="text-red-600" />,
    title: "Fast & Professional Execution",
    desc: "We meet deadlines with precision through smart planning.",
  },
  {
    icon: <Users size={36} className="text-red-600" />,
    title: "Experienced Technical Team",
    desc: "Skilled engineers and technicians committed to excellence.",
  },
  {
    icon: <Puzzle size={36} className="text-red-600" />,
    title: "Tailored Solutions",
    desc: "Custom services designed to match each client's unique needs.",
  },
  {
    icon: <ShieldCheck size={36} className="text-red-600" />,
    title: "Compliance with Standards",
    desc: "Strict adherence to safety and international quality regulations.",
  },
  {
    icon: <Star size={36} className="text-red-600" />,
    title: "Reliable & Trusted",
    desc: "We’re a dependable partner with proven project success.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-20 text-gray-800">
      {/* Title */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-red-600 mb-3">
          Why Choose <span className="text-yellow-500">MOVIC?</span>
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-4 rounded-full" />
        <p className="text-lg text-gray-600">
          Your reliable partner for smart, safe, and scalable engineering.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="space-y-10 max-w-5xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row items-start gap-6 bg-gray-50 border border-red-100 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0">{reason.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
