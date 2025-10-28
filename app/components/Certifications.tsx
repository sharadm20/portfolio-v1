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
  return (
    <section id="certifications" className="px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium tracking-wide text-blue-400 mb-2 uppercase">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Professional certifications and credentials that validate my expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              {/* Certificate Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Certificate Details */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-blue-400 font-medium mb-1 text-sm">
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {cert.date}
                  </span>
                  {cert.expiration && (
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Expires {cert.expiration}
                    </span>
                  )}
                </div>
              </div>

              {/* Credential ID if available */}
              {cert.credentialId && (
                <div className="pt-4 border-t border-slate-700/50">
                  <p className="text-xs text-gray-500 mb-1">Credential ID</p>
                  <p className="text-xs font-mono text-gray-400 bg-slate-900/50 px-2 py-1 rounded">
                    {cert.credentialId}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {certifications.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold text-white mb-2">Certifications Coming Soon</h3>
            <p className="text-gray-400 text-sm">Professional certifications will be displayed here.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certifications;