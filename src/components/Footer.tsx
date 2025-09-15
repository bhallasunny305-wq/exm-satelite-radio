import React from 'react';
import { Phone, Mail, MapPin, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Radio className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">EXM Radio</span>
            </div>
            <p className="text-gray-300 mb-4">
              Premium satellite radio service for your car and home. Crystal clear sound, 
              nationwide coverage, and endless entertainment.
            </p>
            <div className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg font-bold w-fit">
              <Phone className="h-5 w-5 mr-2" />
              <a href="tel:1844-202-6767" className="text-white">
                1-844-202-6767
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300 hover:text-white cursor-pointer">Car Radio Installation</span></li>
              <li><span className="text-gray-300 hover:text-white cursor-pointer">Home Radio Setup</span></li>
              <li><span className="text-gray-300 hover:text-white cursor-pointer">Technical Support</span></li>
              <li><span className="text-gray-300 hover:text-white cursor-pointer">Equipment Sales</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-300 hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <a href="tel:1844-202-6767" className="text-gray-300 hover:text-white">
                  1-844-202-6767
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">support@exmradio.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">Nationwide Coverage</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 EXM Radio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-gray-400 hover:text-white text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;