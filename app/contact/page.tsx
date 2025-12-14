'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mutcu-navy to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us anytime!
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-mutcu-navy mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-mutcu-orange rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-mutcu-navy mb-1">Location</h3>
                    <p className="text-gray-600">
                      Murang'a University of Technology<br />
                      Murang'a, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-mutcu-cyan rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-mutcu-navy mb-1">Phone</h3>
                    <p className="text-gray-600">+254 712 345 678</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-mutcu-red rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-mutcu-navy mb-1">Email</h3>
                    <p className="text-gray-600">info@mutcu.ac.ke</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-mutcu-navy rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-mutcu-navy mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday<br />
                      8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-mutcu-navy mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-mutcu-orange rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-mutcu-cyan rounded-lg flex items-center justify-center text-white hover:bg-teal-400 transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-mutcu-red rounded-lg flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-mutcu-navy mb-8">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-500 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p>Your message has been sent. We'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-mutcu-orange"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-mutcu-orange"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-mutcu-orange"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="join">Join a Ministry</option>
                      <option value="event">Event Information</option>
                      <option value="prayer">Prayer Request</option>
                      <option value="partnership">Partnership/Sponsorship</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-mutcu-orange resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-mutcu-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-mutcu-navy mb-8 text-center">Find Us</h2>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Map Location - Murang'a University of Technology</p>
          </div>
        </div>
      </section>
    </div>
  );
}