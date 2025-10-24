import React from 'react';

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
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold">Certifications</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Professional certifications and credentials
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mr-4">
                  <div className="text-indigo-600 dark:text-indigo-400 text-xl">🎓</div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{cert.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{cert.issuer}</p>
                  <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                    Issued {cert.date} {cert.expiration && `• Expires ${cert.expiration}`}
                  </p>
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline mt-2 inline-block"
                    >
                      Verify Credential
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;