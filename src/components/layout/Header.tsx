import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { scrollY } = useScroll();

  const headerOpacity = useTransform(scrollY, [0, 50], [1, 0.9]);
  const headerY = useTransform(scrollY, [0, 50], [0, -10]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check initial theme preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinks = [
    { name: 'For Agencies', href: '#agencies' },
    { name: 'For Brands', href: '#brands' },
    { name: 'Works', href: '#works' },
    { name: 'Insights', href: '#insights' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      style={{ opacity: headerOpacity, y: headerY }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 backdrop-blur-md bg-white/70 dark:bg-[#0a0a0a]/70 border-b border-[var(--border)]' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-medium tracking-tight">
          R—K
        </a>

        <nav className="hidden md:flex items-center space-x-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full hover:bg-[var(--border)] transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="text-sm font-medium">Menu</button>
        </div>
      </div>
    </motion.header>
  );
}