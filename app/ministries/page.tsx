import Link from 'next/link';
import { Music, BookOpen, Heart, Palette, Users, Mic, HandHeart, DollarSign, Headphones } from 'lucide-react';

const ministries = [
  {
    slug: 'music',
    icon: Music,
    title: 'Music Ministry',
    description: 'Leading Worship and Glorifying God Through Song',
    color: 'bg-[#FF9800]',
    teams: ['Choir', 'Praise & Worship', 'Band', 'Instrumentalists'],
  },
  {
    slug: 'creative-arts',
    icon: Palette,
    title: 'Creative Arts Ministry (CREAM)',
    description: 'Inspiring through Drama, Dance, Spoken Word & Modelling',
    color: 'bg-[#40E0D0]',
    teams: ['Dance', 'Drama', 'SPARCS', 'Modelling'],
  },
  {
    slug: 'bible-study',
    icon: BookOpen,
    title: 'Bible Study & Discipleship',
    description: 'Deepening Faith Through God\'s Word',
    color: 'bg-[#FF1744]',
    teams: ['Bible Study Groups', 'Nurturing Classes', 'BEST-P', 'Baptism'],
  },
  {
    slug: 'missions-evangelism',
    icon: Heart,
    title: 'Missions & Evangelism',
    description: 'Spreading the Gospel and Serving Communities',
    color: 'bg-[#001F3F]',
    teams: ['Evangelistic Crusades', 'Missions Trips', 'Community Outreach', 'Discipleship Teams'],
  },
  {
    slug: 'prayer',
    icon: HandHeart,
    title: 'Prayer Ministry',
    description: 'Fostering Intercession and Spiritual Dependence',
    color: 'bg-[#FF9800]',
    teams: ['Morning Prayers', 'Lunch Hour Prayers', 'Evening Prayers', 'Corporate Fasting'],
  },
  {
    slug: 'hospitality',
    icon: Users,
    title: 'Hospitality Ministry',
    description: 'Serving with Love and Warmth',
    color: 'bg-[#40E0D0]',
    teams: ['Kitchen Ministry', 'Guest Relations', 'Event Catering'],
  },
  {
    slug: 'technical',
    icon: Mic,
    title: 'Technical Ministry',
    description: 'Supporting Worship Through Technology',
    color: 'bg-[#FF1744]',
    teams: ['Sound Ministry', 'Ushering', 'MBBC', 'Digital Ministry'],
  },
  {
    slug: 'resource-mobilization',
    icon: DollarSign,
    title: 'Resource Mobilization Committee',
    description: 'Securing Resources for God\'s Work',
    color: 'bg-[#001F3F]',
    teams: ['Love Offerings', 'Merchandise Sales', 'Church Visitations'],
  },
  {
    slug: 'welfare',
    icon: Headphones,
    title: 'Welfare Committee',
    description: 'Caring for Our Family in Christ',
    color: 'bg-[#FF9800]',
    teams: ['Financial Support', 'Pastoral Care', 'Member Support'],
  },
];

export default function Ministries() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001F3F] to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fadeIn">Our Ministries</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Discover how you can serve and grow in faith through our diverse ministries
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, idx) => {
              const Icon = ministry.icon;
              return (
                <Link
                  key={ministry.slug}
                  href={`/ministries/${ministry.slug}`}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scaleIn"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`${ministry.color} p-8 flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="w-20 h-20 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#001F3F] mb-3 group-hover:text-[#FF9800] transition-colors">
                      {ministry.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{ministry.description}</p>
                    <div className="space-y-1 mb-4">
                      {ministry.teams.map((team, teamIdx) => (
                        <div key={teamIdx} className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#40E0D0]"></span>
                          {team}
                        </div>
                      ))}
                    </div>
                    <div className="text-[#FF9800] font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                      Learn More →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 animate-fadeIn">Ready to Get Involved?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Join a ministry that aligns with your passion and gifts. Every member has a place to serve and grow.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#FF9800] hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fadeIn"
            style={{ animationDelay: '0.4s' }}
          >
            Contact Us to Join
          </Link>
        </div>
      </section>
    </div>
  );
}