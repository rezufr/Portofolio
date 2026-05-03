export function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 bg-black text-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Behind the code</h2>
          <p className="text-zinc-400 text-lg">A glimpse into my journey and passion.</p>
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-16 items-start">
          <div className="text-zinc-300 text-lg leading-relaxed space-y-6">
            <p>
              I am a student at SMKN 1 Ciomas, currently in class XI PPLG 2. I have a strong foundation in both web development and game design. I actively participate in bootcamps and training programs to upskill in Front-End/Back-End development and Unity game creation.
            </p>
            <p>
              Whether coding a new web app or designing game mechanics, I love bringing creative ideas to life. I blend logic and creativity to build seamless, interactive digital experiences that engage users and solve real-world problems.
            </p>

            <div className="pt-8">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 text-white font-medium rounded-full hover:bg-white hover:text-black transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
             <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
                <h3 className="text-4xl font-bold text-white mb-2">2+</h3>
                <p className="text-zinc-400 text-sm font-medium uppercase tracking-wider">Years of Coding</p>
             </div>
             <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
                <h3 className="text-4xl font-bold text-white mb-2">10+</h3>
                <p className="text-zinc-400 text-sm font-medium uppercase tracking-wider">Projects Built</p>
             </div>
             <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl col-span-2 md:col-span-1">
                <h3 className="text-4xl font-bold text-white mb-2">∞</h3>
                <p className="text-zinc-400 text-sm font-medium uppercase tracking-wider">Lines of Code</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}