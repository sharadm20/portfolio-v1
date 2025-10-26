'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { authenticateWithLinkedIn, fetchLinkedInProfile, syncProfileToResume } from '../services/linkedinService';

interface LinkedInIntegrationProps {
  onProfileSync?: (profileData: any) => void;
}

const LinkedInIntegration: React.FC<LinkedInIntegrationProps> = ({ onProfileSync }) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Check if we have a token in localStorage (from previous auth)
  useEffect(() => {
    const token = localStorage.getItem('linkedin_access_token');
    if (token) {
      setIsConnected(true);
      fetchProfile(token);
    }
  }, []);

  const handleConnect = async () => {
    try {
      setLoading(true);
      setError(null);

      // Authenticate with LinkedIn
      const token = await authenticateWithLinkedIn();

      // Save token to localStorage
      localStorage.setItem('linkedin_access_token', token);

      // Set as connected and fetch profile
      setIsConnected(true);
      await fetchProfile(token);
    } catch (err) {
      setError('Failed to connect to LinkedIn');
      console.error('LinkedIn connection error:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchProfile = async (token: string) => {
    try {
      setLoading(true);
      setError(null);

      const profileData = await fetchLinkedInProfile(token);

      if (profileData) {
        setProfile(profileData);
      } else {
        setError('Failed to fetch LinkedIn profile');
      }
    } catch (err) {
      setError('Error fetching profile');
      console.error('Error fetching LinkedIn profile:', err);
    } finally {
      setLoading(false);
    }
  };

  const syncToResume = () => {
    if (profile && onProfileSync) {
      const resumeData = syncProfileToResume(profile);
      onProfileSync(resumeData);
    }
  };

  const handleDisconnect = () => {
    localStorage.removeItem('linkedin_access_token');
    setIsConnected(false);
    setProfile(null);
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold flex items-center">
          <span className="mr-2">💼</span> LinkedIn Integration
        </h3>
        {isConnected ? (
          <motion.button
            onClick={handleDisconnect}
            className="text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Disconnect
          </motion.button>
        ) : null}
      </div>

      {error && (
        <motion.div
          className="mb-4 p-3 bg-red-100 text-red-700 rounded-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.div>
      )}

      {!isConnected ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Connect your LinkedIn account to import your profile information and keep your resume up to date.
          </p>
          <motion.button
            onClick={handleConnect}
            disabled={loading}
            className={`flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${
              loading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {loading ? (
              <>
                <motion.svg
                  className="-ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </motion.svg>
                Connecting...
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Connect to LinkedIn
              </>
            )}
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {profile ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <motion.img
                  src={profile.profilePicture}
                  alt={profile.firstName}
                  className="w-12 h-12 rounded-full mr-3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                />
                <div>
                  <h4 className="font-bold">{profile.firstName} {profile.lastName}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{profile.headline}</p>
                </div>
              </div>

              <motion.div
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h5 className="font-medium mb-2">Skills</h5>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.slice(0, 5).map((skill: string, index: number) => (
                    <motion.span
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                  {profile.skills.length > 5 && (
                    <motion.span
                      className="text-xs text-gray-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      +{profile.skills.length - 5} more
                    </motion.span>
                  )}
                </div>
              </motion.div>

              <motion.button
                onClick={syncToResume}
                className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.2 }}
              >
                Sync to Resume
              </motion.button>
            </motion.div>
          ) : (
            <motion.p
              className="text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Fetching profile...
            </motion.p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default LinkedInIntegration;