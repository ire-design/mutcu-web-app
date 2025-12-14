import { Music, BookOpen, Heart, Palette, Mic, Users, Home, HandHeart } from 'lucide-react';

const ministries = [
  {
    icon: Music,
    title: 'Music Ministry',
    description: 'Leading and ministering worship through Choir, Band, Instrumentalism and Praise & Worship.',
    details: [
      'Choir - Harmonious voices lifting praise',
      'Band - Instrumental worship team',
      'Praise & Worship - Spirit-led worship sessions',
      'Training programs for musicians',
    ],
    color: 'bg-mutcu-orange',
  },
  {
    icon: BookOpen,
    title: 'Bible Study & Discipleship',
    description: 'Deepening faith through small groups, nurturing classes for new believers, and resourceful training programs.',
    details: [
      'Weekly Bible Study groups',
      'New believers classes',
      'Leadership training programs',
      'Mentorship and accountability',
    ],
    color: 'bg-mutcu-cyan',
  },
  {
    icon: Heart,
    title: 'Missions & Evangelism',
    description: 'Sharing the Gospel through campus outreach, annual missions, and hope ministry visits.',
    details: [
      'Campus evangelism and outreach',
      'Annual mission trips',
      'Prison ministry visits',
      'Hospital visitations',
      'Children\'s home outreach',
    ],
    color: 'bg-mutcu-red',
  },
  {
    icon: Palette,
    title: 'Creative Ministry (CREAM)',
    description: 'Expressing faith through drama, dance, spoken word, modelling and other artistic talents.',
    details: [
      'Drama and theatrical performances',
      'Dance ministry',
      'Spoken word and poetry',
      'Modelling and fashion',
      'Creative arts workshops',
    ],
    color: 'bg-mutcu-navy',
  },
  {
    icon: Mic,
    title: 'Media & Communications',
    description: 'Spreading the message through digital platforms and multimedia content.',
    details: [
      'Social media management',
      'Photography and videography',
      'Livestreaming services',
      'Graphic design and branding',
    ],
    color: 'bg-mutcu-orange',
  },
  {
    icon: Users,
    title: 'Hospitality Ministry',
    description: 'Creating a welcoming environment for all members and visitors.',
    details: [
      'Welcome team for new students',
      'Event planning and coordination',
      'Fellowship meals and refreshments',
      'Campus tours for visitors',
    ],
    color: 'bg-mutcu-cyan',
  },
  {
    icon: Home,
    title: 'Small Groups',
    description: 'Building intimate communities for spiritual growth and support.',
    details: [
      'Year-level fellowship groups',
      'Department-based groups',
      'Residential hall fellowships',
      'Special interest groups',
    ],
    color: 'bg-mutcu-red',
  },
  {
    icon: HandHeart,
    title: 'Prayer Ministry',
    description: 'Interceding for the university community and beyond.',
    details: [
      'Weekly prayer meetings',
      'Prayer Keshas (overnight prayer)',
      'Prayer request handling',
      'Intercessory prayer teams',
    ],
    color: 'bg-mutcu-navy',
  },
];

export default function Ministries() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mutcu-navy to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Ministries</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover how you can serve and grow in faith through our diverse ministries
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {ministries.map((ministry, idx) => {
              const Icon = ministry.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`${ministry.color} p-6 flex items-center gap-4`}>
                    <Icon className="w-12 h-12 text-white" />
                    <h3 className="text-2xl font-bold text-white">{ministry.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 leading-relaxed">{ministry.description}</p>
                    <ul className="space-y-2">
                      {ministry.details.map((detail, detailIdx) => (
                        <li key={detailIdx} className="flex items-start gap-2">
                          <span className="text-mutcu-orange mt-1">•</span>
                          <span className="text-gray-600">{detail}</span>
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

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-mutcu-navy mb-6">Ready to Get Involved?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join a ministry that aligns with your passion and gifts. Every member has a place to serve and grow.
          </p>
          <a
            href="/contact"
            className="inline-block bg-mutcu-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us to Join
          </a>
        </div>
      </section>
    </div>
  );
}