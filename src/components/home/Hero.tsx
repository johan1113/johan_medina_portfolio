"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import FunGui from "@/components/home/FunGui";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <FunGui />
      </div>

      {/* Content Layer */}
      <div className="container relative z-10 mx-auto w-full h-full flex flex-col md:flex-row items-center justify-between px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 h-full flex flex-col justify-center text-center md:text-left pointer-events-auto"
        >
          <h2 className="text-white text-xl" style={{ letterSpacing: '0.5em' }}>HELLO!</h2>
          <h1 className="text-5xl md:text-7xl font-semibold my-6">
            <span className="font-normal">I&apos;m</span> <span className="font-bold">Johan</span>
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-10">
            A Front-End Engineer dedicated to immersive web app development.
          </p>
          <a href="#projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center"
            >
              Go to Projects <ArrowRight className="ml-2" />
            </motion.button>
          </a>
        </motion.div>

        {/* Spacer to preserve text position on the left */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full" />
      </div>
    </section>
  );
};

export default Hero;
