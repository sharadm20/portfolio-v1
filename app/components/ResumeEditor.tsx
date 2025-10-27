'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LinkedInIntegration from './LinkedInIntegration';

interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  experience: {
    id: number;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    id: number;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
  }[];
  skills: string[];
}

const ResumeEditor: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    experience: [
      {
        id: 1,
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
      }
    ],
    education: [
      {
        id: 1,
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: ''
      }
    ],
    skills: ['']
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setResumeData({
      ...resumeData,
      [name]: value
    });
  };

  const handleExperienceChange = (id: number, field: string, value: string) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    });
  };

  const handleEducationChange = (id: number, field: string, value: string) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        {
          id: Date.now(),
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          description: ''
        }
      ]
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          id: Date.now(),
          institution: '',
          degree: '',
          field: '',
          startDate: '',
          endDate: ''
        }
      ]
    });
  };

  const addSkill = () => {
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, '']
    });
  };

  const updateSkill = (index: number, value: string) => {
    const newSkills = [...resumeData.skills];
    newSkills[index] = value;
    setResumeData({
      ...resumeData,
      skills: newSkills
    });
  };

  const removeSkill = (index: number) => {
    const newSkills = [...resumeData.skills];
    newSkills.splice(index, 1);
    setResumeData({
      ...resumeData,
      skills: newSkills
    });
  };

  const handleLinkedInSync = (profileData: any) => {
    // Update resume data with LinkedIn profile data
    setResumeData({
      ...resumeData,
      name: profileData.name || resumeData.name,
      title: profileData.title || resumeData.title,
      email: profileData.email || resumeData.email,
      location: profileData.location || resumeData.location,
      summary: profileData.summary || resumeData.summary,
      experience: profileData.experience || resumeData.experience,
      education: profileData.education || resumeData.education,
      skills: profileData.skills || resumeData.skills
    });
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900/50 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#e6eef6] flex items-center justify-center">
            <svg className="w-3 h-3 mr-3 text-[#ffd6e0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume Editor
          </h2>
          <div className="w-20 h-1 bg-[#ffd6e0] mx-auto mb-6"></div>
          <p className="text-lg text-[#9aa4b2] max-w-2xl mx-auto">
            Create and customize your resume with our built-in editor
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Editor Section */}
          <div className="lg:col-span-3">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={resumeData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Professional Title</label>
                  <input
                    type="text"
                    name="title"
                    value={resumeData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Senior Frontend Developer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={resumeData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={resumeData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={resumeData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="City, State"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Professional Summary</label>
                <textarea
                  name="summary"
                  value={resumeData.summary}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Write a brief summary of your professional background and skills"
                ></textarea>
              </div>

              {/* Experience Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-lg font-bold text-gray-900 dark:text-white">Work Experience</label>
                  <button
                    type="button"
                    onClick={addExperience}
                    className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
                  >
                    + Add Experience
                  </button>
                </div>

                {resumeData.experience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    className="mb-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                          placeholder="Company"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          value={exp.position}
                          onChange={(e) => handleExperienceChange(exp.id, 'position', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                          placeholder="Position"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <input
                          type="text"
                          value={exp.startDate}
                          onChange={(e) => handleExperienceChange(exp.id, 'startDate', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                          placeholder="Start Date (e.g., Jan 2020)"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          value={exp.endDate}
                          onChange={(e) => handleExperienceChange(exp.id, 'endDate', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                          placeholder="End Date (e.g., Dec 2023)"
                        />
                      </div>
                    </div>

                    <textarea
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      placeholder="Job responsibilities and achievements..."
                    ></textarea>
                  </motion.div>
                ))}
              </div>

              {/* Education Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-lg font-bold text-gray-900 dark:text-white">Education</label>
                  <button
                    type="button"
                    onClick={addEducation}
                    className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
                  >
                    + Add Education
                  </button>
                </div>

                {resumeData.education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    className="mb-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <input
                          type="text"
                          value={edu.institution}
                          onChange={(e) => handleEducationChange(edu.id, 'institution', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                          placeholder="Institution"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                          placeholder="Degree"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <input
                          type="text"
                          value={edu.field}
                          onChange={(e) => handleEducationChange(edu.id, 'field', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                          placeholder="Field of Study"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          value={edu.startDate}
                          onChange={(e) => handleEducationChange(edu.id, 'startDate', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                          placeholder="Start Date"
                        />
                      </div>
                    </div>

                    <input
                      type="text"
                      value={edu.endDate}
                      onChange={(e) => handleEducationChange(edu.id, 'endDate', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm mb-2"
                      placeholder="End Date"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Skills Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-lg font-bold text-gray-900 dark:text-white">Skills</label>
                  <button
                    type="button"
                    onClick={addSkill}
                    className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
                  >
                    + Add Skill
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center mb-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.4 + index * 0.1 }}
                    >
                      <input
                        type="text"
                        value={skill}
                        onChange={(e) => updateSkill(index, e.target.value)}
                        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm mr-2"
                        placeholder="Skill"
                      />
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeSkill(index)}
                          className="text-red-500 hover:text-red-700 text-lg"
                        >
                          ×
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Preview Section */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl h-fit sticky top-24 lg:col-span-1 shadow-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">Resume Preview</h3>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{resumeData.name || 'Your Name'}</h1>
                <p className="text-gray-600 dark:text-gray-300">{resumeData.title || 'Professional Title'}</p>
                <div className="flex justify-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {resumeData.email && <span>{resumeData.email}</span>}
                  {resumeData.phone && <span>• {resumeData.phone}</span>}
                  {resumeData.location && <span>• {resumeData.location}</span>}
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
                <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Professional Summary</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{resumeData.summary || 'Professional summary will appear here...'}</p>
              </div>

              {resumeData.experience.filter(exp => exp.company || exp.position || exp.description).length > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
                  <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Experience</h3>
                  {resumeData.experience
                    .filter(exp => exp.company || exp.position || exp.description)
                    .map((exp, index) => (
                      <div key={index} className="mb-3">
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-900 dark:text-white">{exp.position || 'Position'}</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{exp.startDate} - {exp.endDate || 'Present'}</span>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{exp.company || 'Company'}</div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{exp.description || 'Job responsibilities will appear here...'}</p>
                      </div>
                    ))}
                </div>
              )}

              {resumeData.education.filter(edu => edu.institution || edu.degree).length > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
                  <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Education</h3>
                  {resumeData.education
                    .filter(edu => edu.institution || edu.degree)
                    .map((edu, index) => (
                      <div key={index} className="mb-2">
                        <div className="font-semibold text-gray-900 dark:text-white">{edu.degree || 'Degree'}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{edu.institution || 'Institution'}, {edu.field || 'Field'}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{edu.startDate} - {edu.endDate || 'Present'}</div>
                      </div>
                    ))}
                </div>
              )}

              {resumeData.skills.filter(skill => skill.trim()).length > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
                  <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills
                      .filter(skill => skill.trim())
                      .map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                  </div>
                </div>
              )}
            </div>

            <motion.button
              className="w-full mt-6 px-4 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Download Resume as PDF
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeEditor;