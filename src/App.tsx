import React from 'react';
import { Building2, Shield, Phone, Mail, ArrowRight, CheckCircle2, Users2, Briefcase } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl text-gray-900">InsureDirectory</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Get Listed
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Find the Right Commercial Insurance Provider
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with trusted insurance providers specializing in business protection and risk management.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
                <span>Search Directory</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="flex items-center space-x-2 border border-gray-300 bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition w-full sm:w-auto">
                <span>List Your Business</span>
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <Building2 className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Verified Providers</h3>
                <p className="text-gray-600">All listed insurance providers are thoroughly vetted and verified.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Users2 className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                <p className="text-gray-600">Connect with specialists who understand your business needs.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Briefcase className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Business Focused</h3>
                <p className="text-gray-600">Tailored solutions for businesses of all sizes and industries.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Directory?</h2>
                <div className="space-y-4">
                  {[
                    'Comprehensive provider listings',
                    'Detailed coverage information',
                    'Direct contact with insurers',
                    'Free quote comparisons',
                    'Industry-specific expertise'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                  alt="Business professionals discussing insurance"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600">Have questions? Our team is here to help.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-gray-600">1-800-INSURE</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-gray-600">contact@insuredirectory.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-xl text-white">InsureDirectory</span>
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()} InsureDirectory. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;