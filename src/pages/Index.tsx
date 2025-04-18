
import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <main className="bg-resume-background">
      <Hero />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Index;
