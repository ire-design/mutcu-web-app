'use client';

import { useState } from 'react';
import { Music, Heart, Palette, BookOpen, Users, Mic, Home, Church } from 'lucide-react';

const categories = ['All', 'Worship', 'Evangelism', 'Creative', 'Bible Study', 'Events', 'Fellowship'];

const galleryItems = [
  { icon: Music, title: 'Sunday Worship', category: 'Worship', color: 'bg-mutcu-orange' },
  { icon: Heart, title: 'Prison Outreach', category: 'Evangelism', color: 'bg-mutcu-cyan' },
  { icon: Palette, title: 'Creative Night', category: 'Creative', color: 'bg-mutcu-red' },
  { icon: BookOpen, title: 'Bible Study', category: 'Bible Study', color: 'bg-mutcu-navy' },
  { icon: Users, title: 'Fellowship Time', category: 'Fellowship', color: 'bg-mutcu-orange' },
  { icon: Mic, title: 'Praise Fest', category: 'Events', color: 'bg-mutcu-cyan' },
  { icon: Church, title: 'Prayer Kesha', category: 'Events', color: 'bg-mutcu-red' },
  { icon: Home, title: 'Small Groups', category: 'Fellowship', color: 'bg-mutcu-navy' },
  { icon: Music, title: 'Choir Practice', category: 'Worship', color: 'bg-mutcu-orange' },
  { icon: Heart, title: 'Hospital Visit', category: 'Evangelism', color: 'bg-mutcu-cyan' },
  { icon: Palette, title: 'Drama Ministry', category: 'Creative', color: 'bg-mutcu-red' },
  { icon: BookOpen, title: 'Leadership Training', category: 'Bible Study', color: 'bg-mutcu-navy' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mutcu-navy to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Moments from our fellowship, events, and outreach activities
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  activeCategory === category
                    ? 'bg-mutcu-orange text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className={`${item.color} h-64 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-20 h-20 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-mutcu-navy mb-6">Share Your Moments</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Have photos from MUTCU events? We'd love to feature them in our gallery!
          </p>
          <a
            href="/contact"
            className="inline-block bg-mutcu-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Submit Photos
          </a>
        </div>
      </section>
    </div>
  );
}