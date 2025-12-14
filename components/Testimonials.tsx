'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';

export default function PrayerForm() {
  const [name, setName] = useState('');
  const [request, setRequest] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ name, request });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setRequest('');
    }, 3000);
  };

  return (
    <section className="py-20 bg-mutcu-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Heart className="w-16 h-16 text-mutcu-orange mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Need Prayers?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Our Prayer Ministry is here to support you in faith and intercession. Submit your requests confidentially.
          </p>

          {submitted ? (
            <div className="bg-green-500 text-white p-6 rounded-lg">
              <p className="text-xl font-semibold">Thank you for sharing your prayer request!</p>
              <p className="mt-2">We will be praying for you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-left mb-2 text-gray-300">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="You may submit anonymously if preferred."
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-mutcu-orange"
                />
              </div>

              <div>
                <label htmlFor="request" className="block text-left mb-2 text-gray-300">
                  Prayer Request *
                </label>
                <textarea
                  id="request"
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                  required
                  rows={6}
                  placeholder="Please enter your prayer request."
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-mutcu-orange resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-mutcu-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Submit Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}