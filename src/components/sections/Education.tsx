import { PORTFOLIO_DATA } from '../../data/portfolio';

export function Education() {
  return (
    <section id="education" className="py-24 px-6 sm:px-12 bg-black text-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Milestones</h2>
          <p className="text-zinc-400 text-lg">My educational background and training.</p>
        </div>

        <div className="max-w-3xl">
          {/* Education Timeline */}
          <div className="space-y-12 border-l border-zinc-800 ml-3 pl-8 relative">
            {PORTFOLIO_DATA.education.map((edu, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-zinc-900 border border-zinc-600 group-hover:border-white group-hover:bg-white transition-colors duration-300"></div>
                <h4 className="text-xl font-bold text-white mb-1">{edu.institution}</h4>
                <p className="text-zinc-500 font-mono text-sm mb-3">{edu.period}</p>
                <p className="text-zinc-400">{edu.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}