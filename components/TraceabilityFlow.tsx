import { ArrowRight, Leaf, Database, Package, QrCode } from 'lucide-react';

const steps = [
  {
    icon: Leaf,
    title: 'Farmers & Collectors',
    description: 'Herbs are collected with GPS coordinates, harvest date, and quality metrics recorded.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Database,
    title: 'Blockchain Recording',
    description: 'All data is encrypted and stored immutably on the blockchain for permanent verification.',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Package,
    title: 'Processing & Manufacturing',
    description: 'Herbs are processed into formulations while maintaining complete blockchain linkage.',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    icon: QrCode,
    title: 'Consumer Verification',
    description: 'End users can scan QR codes or enter batch IDs to view the complete herb journey.',
    color: 'from-orange-500 to-red-600'
  }
];

export default function TraceabilityFlow() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The <span className="text-green-600">Traceability</span> Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow the complete path of Ayurvedic herbs through our blockchain-powered system, 
            ensuring transparency at every step.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 flex flex-col items-center relative">
                <div className={`bg-gradient-to-br ${step.color} rounded-3xl p-8 mb-6 shadow-xl transform hover:scale-105 transition-all duration-300`}>
                  <step.icon className="w-12 h-12 text-white mx-auto mb-4" />
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/90 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-8 h-8 text-gray-400 z-10" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`bg-gradient-to-br ${step.color} rounded-3xl p-8 shadow-xl`}>
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-white/90 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="w-1 h-8 bg-gray-300 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-12 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Experience Complete Transparency
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Every step is recorded, verified, and accessible. No more guesswork about 
              the quality and authenticity of your Ayurvedic herbs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                Try Demo Traceability
              </button>
              <button className="bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}