"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hello, I'm [Your Name]
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            A Front-End Engineer dedicated to immersive web app development.
          </p>
          <a href="#projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center"
            >
              Go to Projects <ArrowRight className="ml-2" />
            </motion.button>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        >
          <Image
            src="https://placehold.co/400x400"
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
