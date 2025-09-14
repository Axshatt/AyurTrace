export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-green-600">AyurTrace</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing the Ayurvedic industry through blockchain technology, 
            ensuring transparency, authenticity, and trust in every herb.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At AyurTrace, we believe that consumers have the right to know the complete 
              journey of their Ayurvedic herbs. Our blockchain-powered platform creates 
              an immutable record of every herb's path from farm to formulation, ensuring 
              quality, authenticity, and sustainability.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By empowering farmers, manufacturers, and consumers with transparent 
              information, we're building a more trustworthy and sustainable Ayurvedic 
              supply chain for the future.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-12 text-center">
            <div className="text-6xl mb-6">🌱</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Transparency in Every Herb
            </h3>
            <p className="text-gray-700">
              From soil to shelf, every step is recorded and verified on the blockchain.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-xl mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How AyurTrace Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collection</h3>
              <p className="text-gray-600 text-sm">
                Farmers collect herbs and record GPS coordinates, harvest date, and quality metrics.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verification</h3>
              <p className="text-gray-600 text-sm">
                Data is verified and permanently recorded on the blockchain with cryptographic proof.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Processing</h3>
              <p className="text-gray-600 text-sm">
                Herbs are processed into formulations while maintaining blockchain linkage.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consumer</h3>
              <p className="text-gray-600 text-sm">
                Consumers can trace the complete journey using QR codes or batch IDs.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Immutable</h3>
            <p className="text-gray-600">
              Blockchain technology ensures that once data is recorded, 
              it cannot be altered or tampered with.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Accessibility</h3>
            <p className="text-gray-600">
              Our platform is accessible worldwide, enabling global 
              supply chain transparency.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Updates</h3>
            <p className="text-gray-600">
              Get instant updates on your herb's journey through 
              the supply chain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}