"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import Input from '../ui/Input';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact Me
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex items-center mb-4">
              <Mail className="mr-4" />
              <a href="mailto:jsebastianm1113@gmail.com" className="hover:text-blue-500">
                jsebastianm1113@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="mr-4" />
              <a href="tel:+573165325256" className="hover:text-blue-500">
                +57 3165325256
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            {/*
              This is a placeholder form. You'll need to implement your own form submission logic.
              This could be done using a form service like Formspree or by creating your own API endpoint.
            */}
            <form>
              <Input id="name" name="name" type="text" label="Name" required />
              <Input id="email" name="email" type="email" label="Email" required />
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
