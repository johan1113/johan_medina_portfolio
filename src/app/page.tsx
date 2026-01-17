"use client";

import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import FunGui from "@/components/home/FunGui";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <section id="fun-gui" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-4"
          >
            Generative Art GUI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-center mb-12"
          >
            Play with the controls to see how the generative art changes.
          </motion.p>
          <FunGui />
        </div>
      </section>
      <About />
      <Contact />
    </div>
  );
}
