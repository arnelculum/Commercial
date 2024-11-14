import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://primepulsemedia.com/wp-content/uploads/2024/11/cdljobsbystate2.jpg" 
                alt="CDL Jobs" 
                className="h-20" // Adjust height as needed
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center">
            <Link
              to="/post-job"
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#2557a7] hover:bg-[#1f4d98]"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden border-t border-gray-200`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/post-job"
            className="block px-4 py-2 text-base font-medium text-[#2557a7] hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Post a Job
          </Link>
        </div>
      </div>
    </nav>
  );
}
