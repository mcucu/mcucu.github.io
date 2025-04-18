
import React from 'react';

const experiences = [
  {
    company: "PT. Multidaya Teknologi Nusantara",
    role: "Software Engineer Manager",
    duration: "2023 - 2025",
    responsibilities: [
      "Architected and led development of Loan Origination System (LOS) using Golang, handling end-to-end flow from scoring to credit agreement.",
      "Migrated backend stack from CouchDB to PostgreSQL, significantly improving performance and maintainability.",
      "Integrated Elastic APM and observability tools to proactively monitor API performance and system health.",
      "Provided architectural oversight, conducted code reviews, and drove OKR alignment across the engineering team.",
      "Mentored senior engineers, facilitated sprint planning, and championed software best practices."
    ]
  },
  {
    company: "PT. Akselerasi Edukasi Internasional",
    role: "Senior Software Engineer",
    duration: "2019 - 2021",
    responsibilities: [
      "Served as Technical Lead on Finadvisor (financial advisory platform), managing sprints, task allocation, and architecture decisions.",
      "Collaborated with product and design teams to align solutions with user and business goals.",
      "Implemented backend services and API gateways with performance, scalability, and fault tolerance in mind."
    ]
  },
  {
    company: "PT Bank BTPN Tbk (Jenius App)",
    role: "Backend Developer – Digital Banking Solutions",
    duration: "2019",
    responsibilities: [
      "Refactored and optimized backend financial services, including Term Deposit and Maxi Saver cron jobs.",
      "Integrated Telkomsel top-up features and migrated push notification infrastructure to Firebase.",
      "Collaborated closely with product and QA teams to ensure high-quality delivery."
    ]
  },
  {
    company: "PT Cartenz Technology Indonesia",
    role: "Senior Backend Developer",
    duration: "2017 - 2019",
    responsibilities: [
      "Developed B2G tax platform Smartgov using Java and PHP; delivered full-stack solutions for dashboards and APIs.",
      "Contributed B2G Online Single Submission using PHP",
      "Contributed to Tanijoy, an agritech platform, by designing farmer activity tracking and RESTful API endpoints.",
    ]
  },
  {
    company: "PT Ebizu Teknologi Indonesia",
    role: "Web Developer",
    duration: "2016 - 2017",
    responsibilities: [
      "Implemented serverless architecture for Manis app and ETL pipelines for data analytics.",
      "Led API and dashboard development for retail systems"
    ]
  },
  {
    company: "PT Inmajin Teknologi Indonesia",
    role: "Web Application Developer",
    duration: "2015 - 2016",
    responsibilities: [
      "Built and maintained StockUnlimited e-commerce platform, Elasticsearch pipelines, and CRM systems."
    ]
  },
  {
    company: "PT Walden Global Services",
    role: "Web Developer",
    duration: "2013 - 2015",
    responsibilities: [
      "Delivered modern web solutions for clients such as Berrybenka, TLoker, and CBN Billing."
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
