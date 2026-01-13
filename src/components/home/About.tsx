"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <Image
            src="https://placehold.co/400x400"
            alt="About Me"
            width={400}
            height={400}
            className="rounded-full mx-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            placerat, quam a suscipit fermentum, magna ipsum lacinia diam,
            sit amet maximus lectus quam et lorem.
          </p>
          <p className="text-lg mb-8">
            Nulla facilisi. Donec non magna vel nisi scelerisque laoreet.
            Fusce in leo sit amet felis aliquam dapibus.
          </p>
          <a
            href="/dummy-cv.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center"
          >
            <Download className="mr-2" /> Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
