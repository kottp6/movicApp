import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {Link} from "react-router-dom";
export default function ContactsPage() {
  const contactItems = [
    {
      icon: <Phone className="w-6 h-6 text-red-600" />,
      title: "Phone",
      text: "+201055854777",
    },
    {
      icon: <Mail className="w-6 h-6 text-red-600" />,
      title: "Email",
      text: "info@moviceg.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: "Address",
      text: "October, Industrial Zone",
    },
  ];

  return (
    <section id="contacts" className="bg-gradient-to-br from-red-50 via-yellow-50 to-red-100 py-20 px-6 text-gray-800">
      {/* Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        
      </motion.div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{item.icon}</div>
            <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Send Message Button */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link to={'./contact'}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-red-600 text-white text-lg font-medium rounded shadow hover:bg-red-700 transition duration-300"
        >
          Send Message
        </Link>
      </motion.div>
    </section>
  );
}
