import { Heart, Sparkles, Users, HandHeart, BookHeart, Flame } from 'lucide-react';

const values = [
  {
    icon: BookHeart,
    title: 'Faith',
    description: 'Rooted in the Bible and a personal relationship with Jesus Christ, expressed through prayer, worship, and in-depth Bible study.',
    color: 'text-mutcu-orange',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Heart,
    title: 'Love',
    description: 'Demonstrating God\'s unconditional love through genuine fellowship and a welcoming heart for all, as we are a "home away from home".',
    color: 'text-mutcu-red',
    bgColor: 'bg-red-50',
  },
  {
    icon: Sparkles,
    title: 'Hope',
    description: 'Inspiring our community through positive words, encouraging actions, and unwavering faith in a world crambling with uncertainities.',
    color: 'text-mutcu-cyan',
    bgColor: 'bg-cyan-50',
  },
  {
    icon: Flame,
    title: 'Godliness',
    description: 'A commitment to striving for lives that honor and glorify God in all things, reflected in both personal conduct and collective activities.',
    color: 'text-mutcu-navy',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Dedicated to building a strong sense of belonging and mutual support among members, where everyone feels valued and connected.',
    color: 'text-mutcu-orange',
    bgColor: 'bg-orange-50',
  },
  {
    icon: HandHeart,
    title: 'Service',
    description: 'A core belief in putting faith into action by actively reaching out to serve the practical and spiritual needs of others.',
    color: 'text-mutcu-cyan',
    bgColor: 'bg-cyan-50',
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-mutcu-navy mb-4">Our Core Values</h2>
          <div className="w-24 h-1 bg-mutcu-orange mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Rooted in faith and community, our values guide everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className={`${value.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-mutcu-navy mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}