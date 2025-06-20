import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Award, Users, ShieldCheck, Wrench } from "lucide-react";
import counter from "../assets/counter2.webp";

const stats = [
  {
    icon: <Users size={32} className="text-red-500" />,
    title: "Clients Served",
    count: 1200,
  },
  {
    icon: <Wrench size={32} className="text-red-500" />,
    title: "Projects Completed",
    count: 340,
  },
  {
    icon: <ShieldCheck size={32} className="text-red-500" />,
    title: "Systems Secured",
    count: 650,
  },
  {
    icon: <Award size={32} className="text-red-500" />,
    title: "Years of Excellence",
    count: 5,
  },
];

export default function CounterPage() {
  return (
    <section className="relative min-h-screen px-6 py-24 text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={counter}
        alt="Background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            Company Milestones
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full" />
          
        </motion.div>

        {/* Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-center rounded-xl border-2 border-white border-opacity-20 bg-white bg-opacity-10 p-10 shadow-xl backdrop-blur-md hover:scale-105 transition transform duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-extrabold text-yellow-400 drop-shadow-lg">
                <CountUp end={stat.count} duration={2.5} enableScrollSpy />+
              </h3>
              <p className="mt-2 text-red-900 text-sm tracking-wide">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
