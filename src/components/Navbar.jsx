import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Services', target: 'services' },
    { name: 'Pricing', target: 'pricing' },
    { name: 'Gallery', target: 'gallery' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/95 backdrop-blur-md py-3 shadow-lg border-b border-white/10' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-black text-primary tracking-tighter">
              TIGER <span className="text-white">FITNESS</span>
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.target}
                to={link.target}
                smooth={true}
                duration={500}
                className="text-white hover:text-primary cursor-pointer transition-colors font-medium text-sm uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:06202730517"
              className="bg-primary text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-yellow-400 transition-all transform hover:scale-105"
            >
              <Phone size={18} /> CALL NOW
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.target}
                  to={link.target}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-lg font-semibold text-white hover:text-primary border-b border-white/5 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:06202730517"
                className="flex items-center justify-center gap-2 bg-primary text-black w-full py-4 rounded-xl font-bold mt-4"
              >
                <Phone size={20} /> CALL NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
