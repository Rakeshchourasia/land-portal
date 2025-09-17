import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Send, Mountain, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* About Us Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-full">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">LandConnect</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted partner in discovering, listing, and investing in land and properties across Patna and beyond. We connect buyers and sellers with transparency and expertise.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b-2 border-green-500 pb-2 inline-block">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/properties" className="text-sm hover:text-green-400 transition-colors">Properties</Link></li>
              <li><Link to="/services" className="text-sm hover:text-green-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-green-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b-2 border-green-500 pb-2 inline-block">
              LEGAL
            </h3>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-sm hover:text-green-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-green-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="text-sm hover:text-green-400 transition-colors">Disclaimer</Link></li>
              <li><Link to="/agreement" className="text-sm hover:text-green-400 transition-colors">User Agreement</Link></li>
            </ul>
          </div>

          {/* Stay In Touch Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b-2 border-green-500 pb-2 inline-block">
              STAY IN TOUCH
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Frazer Road Area, Patna, Bihar 800001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">contact@landconnect.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="pt-2">
                <p className="text-sm mb-3">
                  Subscribe to our newsletter for the latest updates.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-md transition-colors">
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 LandConnect Pvt. Ltd. | All rights reserved
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;