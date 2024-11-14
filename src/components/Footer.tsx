import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Find Your Perfect Commercial Truck Insurance Provider
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Compare trusted insurance agencies in your area and get the coverage your trucking business needs.
          </p>
          <Link
            to="/state"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Insurance Providers
          </Link>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-base text-gray-500">
              &copy; {new Date().getFullYear()} Commercial Insurance for Truckers. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
