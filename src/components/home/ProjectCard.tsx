"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <Link href={projectUrl}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
      >
        <Image src={imageUrl} alt={title} width={500} height={300} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
