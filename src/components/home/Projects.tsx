"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of the first project.',
    imageUrl: 'https://placehold.co/500x300',
    projectUrl: '/projects/one',
  },
  {
    title: 'Project Two',
    description: 'A brief description of the second project.',
    imageUrl: 'https://placehold.co/500x300',
    projectUrl: '/projects/two',
  },
  {
    title: 'Project Three',
    description: 'A brief description of the third project.',
    imageUrl: 'https://placehold.co/500x300',
    projectUrl: '/projects/three',
  },
  {
    title: 'Project Four',
    description: 'A brief description of the fourth project.',
    imageUrl: 'https://placehold.co/500x300',
    projectUrl: '/projects/four',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
