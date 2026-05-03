import { PORTFOLIO_DATA } from '../../data/portfolio';

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 sm:px-12 bg-black text-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex justify-between items-end">
          <div>
             <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Selected Work</h2>
             <p className="text-zinc-400 text-lg">A collection of projects I've worked on.</p>
          </div>
          <div className="hidden md:block">
            <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">01 — 0{PORTFOLIO_DATA.projects.length}</span>
          </div>
        </div>

        <div className="space-y-24">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <div key={project.id} className="group grid md:grid-cols-12 gap-8 items-center">
               <div className={`md:col-span-7 ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 aspect-[16/10]">
                     <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                  </div>
               </div>

               <div className={`md:col-span-5 flex flex-col justify-center ${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                     <span className="text-zinc-500 font-mono text-sm">0{idx + 1}</span>
                     <div className="h-px bg-zinc-800 flex-grow max-w-[50px]"></div>
                     <span className="text-white font-medium text-sm tracking-wider uppercase bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">{project.category}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold mb-6">{project.title}</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                     {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                     {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-zinc-900 text-zinc-300 text-sm rounded-md border border-zinc-800">{tag}</span>
                     ))}
                  </div>

                  <a
                     href={project.link || "#"}
                     target={project.link ? "_blank" : "_self"}
                     rel={project.link ? "noopener noreferrer" : ""}
                     className="inline-flex items-center gap-2 text-white font-medium hover:gap-4 transition-all w-fit pb-1 border-b border-white/30 hover:border-white"
                  >
                     View Project
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}