import React from 'react';

interface Skill {
  name: string;
  level: number; // 0-100 percentage
  category: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold mb-12">My Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">
                  {getSkillIcon(skill.category)}
                </div>
                <h3 className="font-medium text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-indigo-600 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Function to return appropriate emoji based on category
const getSkillIcon = (category: string) => {
  switch(category.toLowerCase()) {
    case 'frontend':
      return '💻';
    case 'backend':
      return '⚙️';
    case 'database':
      return '📊';
    case 'devops':
      return '🔄';
    case 'languages':
      return '🌐';
    case 'tools':
      return '🛠️';
    default:
      return '⚡';
  }
};

export default Skills;