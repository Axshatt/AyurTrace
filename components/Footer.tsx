import { Leaf, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-full p-2">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">AyurTrace</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Revolutionizing Ayurvedic herb traceability through blockchain technology. 
              Ensuring transparency, authenticity, and trust from farm to formulation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <div className="w-5 h-5 bg-blue-500 rounded"></div>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <div className="w-5 h-5 bg-blue-400 rounded"></div>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <div className="w-5 h-5 bg-blue-600 rounded"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/traceability" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Traceability
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">info@ayurtrace.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1" />
                <span className="text-gray-300">
                  123 Blockchain Avenue<br />
                  Tech City, TC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 AyurTrace. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}