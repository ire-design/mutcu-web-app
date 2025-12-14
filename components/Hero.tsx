'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'Inspire Love, Hope & Godliness',
    subtitle: 'Join MUTCU to grow in faith, fellowship, and service at Murang\'a University of Technology.',
    cta1: { text: 'Join Us', href: '/contact' },
    cta2: { text: 'Watch Live', href: '/resources' },
  },
  {
    title: 'We Are One, We Are MUTCU',
    subtitle: 'A family united in Christ, reaching out to transform lives within and beyond.',
    cta1: { text: 'Explore Ministries', href: '/ministries' },
    cta2: { text: 'Join an Event', href: '/events' },
  },
  {
    title: 'Cultivating Christ-Centeredness',
    subtitle: 'Our vision is to be a model Christian Union impacting society.',
    cta1: { text: 'Our Vision', href: '/about' },
    cta2: { text: 'View Gallery', href: '/gallery' },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[600px] bg-gradient-to-br from-mutcu-navy via-mutcu-navy to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-mutcu-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-mutcu-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`transition-opacity duration-500 ${
                idx === current ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={slide.cta1.href}
                  className="bg-mutcu-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  {slide.cta1.text}
                </Link>
                <Link
                  href={slide.cta2.href}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-mutcu-navy px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  {slide.cta2.text}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === current ? 'bg-mutcu-orange' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}