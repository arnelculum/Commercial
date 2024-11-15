import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Shield, Phone, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { states } from '../data/states';
import { Helmet } from 'react-helmet-async';

interface InsuranceProvider {
  name: string;
  phone: string;
  description: string;
  services: string[];
  features: string[];
  website?: string;
  additionalServices: string[];
}

export default function CityPage() {
  const [expandedProvider, setExpandedProvider] = useState<string | null>(null);
  const { stateId, citySlug } = useParams();
  const state = states.find(s => s.abbreviation.toLowerCase() === stateId?.toLowerCase());
  const city = state?.cities.find(c => c.toLowerCase().replace(/\s+/g, '-') === citySlug);
  
  if (!state || !city) {
    return <div>Location not found</div>;
  }

  // Get insurance providers for this state
  const insuranceProviders = state.insuranceProviders || [];

  // SEO metadata - Updated per requirements
  const metaTitle = `Commercial Trucking Insurance in ${city}, ${state.abbreviation}`;
  
  const metaDescription = `Are you looking for commercial trucking insurance in ${city}, ${state.abbreviation}? Check out our directory of insurance providers servicing your state and city.`;

  // Updated schema with more specific location data
  const directorySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": insuranceProviders.map((provider, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "InsuranceAgency",
        "name": provider.name,
        "telephone": provider.phone,
        "description": provider.description,
        "areaServed": {
          "@type": "City",
          "name": city,
          "containedInPlace": {
            "@type": "State",
            "name": state.name,
            "address": {
              "@type": "PostalAddress",
              "addressRegion": state.abbreviation,
              "addressCountry": "US"
            }
          }
        },
        "serviceType": "Commercial Truck Insurance"
      }
    }))
  };

  const toggleProvider = (providerName: string) => {
    if (expandedProvider === providerName) {
      setExpandedProvider(null);
    } else {
      setExpandedProvider(providerName);
    }
  };

  // Replace toggleForm with direct URL handler
  const handleQuoteRequest = () => {
    window.open('https://form.jotform.com/243191254141145', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://commercialinsurancefortruckers.com/state/${stateId?.toLowerCase()}/${citySlug}`} />
        <script type="application/ld+json">
          {JSON.stringify(directorySchema)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to={`/state/${stateId?.toLowerCase()}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to {state.name}
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Commercial Truck Insurance in {city}, {state.abbreviation}
          </h1>
          <p className="text-xl text-gray-600">
            Compare Local Insurance Providers & Get Quotes
          </p>
        </div>

        {/* Insurance Provider Listings */}
        <div className="space-y-6 mb-8">
          {insuranceProviders.map((provider, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                expandedProvider === provider.name ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {/* Provider Header - Always Visible */}
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleProvider(provider.name)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    {provider.name === "Driver Advantage Insurance" && (
                      <img 
                        src="/driveradvantage.webp"
                        alt="Driver Advantage Logo"
                        className="h-20 w-auto"
                      />
                    )}
                    <div>
                      <h2 className="text-2xl font-bold text-blue-900 mb-2">{provider.name}</h2>
                      <p className="text-gray-600 text-sm max-w-2xl">
                        Your partner in the transportation industry providing customized insurance solutions. Click to learn more about our comprehensive coverage options.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center ml-4">
                    {expandedProvider === provider.name ? (
                      <ChevronUp className="h-6 w-6 text-blue-600" />
                    ) : (
                      <>
                        <ChevronDown className="h-6 w-6 text-blue-600" />
                        <span className="text-sm text-blue-600 mt-1">View Details</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedProvider === provider.name && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">Coverage Options:</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {provider.services.map((service, idx) => (
                          <span key={idx} className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {service}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-lg font-semibold text-blue-800 mb-3">Why Choose Us:</h3>
                      <ul className="list-disc list-inside mb-6 text-gray-600 space-y-2">
                        {provider.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
                        Get Your Free Quote
                      </h3>
                      
                      <a
                        href={`tel:${provider.phone}`}
                        className="block w-full text-center bg-yellow-500 text-blue-900 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors mb-4"
                      >
                        Call Now: {provider.phone}
                      </a>

                      <button
                        onClick={handleQuoteRequest}
                        className="block w-full text-center bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Request Online Quote
                      </button>
                    </div>
                  </div>

                  {provider.additionalServices && (
                    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">Additional Services:</h3>
                      <ul className="grid grid-cols-2 gap-2 text-gray-600">
                        {provider.additionalServices.map((service, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
