
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-resume-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-resume-primary mb-12 text-center">
          Get In Touch
        </h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="mailto:mhd.cucu@gmail.com"
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <Mail className="w-6 h-6 text-resume-primary" />
                <span className="text-resume-text">mhd.cucu@gmail.com</span>
              </a>
              <a
                href="tel:+6281214880585"
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <Phone className="w-6 h-6 text-resume-primary" />
                <span className="text-resume-text">+6281214***585</span>
              </a>
              <a
                href="https://github.com/mcucu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <Github className="w-6 h-6 text-resume-primary" />
                <span className="text-resume-text">GitHub Profile</span>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-cucu-09b68a63/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <Linkedin className="w-6 h-6 text-resume-primary" />
                <span className="text-resume-text">LinkedIn Profile</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
