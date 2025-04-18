
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Built a full-stack e-commerce platform using React, Node.js, and MongoDB",
    link: "#",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Task Management App",
    description: "Developed a real-time task management application with collaborative features",
    link: "#",
    tech: ["TypeScript", "Socket.io", "Redis"]
  },
  {
    title: "Analytics Dashboard",
    description: "Created a responsive analytics dashboard with data visualization",
    link: "#",
    tech: ["React", "D3.js", "AWS"]
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-resume-primary mb-12 text-center">
          Portfolio Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-resume-primary">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-resume-background text-resume-muted text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
