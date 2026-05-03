import { PORTFOLIO_DATA } from '../../data/portfolio';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 sm:px-12 bg-black text-white relative overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
             Available for new opportunities
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1]">
              Crafting digital<br/>experiences
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-400 font-medium">
              Software & Game Development Student.
            </p>
          </div>

          <p className="max-w-lg text-zinc-400 leading-relaxed">
            I am Ragil Rifqi Fadhil Anwar. A passionate 11th-grade student majoring in Software and Game Development (PPLG) at SMKN 1 Ciomas.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#projects" className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors duration-300">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 bg-zinc-900 text-white font-semibold rounded-full border border-zinc-800 hover:bg-zinc-800 transition-colors duration-300 flex items-center gap-2">
              Let's connect
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

          <div className="flex gap-4 pt-4">
             <a href={PORTFOLIO_DATA.contact.github} className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                <FaGithub className="w-5 h-5" />
             </a>
             <a href={PORTFOLIO_DATA.contact.linkedin} className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                <FaLinkedin className="w-5 h-5" />
             </a>
          </div>
        </div>

        <div className="relative mx-auto md:ml-auto w-72 h-72 sm:w-[400px] sm:h-[400px]">
           {/* Profile Image container with glowing effect */}
           <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 rounded-3xl rotate-3 border border-zinc-800"></div>
           <div className="absolute inset-0 bg-zinc-900 rounded-3xl -rotate-3 overflow-hidden border border-zinc-800 transition-transform duration-500 hover:rotate-0 flex items-center justify-center">
              <img src="/me.jpeg" alt="Ragil Rifqi Fadhil Anwar" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:opacity-100 transition-opacity" />
           </div>
        </div>
      </div>
    </section>
  );
}