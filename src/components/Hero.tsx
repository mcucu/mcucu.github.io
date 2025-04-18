
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
              // className="aspect-square h-full w-full"
              className="aspect-square"
            />
          </Avatar>
          <h1 className="text-4xl md:text-5xl font-bold text-resume-primary mb-4">
            John Doe
          </h1>
          <h2 className="text-xl md:text-2xl text-resume-secondary mb-6">
            Senior Software Engineer
          </h2>
          <p className="max-w-2xl text-resume-text leading-relaxed mb-8">
            Passionate software engineer with 5+ years of experience in building scalable web applications. 
            Specialized in React, TypeScript, and cloud architecture. Committed to creating efficient and 
            user-friendly solutions.
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
