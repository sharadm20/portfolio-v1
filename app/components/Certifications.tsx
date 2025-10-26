'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional credentials and achievements
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
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white text-2xl">🎓</span>
                  </motion.div>

                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors leading-tight">
                    {cert.name}
                  </h3>

                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="text-sm font-medium">Issued by {cert.issuer}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                      <span className="mr-2">📅</span>
                      <span>Issued {cert.date}</span>
                    </div>
                    {cert.expiration && (
                      <div className="flex items-center text-sm text-orange-600 dark:text-orange-400">
                        <span className="mr-2">⏰</span>
                        <span>Expires {cert.expiration}</span>
                      </div>
                    )}
                  </div>

                  {cert.credentialUrl && (
                    <motion.a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg group/link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="mr-2">🔗</span>
                      <span>Verify Credential</span>
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  )}
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="w-20 h-20 border-2 border-green-500 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;