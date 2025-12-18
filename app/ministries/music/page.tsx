'use client';

import { useState } from 'react';
import { Music, Users, Mic, Guitar, Calendar, Clock, CheckCircle } from 'lucide-react';

export default function MusicMinistry() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const teams = [
    {
      icon: Users,
      title: 'Choir',
      description: 'The MUTCU Choir leads congregational singing and presents special hymns and contemporary worship songs.',
      activities: [
        'Weekly rehearsals for Sunday services and special events',
        'Learning new songs and arrangements',
        'Performing during weekly fellowships and major Union events',
      ],
      meetingTime: 'Sundays, 2:00 PM - 4:00 PM (Room 7)',
      color: 'bg-[#FF9800]',
    },
    {
      icon: Mic,
      title: 'Praise and Worship',
      description: 'Leading the congregation in contemporary worship songs, creating an energetic and intimate atmosphere.',
      activities: [
        'Vocal practice and harmony training sessions',
        'Leading praise during weekly fellowships',
        'Preparing worship sets for special events',
      ],
      meetingTime: 'Tuesday, 7:00 PM - 9:00 PM (Tuition Block)',
      color: 'bg-[#40E0D0]',
    },
    {
      icon: Music,
      title: 'Band',
      description: 'The core instrumental support providing rhythm and melodic foundation for worship services.',
      activities: [
        'Regular practice sessions for band members',
        'Providing instrumental backing for worship',
        'Performing during fellowships and special events',
      ],
      meetingTime: 'Thursday, 7:00 PM - 9:00 PM (Music Room)',
      color: 'bg-[#FF1744]',
    },
    {
      icon: Guitar,
      title: 'Instrumentalists',
      description: 'Individual musicians playing various instruments to support ministry activities.',
      activities: [
        'Providing music for smaller fellowships',
        'Collaborating with other ministries',
        'Mentoring aspiring musicians',
      ],
      meetingTime: 'Wednesdays, 7:00 PM - 9:00 PM (Room 15)',
      color: 'bg-[#001F3F]',
    },
  ];

  const events = [
    {
      title: 'Praise Fest',
      description: 'A special service dedicated to high-energy praise and worship, featuring all Music Ministry teams.',
      date: 'Next Date: 7th November',
      icon: '⭐',
    },
    {
      title: 'Christmas Cantata',
      description: 'A collaborative worship experience celebrating the birth of Jesus through music and drama.',
      date: 'Next Date: 12th December',
      icon: '🎄',
    },
    {
      title: 'Worship Experiences',
      description: 'Special worship services providing opportunities for deep spiritual worship through music.',
      date: 'Frequency: Weekly (Friday Services)',
      icon: '🙏',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setFormData({ name: '', email: '', interest: '', message: '' });
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] via-[#FF9800] to-[#40E0D0] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Music className="w-20 h-20 mx-auto mb-6 animate-float" />
          <h1 className="text-6xl font-bold mb-4 animate-fadeIn">Music Ministry</h1>
          <p className="text-2xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Leading Worship and Glorifying God Through Song
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl font-bold text-[#001F3F] mb-6">About the Music Ministry</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The Music Ministry of MUTCU is dedicated to leading the Union in vibrant and spiritually uplifting worship experiences. Comprising various teams including the choir, band, instrumentalists, and praise and worship leaders, this ministry plays a crucial role in creating an atmosphere where members can connect with God through music and song.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our goal is to foster a heart of worship and praise among the MUTCU family, ensuring that all musical presentations are excellent and align with the Union's spiritual goals. We believe that music is a powerful tool for evangelism, edification, and glorifying God.
              </p>
            </div>
            <div className="animate-slideInRight">
              <div className="bg-[#FF9800] rounded-2xl p-8 text-white shadow-2xl">
                <Music className="w-16 h-16 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Ministry Coordinator</h3>
                <div className="space-y-2">
                  <p className="text-lg">Jabez Ayugu</p>
                  <p className="text-white/80">Music Ministry Coordinator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001F3F] mb-4 animate-fadeIn">Our Musical Ensembles</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Various teams come together to lead MUTCU in worship and praise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teams.map((team, idx) => {
              const Icon = team.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scaleIn"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`${team.color} p-6 flex items-center gap-4`}>
                    <Icon className="w-12 h-12 text-white" />
                    <h3 className="text-2xl font-bold text-white">{team.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 leading-relaxed">{team.description}</p>
                    <h4 className="font-bold text-[#001F3F] mb-3">Activities:</h4>
                    <ul className="space-y-2 mb-6">
                      {team.activities.map((activity, actIdx) => (
                        <li key={actIdx} className="flex items-start gap-2">
                          <CheckCircle size={20} className="text-[#40E0D0] mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{activity}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-[#FF9800] font-semibold">
                      <Clock size={20} />
                      <span>{team.meetingTime}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <br />

      {/* Events Section */}
      <section className="py-20 bg-[#001F3F] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-fadeIn">Featured Events</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              The Music Ministry plays a vital role in MUTCU's most anticipated events
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fadeIn"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{event.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{event.description}</p>
                <div className="flex items-center gap-2 text-[#40E0D0] font-semibold">
                  <Calendar size={20} />
                  <span>{event.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <br />

      {/* Join Section */}
      <section className="py-20 bg-gradient-to-br from-[#FF9800] to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fadeIn">Join Our Music Ministry!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            If you have a passion for worship through music, we invite you to join the Music Ministry
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-[#FF9800] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fadeIn"
            style={{ animationDelay: '0.4s' }}
          >
            Express Your Interest
          </button>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 animate-scaleIn">
            <h3 className="text-2xl font-bold text-[#001F3F] mb-6">Join Music Ministry</h3>
            
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-20 h-20 text-[#40E0D0] mx-auto mb-4 animate-pulse" />
                <p className="text-lg font-semibold text-gray-700">Thank you for your interest!</p>
                <p className="text-gray-600 mt-2">We'll get in touch with you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#FF9800] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#FF9800] focus:outline-none transition-colors"
                    placeholder="john@mut.ac.ke"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Area of Interest *</label>
                  <select
                    required
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#FF9800] focus:outline-none transition-colors"
                  >
                    <option value="">Select an area</option>
                    <option value="choir">Choir</option>
                    <option value="praise-worship">Praise and Worship</option>
                    <option value="band">Band</option>
                    <option value="instrumentalist">Instrumentalists</option>
                    <option value="general">General Interest</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Tell us about your experience (Optional)</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#FF9800] focus:outline-none transition-colors resize-none"
                    placeholder="e.g., I play guitar and have experience leading worship..."
                  />
                </div>
                
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 rounded-lg bg-[#FF9800] text-white font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}