import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, TrendingUp, Clock, MapPin } from 'lucide-react';
import { states } from '../data/states';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredStates = states.filter(state =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Commercial Truck Insurance Directory | Find Coverage By State</title>
        <meta 
          name="description" 
          content="Find commercial truck insurance coverage in your state. Compare quotes for auto liability, physical damage, and cargo insurance from trusted providers."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Find Commercial Truck Insurance in Your Area
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100">
              Compare coverage options and get quotes from trusted providers
            </p>
            
            {/* Search Box */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search your state..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Complete Coverage</h3>
                <p className="mt-2 text-gray-600">
                  Auto liability, physical damage, cargo insurance, and more
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Competitive Rates</h3>
                <p className="mt-2 text-gray-600">
                  Compare quotes from multiple providers in your area
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Quick Quotes</h3>
                <p className="mt-2 text-gray-600">
                  Get coverage estimates within minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* States Directory */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Find Insurance by State
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredStates.map((state) => (
            <Link
              key={state.abbreviation}
              to={`/state/${state.abbreviation.toLowerCase()}`}
              className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-200 flex items-start"
            >
              <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-2" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-1">
                  {state.name}
                </h2>
                <p className="text-gray-600 text-sm">
                  Find coverage in {state.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white mt-12 py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Looking for the Right Insurance Coverage?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Connect with experienced insurance agencies that understand the unique needs of your trucking business. Compare providers and find the perfect coverage today.
          </p>
          <Link
            to="/state"
            className="inline-block bg-yellow-500 text-blue-900 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-lg"
          >
            Find Insurance Providers
          </Link>
        </div>
      </div>
    </>
  );
}