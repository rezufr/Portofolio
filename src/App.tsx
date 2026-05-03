import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Certificates } from './components/sections/Certificates';
import { Contact } from './components/sections/Contact';

function App() {
  // Ensure global body classes are set
  useEffect(() => {
    document.body.className = 'bg-black text-white antialiased selection:bg-white selection:text-black font-sans';
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;