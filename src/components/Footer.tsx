import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base text-gray-500">
            &copy; {new Date().getFullYear()} CDL Jobs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
