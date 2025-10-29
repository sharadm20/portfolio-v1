'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import CertificationCard from './ui/CertificationCard';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  expiration?: string;
  credentialId?: string;
  credentialUrl?: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="certifications" className="py-20 dark:bg-gradient-to-b dark:from-[#0f1724] dark:to-[#0b1220] light:bg-gray-100 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#e6eef6] flex items-center justify-center">
            <FiAward className="w-5 h-5 mr-3 text-[#a78bfa] flex-shrink-0" />
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
          <p className="text-lg text-[#9aa4b2] max-w-2xl mx-auto mt-4">
            Industry recognized certifications that validate my expertise in fullstack development, 
            cloud technologies, and AI/ML.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              name={cert.name}
              issuer={cert.issuer}
              date={cert.date}
              expiration={cert.expiration}
              credentialUrl={cert.credentialUrl}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;