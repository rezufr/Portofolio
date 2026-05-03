import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is in the viewport (with some offset)
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 sm:px-12 flex justify-between items-center max-w-6xl">
        <a href="#home" className="text-xl font-semibold tracking-tight text-white flex items-center gap-2">
           <img src="/logo.png" alt="Renai Logo" className="w-8 h-8 object-contain" />
          
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    activeSection === link.name.toLowerCase() ? 'text-white' : 'text-zinc-400'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2">
            Hire Me
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Nav */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 transform transition-transform duration-300 md:hidden flex flex-col items-center justify-center ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-zinc-300 hover:text-white transition-colors block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
           <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-12 px-8 py-3 bg-white text-black font-medium rounded-full transition-colors"
            >
              Hire Me
            </a>
        </div>
      </div>
    </header>
  );
}