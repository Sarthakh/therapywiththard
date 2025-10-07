'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/booking', label: 'Book Session' },
    { href: '/socials', label: 'Connect' },
  ];

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-sm border-b border-terracotta-200 transition-all duration-300 ${
      isScrolled ? 'bg-cream-50/98 shadow-lg' : 'bg-cream-50/95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="group flex items-center space-x-2">
            <span className="text-2xl font-serif font-extrabold text-terracotta-400 group-hover:text-terracotta-300 transition-all duration-300 drop-shadow-[0_0_10px_rgba(217,125,85,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(217,125,85,0.5)] animate-glow">
              Therapy With Tharad
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-base font-medium transition-all duration-300 py-1 group ${
                  pathname === link.href
                    ? 'text-terracotta-400'
                    : 'text-terracotta-300 hover:text-terracotta-400'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{link.label}</span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-terracotta-300 transform origin-left transition-transform duration-300 ${
                  pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-terracotta-400 hover:text-terracotta-300 focus:outline-none transition-colors p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                  pathname === link.href
                    ? 'bg-terracotta-200 text-terracotta-400 font-semibold'
                    : 'text-terracotta-300 hover:bg-cream-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
