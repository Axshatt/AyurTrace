'use client';

import { useState } from 'react';
import { Plus, Leaf, MapPin, Calendar, Hash } from 'lucide-react';

interface HerbEntry {
  id: string;
  herbName: string;
  herbType: string;
  farmerName: string;
  location: string;
  coordinates: string;
  harvestDate: string;
  blockchainHash: string;
  status: string;
}

export default function Dashboard() {
  const [entries, setEntries] = useState<HerbEntry[]>([
    {
      id: 'AYR001',
      herbName: 'Ashwagandha',
      herbType: 'Withania somnifera',
      farmerName: 'Rajesh Kumar',
      location: 'Rajasthan, India',
      coordinates: '27.0238, 74.2179',
      harvestDate: '2024-01-15',
      blockchainHash: '0x7a8b9c0d1e2f3456...',
      status: 'Verified'
    },
    {
      id: 'AYR002',
      herbName: 'Turmeric',
      herbType: 'Curcuma longa',
      farmerName: 'Priya Devi',
      location: 'Kerala, India',
      coordinates: '10.8505, 76.2711',
      harvestDate: '2024-01-10',
      blockchainHash: '0x1a2b3c4d5e6f7890...',
      status: 'Verified'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    herbName: '',
    herbType: '',
    farmerName: '',
    location: '',
    coordinates: '',
    harvestDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newEntry: HerbEntry = {
      id: `AYR${String(entries.length + 1).padStart(3, '0')}`,
      ...formData,
      blockchainHash: `0x${Math.random().toString(16).substr(2, 16)}...`,
      status: 'Pending Verification'
    };

    setEntries([...entries, newEntry]);
    setFormData({
      herbName: '',
      herbType: '',
      farmerName: '',
      location: '',
      coordinates: '',
      harvestDate: ''
    });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Farmer <span className="text-green-600">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-600">
              Manage your herb collections and blockchain entries
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="mt-4 sm:mt-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Add New Entry</span>
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Herb Collection</h2>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Herb Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.herbName}
                  onChange={(e) => setFormData({ ...formData, herbName: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                  placeholder="e.g., Ashwagandha"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Herb Type (Scientific Name)
                </label>
                <input
                  type="text"
                  required
                  value={formData.herbType}
                  onChange={(e) => setFormData({ ...formData, herbType: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                  placeholder="e.g., Withania somnifera"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Farmer Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.farmerName}
                  onChange={(e) => setFormData({ ...formData, farmerName: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                  placeholder="Enter farmer name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                  placeholder="e.g., Rajasthan, India"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GPS Coordinates
                </label>
                <input
                  type="text"
                  required
                  value={formData.coordinates}
                  onChange={(e) => setFormData({ ...formData, coordinates: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                  placeholder="e.g., 27.0238, 74.2179"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Harvest Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.harvestDate}
                  onChange={(e) => setFormData({ ...formData, harvestDate: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                />
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                >
                  Submit to Blockchain
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Blockchain Entries</h2>
            <p className="text-gray-600 mt-2">Your recorded herb collections on the blockchain</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Batch ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Herb</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Farmer</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Harvest Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Blockchain Hash</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {entries.map((entry) => (
                  <tr key={entry.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{entry.id}</td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{entry.herbName}</p>
                        <p className="text-sm text-gray-500 italic">{entry.herbType}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{entry.farmerName}</td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm text-gray-900">{entry.location}</p>
                        <p className="text-xs text-gray-500">{entry.coordinates}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{entry.harvestDate}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        entry.status === 'Verified' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {entry.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs font-mono text-gray-500">{entry.blockchainHash}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{entries.length}</h3>
            <p className="text-gray-600">Total Entries</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <Hash className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {entries.filter(e => e.status === 'Verified').length}
            </h3>
            <p className="text-gray-600">Verified on Blockchain</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {new Set(entries.map(e => e.location)).size}
            </h3>
            <p className="text-gray-600">Unique Locations</p>
          </div>
        </div>
      </div>
    </div>
  );
}