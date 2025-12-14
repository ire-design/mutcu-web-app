import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const upcomingEvents = [
  {
    title: 'Prayer Kesha',
    date: 'September 26, 2025',
    time: '7:00 PM - 9:30 PM',
    location: 'Main Campus Chapel',
    description: 'Join us for a night of intercession and spiritual revival. Experience the power of corporate prayer as we seek God\'s face together.',
    attendees: '200+ expected',
    color: 'bg-mutcu-navy',
  },
  {
    title: 'Praise Fest',
    date: 'November 7, 2025',
    time: '7:00 PM - 9:30 PM',
    location: 'University Auditorium',
    description: 'Celebrate our God through our Music Ministry in a lively evening of praise and worship. Featuring performances from the choir, band, and praise team.',
    attendees: '500+ expected',
    color: 'bg-mutcu-orange',
  },
  {
    title: 'Creative Night',
    date: 'October 10, 2025',
    time: '8:00 PM - 5:30 AM',
    location: 'Student Center',
    description: 'Experience a night full of creativity on the theme "Ashes to Beauty" through special ministrations and performances by our Creative Arts Ministry (CREAM). Featuring drama, dance, spoken word, and more.',
    attendees: '300+ expected',
    color: 'bg-mutcu-cyan',
  },
];

const recurringEvents = [
  {
    title: 'Sunday Service',
    schedule: 'Every Sunday, 10:00 AM - 12:00 PM',
    location: 'Main Campus Chapel',
    description: 'Weekly worship service with preaching, praise, and fellowship.',
  },
  {
    title: 'Bible Study Groups',
    schedule: 'Every Wednesday, 6:00 PM - 7:30 PM',
    location: 'Various Locations',
    description: 'Small group Bible studies across different departments and years.',
  },
  {
    title: 'Prayer Meetings',
    schedule: 'Every Friday, 5:00 PM - 6:00 PM',
    location: 'Prayer Room',
    description: 'Corporate prayer time for intercession and thanksgiving.',
  },
  {
    title: 'Discipleship Classes',
    schedule: 'Every Saturday, 2:00 PM - 4:00 PM',
    location: 'LR 101',
    description: 'Training sessions for new believers and leadership development.',
  },
];

export default function Events() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mutcu-navy to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join us for worship, fellowship, and spiritual growth
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-mutcu-navy mb-12 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`${event.color} h-32 flex items-center justify-center`}>
                  <Calendar className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-mutcu-navy mb-4">{event.title}</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2 text-gray-700">
                      <Calendar size={20} className="text-mutcu-orange mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Date: </span>
                        {event.date}
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 text-gray-700">
                      <Clock size={20} className="text-mutcu-orange mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Time: </span>
                        {event.time}
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 text-gray-700">
                      <MapPin size={20} className="text-mutcu-orange mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Location: </span>
                        {event.location}
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 text-gray-700">
                      <Users size={20} className="text-mutcu-orange mt-1 flex-shrink-0" />
                      <div>{event.attendees}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  
                  <button className="w-full bg-mutcu-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    RSVP Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recurring Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-mutcu-navy mb-12 text-center">Regular Activities</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {recurringEvents.map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-mutcu-navy mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-mutcu-orange mb-2">
                  <Clock size={16} />
                  <span className="font-semibold">{event.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}