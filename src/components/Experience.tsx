
import React from 'react';

const experiences = [
  {
    company: "Tech Solutions Inc.",
    role: "Senior Software Engineer",
    duration: "2020 - Present",
    responsibilities: [
      "Led development of microservices architecture serving 1M+ users",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ]
  },
  {
    company: "Digital Innovations Co.",
    role: "Software Engineer",
    duration: "2018 - 2020",
    responsibilities: [
      "Developed responsive web applications using React and TypeScript",
      "Optimized application performance improving load times by 40%",
      "Collaborated with UX team to implement design systems"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-resume-primary mb-12 text-center">
          Work Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative pl-8 border-l-2 border-resume-accent">
              <div className="absolute w-4 h-4 bg-resume-accent rounded-full -left-[9px] top-2" />
              <h3 className="text-xl font-semibold text-resume-primary mb-2">{exp.role}</h3>
              <p className="text-resume-secondary mb-2">{exp.company}</p>
              <p className="text-resume-muted mb-4">{exp.duration}</p>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-resume-text">• {resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
