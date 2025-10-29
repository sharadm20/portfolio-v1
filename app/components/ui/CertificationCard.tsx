'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiGlobe } from 'react-icons/fi';
import { Card, CardContent } from './Card';

interface CertificationCardProps {
  name: string;
  issuer: string;
  date: string;
  expiration?: string;
  credentialUrl?: string;
  index?: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  name,
  issuer,
  date,
  expiration,
  credentialUrl,
  index = 0,
}) => {
  return (
    <Card className="h-full">
      <CardContent>
        <div className="flex items-start mb-4">
          <div className="mr-4 mt-1 text-purple-400">
            <FiAward className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white dark:text-[#e6eef6]">{name}</h3>
            <p className="text-blue-300 dark:text-blue-400">{issuer}</p>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-300 mb-4">
          <FiCalendar className="mr-2 text-blue-400" />
          <span>{date}</span>
          {expiration && (
            <span className="ml-4 flex items-center">
              <FiGlobe className="mr-1 text-blue-400" />
              Expires: {expiration}
            </span>
          )}
        </div>
        
        {credentialUrl && (
          <a 
            href={credentialUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            View Credential
            <FiGlobe className="ml-1" />
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default CertificationCard;