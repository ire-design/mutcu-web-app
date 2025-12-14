import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

const events = [
  {
    title: 'Prayer Kesha',
    date: 'September 26, 2025',
    time: '7:00 PM - 9:30 PM',
    description: 'Join us for a night of intercession and spiritual revival.',
    color: 'bg-mutcu-navy',
  },
  {
    title: 'Praise Fest',
    date: 'November 7, 2025',
    time: '7:00 PM - 9:30 PM',
    description: 'Celebrate our God through our Music Ministry in a lively evening of praise and worship.',
    color: 'bg-mutcu-orange',
  },
  {
    title: 'Creative Night',
    date: 'October 10, 2025',
    time: '8:00 PM - 5:30 AM',
    description: 'Experience a night full of creativity on the theme Ashes to Beauty though special ministrations and performance by our Creative Arts Ministry (CREAM).',
    color: 'bg-mutcu-cyan',
  },
];

export default function EventsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-mutcu-navy mb-4">Upcoming Events</h2>
          <div className="w-24 h-1 bg-mutcu-orange mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Join us for worship, fellowship, and outreach!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className={`${event.color} h-48 flex items-center justify-center`}>
                <Calendar className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-mutcu-navy mb-3">{event.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Calendar size={16} />
                  <span className="font-semibold">Date:</span>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Clock size={16} />
                  <span className="font-semibold">Time:</span>
                  <span>{event.time}</span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Link
                  href="/events"
                  className="text-mutcu-orange hover:text-orange-600 font-semibold"
                >
                  Details & RSVP →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/events"
            className="inline-block bg-mutcu-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}