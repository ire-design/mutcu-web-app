import { Target, Eye, BookOpen, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mutcu-navy to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About MUTCU</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Inspiring Love, Hope & Godliness at Murang'a University of Technology
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-mutcu-navy mb-6">Who We Are</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Murang'a University of Technology Christian Union (MUTCU) is a lively, student-led society in MUT. We are affiliated with FOCUS-Kenya, dedicated to inspiring love, hope, and godliness through discipleship, evangelism, mission work, and leadership development.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We are a family united in Christ, reaching out to transform lives within and beyond the university community. Our union provides a home away from home for students seeking spiritual growth and fellowship.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-mutcu-orange to-orange-600 text-white p-8 rounded-lg">
                <Target className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="leading-relaxed">
                  To raise a family well-equipped in all aspects of life, exemplary to Jesus Christ, by encouraging unity as one body of Christ and reaching out to non-believers within and beyond.
                </p>
              </div>

              <div className="bg-gradient-to-br from-mutcu-cyan to-teal-400 text-white p-8 rounded-lg">
                <Eye className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="leading-relaxed">
                  To be a model Christian Union cultivating Christ-centeredness among members to impact society.
                </p>
              </div>
            </div>

            <div className="bg-mutcu-navy text-white p-8 rounded-lg mb-12">
              <BookOpen className="w-12 h-12 mb-4 text-mutcu-cyan" />
              <h3 className="text-2xl font-bold mb-4">Doctrinal Basis</h3>
              <p className="leading-relaxed">
                The Union's beliefs are based on the fundamental truths of Christianity as outlined in its constitution. This includes the unity of the Trinity, the sovereignty of God in creation and redemption, the divine inspiration and supreme authority of the Holy Scripture, the universal sinfulness of man, redemption solely through the sacrificial death of Jesus Christ, His bodily resurrection and ascension, and the sanctifying work of the Holy Spirit in every believer. This shared doctrinal foundation ensures unity in belief and purpose across all of MUTCU's diverse activities.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Users className="w-12 h-12 text-mutcu-orange mb-4" />
              <h3 className="text-2xl font-bold text-mutcu-navy mb-4">Affiliation</h3>
              <p className="text-gray-700 leading-relaxed">
                MUTCU is proudly affiliated with FOCUS-Kenya (Fellowship of Christian Unions in Kenya), a national movement that brings together Christian unions from various universities and colleges across Kenya. This affiliation provides us with resources, training, and a broader network of believers committed to campus ministry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}