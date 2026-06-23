import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Palvelut', to: '/palvelut' },
  { label: 'Asiantuntijat', to: '/tiimi' },
  { label: 'Hinnasto', to: '/hinnasto' },
  { label: 'Arvostelut', to: '/arvostelut' },
  { label: 'Yhteystiedot', to: '/yhteystiedot' },
];

export function Navigation() {
  const isScrolled = useScrollPosition(100);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-[400ms] ease-in-out ${
          isScrolled
            ? 'bg-[rgba(240,237,232,0.92)] backdrop-blur-xl border-b border-[rgba(8,12,10,0.03)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-6 md:px-12">
          {/* Logo — cinematic large on hero, shrinks on scroll */}
          <Link to="/" className="flex items-center relative z-10">
            <img
              src="/assets/logo.png"
              alt="The Back Room"
              className={`w-auto transition-all duration-500 ease-in-out ${
                isScrolled
                  ? 'h-7 md:h-8'
                  : 'h-[66px] md:h-[110px] -mt-0.5 md:-mt-1'
              }`}
              style={{
                filter: isScrolled ? 'none' : 'brightness(0) invert(1)',
                transition: 'height 500ms ease-in-out, filter 400ms ease-in-out',
              }}
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-jakarta text-[13px] font-semibold uppercase tracking-wider transition-opacity duration-300 hover:opacity-70 ${
                  isScrolled ? 'text-[#080C0A]/70' : 'text-[#F4F4F4]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/yhteystiedot"
              className="font-jakarta text-[13px] font-semibold bg-gold text-[#080C0A] px-5 py-2 rounded transition-all duration-300 hover:bg-[#e8e4dc]"
            >
              Varaa aika
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 transition-colors relative z-[60] ${
              menuOpen ? 'text-[#F4F4F4]' : isScrolled ? 'text-[#080C0A]' : 'text-[#F4F4F4]'
            }`}
            aria-label="Avaa valikko"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay — full screen, solid dark, luxurious spacing */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[55] bg-[#080C0A] flex flex-col"
          >
            <div className="h-[72px] flex items-center justify-between px-6">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <img src="/assets/logo.png" alt="The Back Room" className="h-7 w-auto brightness-[10]" />
              </Link>
              <button onClick={() => setMenuOpen(false)} className="p-2 text-[#F4F4F4]" aria-label="Sulje valikko">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-start justify-center px-10 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="font-marcellus text-[28px] text-[#F4F4F4] hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="px-10 pb-16"
            >
              <Link
                to="/yhteystiedot"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center px-10 py-4 rounded font-jakarta text-[16px] font-semibold bg-gold text-[#080C0A] w-full"
              >
                Varaa hoitoaika
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
