import { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolio';

export function Certificates() {
  const [showAll, setShowAll] = useState(false);

  const displayedCerts = showAll
    ? PORTFOLIO_DATA.certifications
    : PORTFOLIO_DATA.certifications.slice(0, 2);

  return (
    <section id="certificates" className="py-24 px-6 sm:px-12 bg-black text-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Recognition</h2>
          <p className="text-zinc-400 text-lg">Certifications and achievements.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {displayedCerts.map((cert, index) => (
            <div key={index} className="group bg-zinc-900/40 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="aspect-[16/10] overflow-hidden border-b border-zinc-800/80 relative bg-zinc-950">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 pointer-events-none"></div>
                {/* Display actual certificate image */}
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 right-4 z-20">
                     <span className="bg-zinc-900/90 text-white px-3 py-1 rounded-md text-xs font-bold tracking-widest uppercase shadow-lg border border-zinc-700/50 backdrop-blur-md flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        PDF
                     </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-800 p-2 rounded-lg text-zinc-400 mt-1 shrink-0">
                    <a href={cert.pdf} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer" title="View Full PDF">
                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                       </svg>
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1 leading-tight group-hover:text-zinc-300 transition-colors">{cert.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {PORTFOLIO_DATA.certifications.length > 2 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-zinc-900 text-white font-medium rounded-full border border-zinc-800 hover:bg-white hover:text-black transition-colors duration-300"
            >
              {showAll ? 'Show Less' : 'Load More Certificates'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}