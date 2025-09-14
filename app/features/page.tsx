import { Leaf, Shield, Eye, Tag } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: "Geo-tagging of Herbs",
    description: "Precise GPS coordinates tracked from the exact collection point, ensuring complete location transparency for every herb."
  },
  {
    icon: Shield,
    title: "Blockchain Verification",
    description: "Immutable blockchain records provide cryptographic proof of authenticity for every step in the supply chain."
  },
  {
    icon: Eye,
    title: "End-to-End Visibility",
    description: "Complete transparency from farmer to consumer, with real-time tracking through every stage of processing."
  },
  {
    icon: Tag,
    title: "Transparent Labeling",
    description: "QR codes on final products link directly to the complete herb journey, building consumer trust."
  }
];

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-green-600"> Complete Traceability</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our blockchain-powered platform provides unprecedented transparency and authenticity 
            verification for Ayurvedic herbs throughout their entire journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-green-100"
            >
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Blockchain for Ayurvedic Herbs?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Immutable Records</h4>
                    <p className="text-gray-600">Once data is recorded, it cannot be altered or tampered with.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <Eye className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Full Transparency</h4>
                    <p className="text-gray-600">Every stakeholder can verify the authenticity and journey.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <Leaf className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                    <p className="text-gray-600">Ensures herbs meet the highest standards of purity and potency.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-green-600 mb-2">99.9%</div>
                <p className="text-gray-700 text-lg font-medium mb-4">Traceability Accuracy</p>
                <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
                <p className="text-gray-700 text-lg font-medium mb-4">Real-time Monitoring</p>
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <p className="text-gray-700 text-lg font-medium">Blockchain Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}