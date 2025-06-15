import { motion } from "framer-motion";
import visionImage from "../assets/vision.png";
import missionImage from "../assets/mission.png";

export default function VisionMission() {
  return (
    <section className="bg-gradient-to-br from-red-50 via-yellow-50 to-red-100 py-20 px-4 sm:px-6 lg:px-20 text-gray-800">
      {/* Title */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 bg-clip-text text-transparent mb-4">
          Vision & Mission
        </h1>
        <motion.div
          className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ originX: 0 }}
        />
        <p className="text-lg text-gray-700 sm:text-xl">
          Guided by purpose. Driven by innovation. Focused on impact.
        </p>
      </motion.div>

      {/* Vision */}
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* <img
          src={visionImage}
          alt="Vision"
          className="w-full lg:w-1/2 rounded-2xl shadow-lg object-cover transition-transform duration-500 hover:scale-105"
        /> */}
        <div className="relative w-full lg:w-full overflow-hidden rounded-2xl shadow-lg group">
            {/* Image */}
            <img
                src={visionImage}
                alt="Vision"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold">Our Vision</h3>
            </div>
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">Our Vision</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            To become the most trusted engineering solutions provider, pioneering safe,
            sustainable, and smart technologies that shape a better future.
          </p>
        </div>
      </motion.div>

      {/* Mission */}
      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            To deliver top-quality engineering services and products through innovation,
            expert teams, and a commitment to safety and client satisfaction.
          </p>
        </div>
        {/* <img
          src={missionImage}
          alt="Mission"
          className="w-full lg:w-1/2 rounded-2xl shadow-lg object-cover transition-transform duration-500 hover:scale-105"
        /> */}
        <div className="relative w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-lg group">
            {/* Image */}
            <img
                src={missionImage}
                alt="Vision"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold">Our Vision</h3>
            </div>
        </div>
      </motion.div>
    </section>
  );
}
