import Link from 'next/link';
import { ArrowRight, Shield, Eye, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-emerald-300 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200 rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main content */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-2">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-semibold">
              Blockchain Powered Traceability
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Track Your
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block">
              Ayurvedic Herbs
            </span>
            From Farm to Formulation
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Ensure authenticity, quality, and transparency in every Ayurvedic product with 
            our revolutionary blockchain-based traceability system. From the moment herbs are 
            harvested to your final formulation.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link
            href="/traceability"
            className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            <span>Explore Traceability</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <Link
            href="/features"
            className="bg-white text-gray-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 hover:border-green-200 shadow-lg"
          >
            Learn More
          </Link>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/80 transition-all duration-300">
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Blockchain Security</h3>
            <p className="text-gray-600 text-sm">Immutable records ensure complete data integrity</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/80 transition-all duration-300">
            <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Eye className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Transparency</h3>
            <p className="text-gray-600 text-sm">Track every step from collection to consumer</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/80 transition-all duration-300">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
            <p className="text-gray-600 text-sm">Verify authenticity and purity of every herb</p>
          </div>
        </div>
      </div>
    </section>
  );
}