
import React from 'react';

const skillsCategories = [
  {
    title: "Technical Skills",
    skills: ["React", "TypeScript", "Node.js", "AWS", "Docker", "GraphQL"]
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Communication", "Problem Solving", "Team Collaboration", "Agile Methodology"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "VS Code", "Jira", "Figma", "Jenkins", "MongoDB"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-resume-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-resume-primary mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillsCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-resume-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-resume-background text-resume-secondary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
