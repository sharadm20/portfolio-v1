import React, { useState } from 'react';
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
    <section id="resume" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold">Resume Editor</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Create and customize your resume with our built-in editor
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* LinkedIn Integration and Editor Section */}
          <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Editor Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={resumeData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Professional Title</label>
                <input 
                  type="text" 
                  name="title"
                  value={resumeData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                  placeholder="e.g., Senior Frontend Developer"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={resumeData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={resumeData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Location</label>
                <input 
                  type="text" 
                  name="location"
                  value={resumeData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                  placeholder="City, State"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Professional Summary</label>
                <textarea 
                  name="summary"
                  value={resumeData.summary}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                  placeholder="Write a brief summary of your professional background and skills"
                ></textarea>
              </div>
              
              {/* Experience Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-sm font-medium">Work Experience</label>
                  <button 
                    type="button" 
                    onClick={addExperience}
                    className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    + Add Experience
                  </button>
                </div>
                
                {resumeData.experience.map((exp) => (
                  <div key={exp.id} className="mb-4 p-4 border border-gray-200 dark:border-gray-700 rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <input 
                          type="text" 
                          value={exp.company}
                          onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                          className="w-full px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-sm" 
                          placeholder="Company"
                        />
                      </div>
                      <div>
                        <input 
                          type="text" 
                          value={exp.position}
                          onChange={(e) => handleExperienceChange(exp.id, 'position', e.target.value)}
                          className="w-full px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-sm" 
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
                          className="w-full px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-sm" 
                          placeholder="Start Date (e.g., Jan 2020)"
                        />
                      </div>
                      <div>
                        <input 
                          type="text" 
                          value={exp.endDate}
                          onChange={(e) => handleExperienceChange(exp.id, 'endDate', e.target.value)}
                          className="w-full px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-sm" 
                          placeholder="End Date (e.g., Dec 2023)"
                        />
                      </div>
                    </div>
                    
                    <textarea 
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-sm" 
                      placeholder="Job responsibilities and achievements..."
                    ></textarea>
                  </div>
                ))}
              </div>
              
              {/* Education Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-sm font-medium">Education</label>
                  <button 
                    type="button" 
                    onClick={addEducation}
                    className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    + Add Education
                  </button>
                </div>
                
                {resumeData.education.map((edu) => (
                  <div key={edu.id} className="mb-4 p-4 border border-gray-200 dark:border-gray-700 rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <input 
                          type="text" 
                          value={edu.institution}
                          onChange={(e) => handleEducationChange(edu.id, 'institution', e.target.value)}
                          className="w-full px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-sm" 
                          placeholder="Institution"
                        />
                      </div>
                      <div>
                        <input 
                          type="text" 
                          value={edu.degree}
                          onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
                          className="w-full px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-sm" 
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
                          className="w-full px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-sm" 
                          placeholder="Field of Study"
                        />
                      </div>
                      <div>
                        <input 
                          type="text" 
                          value={edu.startDate}
                          onChange={(e) => handleEducationChange(edu.id, 'startDate', e.target.value)}
                          className="w-full px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-sm" 
                          placeholder="Start Date"
                        />
                      </div>
                    </div>
                    
                    <input 
                      type="text" 
                      value={edu.endDate}
                      onChange={(e) => handleEducationChange(edu.id, 'endDate', e.target.value)}
                      className="w-full px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-sm mb-2" 
                      placeholder="End Date"
                    />
                  </div>
                ))}
              </div>
              
              {/* Skills Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-sm font-medium">Skills</label>
                  <button 
                    type="button" 
                    onClick={addSkill}
                    className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    + Add Skill
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="text"
                        value={skill}
                        onChange={(e) => updateSkill(index, e.target.value)}
                        className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-sm mr-2"
                        placeholder="Skill"
                      />
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeSkill(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* LinkedIn Integration */}
            <div>
              <LinkedInIntegration onProfileSync={handleLinkedInSync} />
            </div>
          </div>
          
          {/* Preview Section */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg h-fit sticky top-24 lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">Resume Preview</h3>
            <div className="bg-white p-6 rounded border border-gray-200 shadow-sm">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold">{resumeData.name || 'Your Name'}</h1>
                <p className="text-gray-600">{resumeData.title || 'Professional Title'}</p>
                <div className="flex justify-center gap-4 mt-2 text-sm">
                  {resumeData.email && <span>{resumeData.email}</span>}
                  {resumeData.phone && <span>• {resumeData.phone}</span>}
                  {resumeData.location && <span>• {resumeData.location}</span>}
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h3 className="font-bold mb-2">Professional Summary</h3>
                <p className="text-sm text-gray-700">{resumeData.summary || 'Professional summary will appear here...'}</p>
              </div>
              
              {resumeData.experience.filter(exp => exp.company || exp.position || exp.description).length > 0 && (
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h3 className="font-bold mb-2">Experience</h3>
                  {resumeData.experience
                    .filter(exp => exp.company || exp.position || exp.description)
                    .map((exp, index) => (
                      <div key={index} className="mb-3">
                        <div className="flex justify-between">
                          <span className="font-semibold">{exp.position || 'Position'}</span>
                          <span className="text-sm text-gray-600">{exp.startDate} - {exp.endDate || 'Present'}</span>
                        </div>
                        <div className="text-sm text-gray-600 mb-1">{exp.company || 'Company'}</div>
                        <p className="text-sm text-gray-700">{exp.description || 'Job responsibilities will appear here...'}</p>
                      </div>
                    ))}
                </div>
              )}
              
              {resumeData.education.filter(edu => edu.institution || edu.degree).length > 0 && (
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h3 className="font-bold mb-2">Education</h3>
                  {resumeData.education
                    .filter(edu => edu.institution || edu.degree)
                    .map((edu, index) => (
                      <div key={index} className="mb-2">
                        <div className="font-semibold">{edu.degree || 'Degree'}</div>
                        <div className="text-sm text-gray-600">{edu.institution || 'Institution'}, {edu.field || 'Field'}</div>
                        <div className="text-sm text-gray-600">{edu.startDate} - {edu.endDate || 'Present'}</div>
                      </div>
                    ))}
                </div>
              )}
              
              {resumeData.skills.filter(skill => skill.trim()).length > 0 && (
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h3 className="font-bold mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills
                      .filter(skill => skill.trim())
                      .map((skill, index) => (
                        <span 
                          key={index} 
                          className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                  </div>
                </div>
              )}
            </div>
            
            <button className="w-full mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              Download Resume as PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeEditor;