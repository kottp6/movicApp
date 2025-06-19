import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-9xl font-extrabold tracking-widest"
      >
        404
      </motion.h1>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-red-500 px-4 text-sm rounded rotate-12 absolute mt-[-70px]"
      >
        Page Not Found
      </motion.div>

      <p className="mt-10 text-lg text-center text-gray-600 dark:text-gray-400">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
