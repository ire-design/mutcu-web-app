import Link from 'next/link';
import { Target, Eye, BookOpen } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-mutcu-navy mb-4">About MUTCU</h2>
          <div className="w-24 h-1 bg-mutcu-orange mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Murang'a University of Technology Christian Union (MUTCU) is a lively, student-led society in MUT. We are affiliated with FOCUS-Kenya, dedicated to inspiring love, hope, and godliness through discipleship, evangelism, mission work, and leadership development.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Target className="w-12 h-12 text-mutcu-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-mutcu-navy mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    To raise a family well-equipped in all aspects of life, exemplary to Jesus Christ, by encouraging unity as one body of Christ and reaching out to non-believers within and beyond.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Eye className="w-12 h-12 text-mutcu-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-mutcu-navy mb-2">Our Vision</h3>
                  <p className="text-gray-700">
                    To be a model Christian Union cultivating Christ-centeredness among members to impact society.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-block mt-8 bg-mutcu-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More About Us
            </Link>
          </div>

          <div className="relative">
            <div className="bg-mutcu-navy rounded-lg p-8 text-white">
              <BookOpen className="w-12 h-12 text-mutcu-cyan mb-4" />
              <h3 className="text-2xl font-bold mb-4">Doctrinal Basis</h3>
              <p className="text-gray-200 leading-relaxed">
                The Union's beliefs are based on the fundamental truths of Christianity as outlined in its constitution. This includes the unity of the Trinity, the sovereignty of God in creation and redemption, the divine inspiration and supreme authority of the Holy Scripture, the universal sinfulness of man, redemption solely through the sacrificial death of Jesus Christ, His bodily resurrection and ascension, and the sanctifying work of the Holy Spirit in every believer.
              </p>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-mutcu-orange/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}