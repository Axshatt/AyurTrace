'use client';

import { useState } from 'react';
import { Search, MapPin, Calendar, Hash, Package, CheckCircle } from 'lucide-react';

const mockData: any = {
  'AYR001': {
    batchId: 'AYR001',
    herbName: 'Ashwagandha (Withania somnifera)',
    farmer: 'Rajesh Kumar',
    location: 'Rajasthan, India',
    coordinates: '27.0238, 74.2179',
    harvestDate: '2024-01-15',
    blockchainHash: '0x7a8b9c0d1e2f3456789abcdef0123456789abcdef0123456789abcdef0123456',
    formulation: 'AyurVita Stress Relief Tablets',
    status: 'Delivered',
    quality: 'Grade A',
    certifications: ['Organic', 'GMP Certified'],
    processingDate: '2024-01-20',
    manufacturer: 'AyurVeda Labs Pvt. Ltd.'
  },
  'AYR002': {
    batchId: 'AYR002',
    herbName: 'Turmeric (Curcuma longa)',
    farmer: 'Priya Devi',
    location: 'Kerala, India',
    coordinates: '10.8505, 76.2711',
    harvestDate: '2024-01-10',
    blockchainHash: '0x1a2b3c4d5e6f7890abcdef123456789abcdef123456789abcdef123456789abcd',
    formulation: 'Golden Immunity Powder',
    status: 'In Transit',
    quality: 'Grade A+',
    certifications: ['Organic', 'Fair Trade'],
    processingDate: '2024-01-18',
    manufacturer: 'Nature\'s Bounty Co.'
  }
};

export default function Traceability() {
  const [searchId, setSearchId] = useState('');
  const [result, setResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    setIsSearching(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    
    if (mockData[searchId.toUpperCase()]) {
      setResult(mockData[searchId.toUpperCase()]);
    } else {
      setResult(null);
    }
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trace Your <span className="text-green-600">Ayurvedic Herbs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enter a batch ID to discover the complete journey of your Ayurvedic herbs 
            from farm to your hands.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter Batch ID (try AYR001 or AYR002)"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none text-lg"
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={!searchId || isSearching}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearching ? 'Searching...' : 'Trace Herb'}
              </button>
            </div>
          </div>
        </div>

        {result && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Details */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Herb Details</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Package className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Batch ID</p>
                    <p className="text-lg font-semibold text-gray-900">{result.batchId}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 rounded-full p-3">
                    <Package className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Herb</p>
                    <p className="text-lg font-semibold text-gray-900">{result.herbName}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Farmer & Location</p>
                    <p className="text-lg font-semibold text-gray-900">{result.farmer}</p>
                    <p className="text-sm text-gray-600">{result.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 rounded-full p-3">
                    <Calendar className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Harvest Date</p>
                    <p className="text-lg font-semibold text-gray-900">{result.harvestDate}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 rounded-full p-3">
                    <Hash className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Blockchain Hash</p>
                    <p className="text-xs font-mono text-gray-700 bg-gray-100 px-3 py-2 rounded-lg">
                      {result.blockchainHash}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Mock Map */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Collection Location</h3>
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200/50 to-blue-200/50"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">{result.location}</p>
                    <p className="text-sm text-gray-600">Coordinates: {result.coordinates}</p>
                  </div>
                </div>
              </div>

              {/* Final Product Info */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Final Product</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Formulation</p>
                    <p className="text-lg font-semibold text-gray-900">{result.formulation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Manufacturer</p>
                    <p className="text-lg font-semibold text-gray-900">{result.manufacturer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Quality Grade</p>
                    <p className="text-lg font-semibold text-green-600">{result.quality}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Status</p>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-green-600">{result.status}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-2">Certifications</p>
                    <div className="flex flex-wrap gap-2">
                      {result.certifications.map((cert: string, index: number) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {searchId && !result && !isSearching && (
          <div className="text-center py-12">
            <div className="bg-white rounded-3xl p-12 shadow-xl max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Results Found</h3>
              <p className="text-gray-600">
                The batch ID "{searchId}" was not found in our system. 
                Please check the ID and try again.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Try sample IDs: AYR001 or AYR002
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}