import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Shield, Phone } from 'lucide-react';
import { states } from '../data/states';
import { Helmet } from 'react-helmet-async';

export default function StatePage() {
  const { stateId } = useParams();
  const state = states.find(s => s.abbreviation.toLowerCase() === stateId?.toLowerCase());

  if (!state) {
    return <div>State not found</div>;
  }

  // SEO metadata - Updated per requirements
  const metaTitle = `Commercial Trucking Insurance in ${state.name}`;
  
  const metaDescription = `Are you looking for commercial trucking insurance in ${state.name}? Check out our directory of insurance providers servicing your state.`;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://commercialinsurancefortruckers.com/state/${stateId?.toLowerCase()}`} />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Commercial Truck Insurance in {state.name}
          </h1>
          <p className="text-xl text-gray-600">
            Compare insurance providers and coverage options
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {state.cities.map((city) => (
            <Link
              key={city}
              to={`/state/${stateId?.toLowerCase()}/${city.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-200"
            >
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-2" />
                <div>
                  <h2 className="text-xl font-semibold text-blue-900 mb-1">
                    {city}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Compare providers in {city}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Insurance Types */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Available Coverage Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-blue-600 mt-1 mr-3" />
              <div>
                <h3 className="font-semibold mb-1">Auto Liability</h3>
                <p className="text-gray-600 text-sm">
                  Required coverage for commercial vehicles
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-blue-600 mt-1 mr-3" />
              <div>
                <h3 className="font-semibold mb-1">Physical Damage</h3>
                <p className="text-gray-600 text-sm">
                  Protect your equipment investment
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-blue-600 mt-1 mr-3" />
              <div>
                <h3 className="font-semibold mb-1">Cargo Insurance</h3>
                <p className="text-gray-600 text-sm">
                  Coverage for goods in transit
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Ready to Compare Quotes?
          </h2>
          <p className="text-gray-600 mb-6">
            Select your city above to compare local insurance providers and get competitive quotes.
          </p>
        </div>
      </div>
    </>
  );
}