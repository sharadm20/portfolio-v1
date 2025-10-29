'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon, CalendarIcon, CheckBadgeIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  logo?: string;
  description?: string;
}

const certifications: Certification[] = [
  {
    id: '1',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    issueDate: 'Jan 2024',
    expiryDate: 'Jan 2027',
    credentialId: 'ABC123XYZ',
    credentialUrl: 'https://aws.amazon.com/verification',
    skills: ['AWS', 'Cloud Architecture', 'DevOps'],
    description: 'Validates expertise in designing distributed systems on AWS',
  },
  {
    id: '2',
    title: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    issueDate: 'Dec 2023',
    credentialUrl: 'https://scrum.org/verify',
    skills: ['Agile', 'Scrum', 'Project Management'],
    description: 'Demonstrates fundamental understanding of Scrum framework',
  },
  {
    id: '3',
    title: 'React Developer Certification',
    issuer: 'Meta',
    issueDate: 'Nov 2023',
    credentialUrl: 'https://coursera.org/verify',
    skills: ['React', 'JavaScript', 'Frontend Development'],
    description: 'Advanced React patterns and best practices',
  },
  {
    id: '4',
    title: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    issueDate: 'Oct 2023',
    expiryDate: 'Oct 2025',
    credentialUrl: 'https://google.com/verify',
    skills: ['GCP', 'Cloud Computing', 'Kubernetes'],
    description: 'Professional-level cloud engineering expertise',
  },
  // Add more certifications
];

interface CertificationCardProps {
  cert: Certification;
  index: number;
}

function CertificationCard({ cert, index }: CertificationCardProps) {
  const isExpiring = cert.expiryDate && new Date(cert.expiryDate) < new Date(Date.now() + 90 * 24 * 60 * 60 * 1000);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="card p-6 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          {/* Logo/Icon */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <AcademicCapIcon className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Title & Issuer */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors line-clamp-2">
              {cert.title}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
          </div>

          {/* Verified Badge */}
          {cert.credentialUrl && (
            <div className="flex-shrink-0">
              <CheckBadgeIcon className="w-6 h-6 text-primary" />
            </div>
          )}
        </div>

        {/* Description */}
        {cert.description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {cert.description}
          </p>
        )}

        {/* Date Information */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" />
            <span>Issued: {cert.issueDate}</span>
          </div>
          {cert.expiryDate && (
            <div className={`flex items-center gap-1 ${isExpiring ? 'text-yellow-500' : ''}`}>
              <span>Expires: {cert.expiryDate}</span>
            </div>
          )}
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Footer - Credential Info & Link */}
        <div className="flex items-center justify-between pt-4 border-t">
          {cert.credentialId && (
            <div className="text-xs text-muted-foreground">
              <span className="font-medium">ID:</span> {cert.credentialId}
            </div>
          )}
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Verify
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  // Group certifications by category if needed
  const activeCerts = certifications.filter(cert => {
    if (!cert.expiryDate) return true;
    return new Date(cert.expiryDate) > new Date();
  });

  const expiredCerts = certifications.filter(cert => {
    if (!cert.expiryDate) return false;
    return new Date(cert.expiryDate) <= new Date();
  });

  return (
    <section id="certifications" className="section-container bg-muted/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-center">Certifications & Credentials</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional certifications and credentials that validate my expertise 
          in various technologies and methodologies.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center p-4 rounded-lg bg-background"
          >
            <div className="text-3xl font-bold text-primary mb-1">
              {certifications.length}
            </div>
            <div className="text-sm text-muted-foreground">Total Certifications</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-center p-4 rounded-lg bg-background"
          >
            <div className="text-3xl font-bold text-green-500 mb-1">
              {activeCerts.length}
            </div>
            <div className="text-sm text-muted-foreground">Active</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center p-4 rounded-lg bg-background"
          >
            <div className="text-3xl font-bold text-secondary mb-1">
              {new Set(certifications.flatMap(c => c.skills)).size}
            </div>
            <div className="text-sm text-muted-foreground">Skills Covered</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center p-4 rounded-lg bg-background"
          >
            <div className="text-3xl font-bold text-accent mb-1">
              {new Set(certifications.map(c => c.issuer)).size}
            </div>
            <div className="text-sm text-muted-foreground">Providers</div>
          </motion.div>
        </div>

        {/* Active Certifications Grid */}
        {activeCerts.length > 0 && (
          <>
            <h3 className="text-2xl font-bold mb-6">Active Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {activeCerts.map((cert, index) => (
                <CertificationCard key={cert.id} cert={cert} index={index} />
              ))}
            </div>
          </>
        )}

        {/* Expired Certifications (Optional) */}
        {expiredCerts.length > 0 && (
          <>
            <h3 className="text-2xl font-bold mb-6 text-muted-foreground">
              Previous Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6 opacity-60">
              {expiredCerts.map((cert, index) => (
                <CertificationCard 
                  key={cert.id} 
                  cert={cert} 
                  index={index + activeCerts.length} 
                />
              ))}
            </div>
          </>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 text-primary">
            <CheckBadgeIcon className="w-5 h-5" />
            <span className="font-medium">All credentials are verified and up-to-date</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}