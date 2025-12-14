import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-mutcu-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About MUTCU</h3>
            <p className="text-gray-300 mb-4">
              Murang'a University of Technology Christian Union is a non-denominational community dedicated to inspiring love, hope, and godliness through faith, unity, and service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-mutcu-orange transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-mutcu-orange transition-colors">About</Link></li>
              <li><Link href="/ministries" className="text-gray-300 hover:text-mutcu-orange transition-colors">Ministries</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-mutcu-orange transition-colors">Events</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-mutcu-orange transition-colors">Resources</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-mutcu-orange transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-mutcu-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-mutcu-cyan" />
                <span className="text-gray-300">Murang'a University of Technology, Murang'a, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-mutcu-cyan" />
                <span className="text-gray-300">+254 712 345 678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-mutcu-cyan" />
                <span className="text-gray-300">info@mutcu.ac.ke</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">Office Hours: Mon-Fri, 8:00 AM - 5:00 PM</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-mutcu-orange transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-mutcu-orange transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-mutcu-orange transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2025 Murang'a University of Technology Christian Union. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2">Designed by MUTCU Tech Team</p>
        </div>
      </div>
    </footer>
  );
}