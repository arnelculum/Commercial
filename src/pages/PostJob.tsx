import React from 'react';
import { CreditCard, Truck, Building } from 'lucide-react';

export default function PostJob() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Post Your CDL Job Listing
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Reach thousands of qualified CDL drivers across the United States
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-500 mb-4">
            <Truck className="h-12 w-12" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Targeted Reach</h3>
          <p className="text-gray-600">
            Connect with qualified CDL drivers actively seeking opportunities in your area
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-500 mb-4">
            <Building className="h-12 w-12" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Company Profile</h3>
          <p className="text-gray-600">
            Showcase your company culture and benefits to attract the best talent
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-500 mb-4">
            <CreditCard className="h-12 w-12" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Simple Pricing</h3>
          <p className="text-gray-600">
            Transparent pricing with no hidden fees or long-term commitments
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Ready to Post Your Job?
        </h2>
        <div className="text-center">
          <a
            href="https://buy.stripe.com/4gw9DDfIt3fZ16E002"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-blue-900 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-lg"
          >
            Post a Job Now
          </a>
          <p className="mt-4 text-gray-600">
            Simple, transparent pricing. No hidden fees.
          </p>
        </div>
      </div>
    </div>
  );
}
