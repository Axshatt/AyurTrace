import { CheckCircle, AlertTriangle, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle,
    title: 'Consumer Trust',
    description: 'Build confidence with complete transparency about herb origins and processing.'
  },
  {
    icon: AlertTriangle,
    title: 'Quality Control',
    description: 'Prevent contamination and ensure only premium-quality herbs reach consumers.'
  },
  {
    icon: TrendingUp,
    title: 'Market Premium',
    description: 'Traceable products command higher prices and better market positioning.'
  },
  {
    icon: Users,
    title: 'Farmer Empowerment',
    description: 'Connect farmers directly with end consumers, ensuring fair compensation.'
  }
];

export default function ImportanceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-green-600">Traceability</span> Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            In the Ayurvedic industry, authenticity and purity are paramount. Traditional supply chains 
            lack transparency, making it difficult to verify the quality and origins of herbs. 
            Our blockchain solution addresses these critical challenges.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">73%</div>
            <p className="text-gray-600">of consumers want supply chain transparency</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">85%</div>
            <p className="text-gray-600">are willing to pay more for traceable products</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">40%</div>
            <p className="text-gray-600">reduction in counterfeit products</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">92%</div>
            <p className="text-gray-600">improvement in quality assurance</p>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Supply Chain?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join the revolution in Ayurvedic herb traceability and build trust with your customers 
            through complete transparency.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}