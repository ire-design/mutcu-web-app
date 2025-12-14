import { Video, BookOpen, Headphones, FileText, Download, ExternalLink } from 'lucide-react';

const resources = [
  {
    icon: Video,
    title: 'Sermon Videos',
    description: 'Watch past sermons and teachings from our Sunday services.',
    items: [
      'Walking in Faith - Pastor John (Dec 2024)',
      'The Power of Prayer - Rev. Mary (Nov 2024)',
      'Living for Christ - Elder David (Oct 2024)',
    ],
    color: 'bg-mutcu-orange',
  },
  {
    icon: Headphones,
    title: 'Worship Music',
    description: 'Listen to recordings from our Music Ministry.',
    items: [
      'MUTCU Choir - Christmas Album 2024',
      'Praise Team - Live Worship Session',
      'Band Instrumentals Collection',
    ],
    color: 'bg-mutcu-cyan',
  },
  {
    icon: BookOpen,
    title: 'Bible Study Materials',
    description: 'Download study guides and devotionals.',
    items: [
      'Romans Study Guide (12 Weeks)',
      'Daily Devotional - January 2025',
      'New Believers Course Materials',
    ],
    color: 'bg-mutcu-red',
  },
  {
    icon: FileText,
    title: 'Articles & Blogs',
    description: 'Read inspiring articles and testimonies.',
    items: [
      'My Journey with Christ - Student Testimonies',
      'Balancing Faith and Academics',
      'The Impact of Campus Ministry',
    ],
    color: 'bg-mutcu-navy',
  },
];

const liveStreaming = {
  title: 'Watch Live',
  description: 'Join us for live streaming of our services and events.',
  schedule: [
    'Sunday Service: 10:00 AM - 12:00 PM',
    'Prayer Meeting: Friday 5:00 PM',
    'Special Events: Check calendar',
  ],
};

export default function Resources() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mutcu-navy to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Resources</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Grow in faith with our sermons, music, and study materials
          </p>
        </div>
      </section>

      {/* Live Streaming Section */}
      <section className="py-20 bg-mutcu-orange text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Video className="w-20 h-20 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">{liveStreaming.title}</h2>
            <p className="text-xl mb-8">{liveStreaming.description}</p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Streaming Schedule</h3>
              <div className="space-y-2">
                {liveStreaming.schedule.map((time, idx) => (
                  <p key={idx} className="text-lg">{time}</p>
                ))}
              </div>
            </div>
            <button className="bg-white text-mutcu-orange hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
              <ExternalLink size={20} />
              Watch Now
            </button>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`${resource.color} p-6 flex items-center gap-4`}>
                    <Icon className="w-12 h-12 text-white" />
                    <h3 className="text-2xl font-bold text-white">{resource.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-6">{resource.description}</p>
                    <ul className="space-y-3">
                      {resource.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <span className="text-gray-700">{item}</span>
                          <Download size={20} className="text-mutcu-orange cursor-pointer hover:text-orange-600" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-mutcu-navy mb-6">Get Our Mobile App</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Access all resources, get event notifications, and stay connected with MUTCU on the go.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-mutcu-navy hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
              <Download size={20} />
              Download for Android
            </button>
            <button className="bg-mutcu-navy hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
              <Download size={20} />
              Download for iOS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}