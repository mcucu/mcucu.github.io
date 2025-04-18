
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Estuari - Loan Origination System",
    description: "Built scalable credit application pipeline integrated with scoring, SLIK, survey, and approval logic.",
    link: "https://estuari.efishery.com/",
    tech: ["Next.js", "Golang", "PostgreSQL", "RabbitMQ", "Jaeger"]
  },
  {
    title: "Finadvisor & Halofina (Technical Lead)",
    description: "Led full engineering effort and sprint lifecycle for a modern financial advisor platform.",
    link: "#",
    tech: ["Vue js", "Quasar", "PHP", "MySQL"]
  },
  {
    title: "Smartgov & Tanijoy",
    description: "Developed APIs and systems for government taxation and agriculture financing.",
    link: "#",
    tech: ["PHP", "Lumen", "MySQL"]
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
