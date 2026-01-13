"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const ProjectDetailPage = ({ params }: { params: { slug: string } }) => {
  const project = {
    title: `Project ${params.slug}`,
    description: `This is a detailed description of Project ${params.slug}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    images: [
      'https://placehold.co/800x600',
      'https://placehold.co/800x600',
      'https://placehold.co/800x600',
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  };

  return (
    <div className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center mb-8 text-blue-500 hover:text-blue-400">
          <ArrowLeft className="mr-2" />
          Back to Home
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-12"
        >
          {project.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center mb-12"
        >
          {project.description}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image src={image} alt={`${project.title} screenshot ${index + 1}`} width={800} height={600} className="rounded-lg" />
            </motion.div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Technologies Used</h2>
          <ul className="flex flex-wrap">
            {project.technologies.map((tech, index) => (
              <li key={index} className="bg-gray-800 text-white rounded-full py-2 px-4 mr-2 mb-2">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
