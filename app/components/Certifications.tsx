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
    <section className="px-8 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12 items-center">
        <div className="bg-gradient-to-br from-orange-400 to-teal-400 rounded-lg overflow-hidden">
          <div className="h-96 flex items-center justify-center p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="w-32 h-32 bg-teal-300 rounded-full"></div>
              <div className="w-32 h-32 bg-teal-400 rounded-full"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full mb-8"></div>
          <h2 className="text-5xl font-serif mb-4">ART<br/>UNBOUND<br/>ODYSSEY</h2>
          <p className="text-xs tracking-[0.3em] text-gray-400">PERSONAL PROJECT</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;