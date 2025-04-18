
import React from 'react';

const skillsCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Golang (Primary)", "Node.js", "PHP", "Java", "Python", "GraphQL"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "CouchDB"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "AWS", "Kubernetes", "CI/CD", "Firebase"]
  },
  {
    title: "Observability",
    skills: ["ELK Stack", "Elastic APM", "Jaeger", "Grafana", "Performance Profiling"]
  },
  {
    title: "Architecture",
    skills: ["Microservices", "Event-driven", "REST APIs", "Serverless"]
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Communication", "Problem Solving", "Team Collaboration", "Technical Decision Making", "Agile Methodology", "Architecture Reviews"]
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
