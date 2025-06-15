import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import bgImage from "../assets/contact.png"; // Background image
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';


const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Phone number is too short"),
  helpTopic: z.string().min(2, "Please enter a help topic"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});


export default function ContactsPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
  const templateParams = {
    from_first_name: data.firstName,
    from_last_name: data.lastName,
    from_email: data.email,
    phone: data.phone,
    help_topic: data.helpTopic,
    message: data.message,
  };
    emailjs.send(
      'service_zlm0dx3',     // Replace with your EmailJS service ID
      'template_sqyktup',    // Replace with your EmailJS template ID
      templateParams,
      'ODS6ceMEz49216HNp'      // Replace with your EmailJS public key
    )
    .then(() => {
      toast.success('Your message has been sent!');
      reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again.');
    })
  };

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
    <Navbar></Navbar>
    <div className="text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70 flex items-center justify-center">
          <motion.h1
            className="text-white text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-red-50 to-yellow-50">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          We Always Here For You
        </motion.h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
        >
          {/* First Name */}
          <div>
            <label className="block mb-1 font-medium">First Name</label>
            <input
              {...register("firstName")}
              placeholder="Enter your first name"
              className="w-full border p-3 rounded-md focus:outline-red-400"
            />
            {errors.firstName && (
              <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-1 font-medium">Last Name</label>
            <input
              {...register("lastName")}
              placeholder="Enter your last name"
              className="w-full border p-3 rounded-md focus:outline-red-400"
            />
            {errors.lastName && (
              <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              {...register("email")}
              placeholder="Enter your email"
              className="w-full border p-3 rounded-md focus:outline-red-400"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              {...register("phone")}
              placeholder="Enter your phone number"
              className="w-full border p-3 rounded-md focus:outline-red-400"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Help Topic */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">How Can We Help You?</label>
            <input
              {...register("helpTopic")}
              placeholder="e.g. Requesting service, reporting issue..."
              className="w-full border p-3 rounded-md focus:outline-red-400"
            />
            {errors.helpTopic && (
              <p className="text-red-600 text-sm mt-1">{errors.helpTopic.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Comments or Questions</label>
            <textarea
              {...register("message")}
              placeholder="Write your message here..."
              rows={5}
              className="w-full border p-3 rounded-md focus:outline-red-400"
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:col-span-2 bg-red-600 text-white py-3 px-6 rounded-md font-semibold shadow-lg hover:bg-red-700 transition"
          >
            Send Message
          </motion.button>
        </form>
      </section>
    </div>
    <Footer></Footer>
    </>
  );
}
