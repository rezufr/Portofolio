import { PORTFOLIO_DATA } from '../../data/portfolio';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 sm:px-12 bg-black text-white text-center relative overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-5xl sm:text-7xl font-bold mb-8 tracking-tight">Let's work together.</h2>
        <p className="text-zinc-400 text-xl mb-12 leading-relaxed">
          I'm currently looking for new opportunities, freelance work, and exciting collaborations. Whether you have a project in mind or just want to say hi, my inbox is always open.
        </p>

        <a
          href={`mailto:${PORTFOLIO_DATA.contact.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 hover:scale-105 transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          Say Hello
        </a>
      </div>
    </section>
  );
}