import Link from 'next/link';
import { Music, Heart, Palette, BookOpen } from 'lucide-react';

const galleryItems = [
  {
    icon: Music,
    title: 'Worship Service',
    color: 'bg-mutcu-orange',
  },
  {
    icon: Heart,
    title: 'Evangelism',
    color: 'bg-mutcu-cyan',
  },
  {
    icon: Palette,
    title: 'Creative Night',
    color: 'bg-mutcu-red',
  },
  {
    icon: BookOpen,
    title: 'Bible Study',
    color: 'bg-mutcu-navy',
  },
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-mutcu-navy mb-4">Our Gallery</h2>
          <div className="w-24 h-1 bg-mutcu-orange mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Moments from our fellowship, events, and outreach activities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href="/gallery"
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className={`${item.color} h-64 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="w-20 h-20 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block bg-mutcu-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}