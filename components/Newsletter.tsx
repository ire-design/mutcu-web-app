'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ email });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-16 h-16 text-mutcu-orange mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-mutcu-navy mb-4">Stay Connected</h2>
          <p className="text-gray-600 text-lg mb-8">
            Subscribe to our newsletter for updates on events, devotionals, and ministry opportunities.
          </p>

          {submitted ? (
            <div className="bg-green-500 text-white p-6 rounded-lg">
              <p className="text-xl font-semibold">Thank you for subscribing!</p>
              <p className="mt-2">You'll receive updates soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-mutcu-orange"
              />
              <button
                type="submit"
                className="bg-mutcu-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}