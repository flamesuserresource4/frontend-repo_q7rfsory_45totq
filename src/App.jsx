import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Alyssya Rhamadina</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#experience" className="hover:text-slate-900">Experience</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a
            href="#contact"
            className="md:hidden inline-flex items-center justify-center rounded-full bg-[#9bb8ff] text-slate-900 font-medium px-4 py-2"
          >
            Connect
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>

      <footer className="py-10 text-center text-sm text-slate-500 bg-[#f9fafb] border-t border-slate-200">
        © {new Date().getFullYear()} Alyssya Rhamadina. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
