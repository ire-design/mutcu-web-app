'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/ministries', label: 'Ministries' },
    { href: '/events', label: 'Events' },
    { href: '/resources', label: 'Resources' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <div className="absolute top-0 left-0 w-6 h-6 bg-mutcu-orange rounded-tl-full"></div>
              <div className="absolute top-0 right-0 w-6 h-6 bg-mutcu-cyan rounded-tr-full"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 bg-mutcu-navy rounded-bl-full"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-mutcu-red rounded-br-full"></div>
            </div>
            <span className="text-2xl font-bold text-mutcu-navy">MUTCU</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-mutcu-orange transition-colors font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-2 pb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 px-4 text-gray-700 hover:bg-mutcu-orange hover:text-white rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}