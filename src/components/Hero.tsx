
import React from 'react';
import { Avatar } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-resume-background py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-32 h-32 mb-8">
            <img
              src="profile.png?q=80&w=250&auto=format&fit=crop"
              alt="Profile"
              className="aspect-square h-full w-full"
            />
          </Avatar>
          <h1 className="text-4xl md:text-5xl font-bold text-resume-primary mb-4">
            Muhamad Cucu Nurfalah
          </h1>
          <h2 className="text-xl md:text-2xl text-resume-secondary mb-6">
            Software Engineer
          </h2>
          <p className="max-w-2xl text-resume-text leading-relaxed mb-8">
            Innovative and results-driven Senior Software Engineer with over 10 years of experience designing and building complex systems in fintech, digital banking, and public sector domains.
            Specializes in Golang-based backend architecture, cloud-native services, and DevOps integration. Proven track record in optimizing performance, mentoring engineering teams, and aligning architecture with strategic goals.
            Skilled in leading cross-functional teams and implementing scalable, high-performance systems using modern technologies such as Kubernetes, AWS, and Elastic Stack.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-resume-primary text-white px-6 py-3 rounded-lg hover:bg-resume-secondary transition-colors">
              Contact Me
            </a>
            <a href="#portfolio" className="border-2 border-resume-primary text-resume-primary px-6 py-3 rounded-lg hover:bg-resume-primary hover:text-white transition-colors">
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
