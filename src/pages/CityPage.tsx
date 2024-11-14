import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Shield, Phone, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { states } from '../data/states';
import { Helmet } from 'react-helmet-async';
import HubSpotForm from '../components/HubSpotForm';

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
  const [showForm, setShowForm] = useState<string | null>(null);
  const { stateId, citySlug } = useParams();
  const state = states.find(s => s.abbreviation.toLowerCase() === stateId?.toLowerCase());
  const city = state?.cities.find(c => c.toLowerCase().replace(/\s+/g, '-') === citySlug);
  
  if (!state || !city) {
    return <div>Location not found</div>;
  }

  // Get insurance providers for this state
  const insuranceProviders = state.insuranceProviders || [];

  // SEO metadata
  const metaTitle = `Commercial Truck Insurance Providers in ${city}, ${state.abbreviation} | Find Local Coverage`;
  const metaDescription = `Compare top commercial truck insurance providers in ${city}, ${state.abbreviation}. Get quotes for auto liability, physical damage, and cargo coverage from local insurance agencies.`;
  const metaKeywords = `commercial truck insurance ${city}, trucking insurance providers ${state.name}, truck insurance agents ${city}, commercial vehicle insurance ${city} ${state.abbreviation}`;

  // Insurance Directory Schema
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
            "name": state.name
          }
        }
      }
    }))
  };

  const toggleProvider = (providerName: string) => {
    if (expandedProvider === providerName) {
      setExpandedProvider(null);
      setShowForm(null);
    } else {
      setExpandedProvider(providerName);
    }
  };

  const toggleForm = (providerName: string) => {
    setShowForm(showForm === providerName ? null : providerName);
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
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
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Provider Header - Always Visible */}
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleProvider(provider.name)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {provider.name === "Driver Advantage Insurance" && (
                      <img 
                        src="/driveradvantage.webp"
                        alt="Driver Advantage Logo"
                        className="h-16 w-auto"
                      />
                    )}
                    <h2 className="text-2xl font-bold text-blue-900">{provider.name}</h2>
                  </div>
                  {expandedProvider === provider.name ? 
                    <ChevronUp className="h-6 w-6 text-blue-600" /> : 
                    <ChevronDown className="h-6 w-6 text-blue-600" />
                  }
                </div>
              </div>

              {/* Expanded Content */}
              {expandedProvider === provider.name && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 mb-4">{provider.description}</p>
                  
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Coverage Options:</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {provider.services.map((service, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {service}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Why Choose Us:</h3>
                  <ul className="list-disc list-inside mb-4 text-gray-600">
                    {provider.features.map((feature, idx) => (
                      <li key={idx} className="mb-1">{feature}</li>
                    ))}
                  </ul>

                  {provider.additionalServices && (
                    <>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">Additional Services:</h3>
                      <ul className="list-disc list-inside mb-4 text-gray-600">
                        {provider.additionalServices.map((service, idx) => (
                          <li key={idx} className="mb-1">{service}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  <div className="mt-6 space-y-4">
                    <a
                      href={`tel:${provider.phone}`}
                      className="block w-full text-center bg-yellow-500 text-blue-900 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors"
                    >
                      Get Your Free Quote: {provider.phone}
                    </a>
                    
                    <button
                      onClick={() => toggleForm(provider.name)}
                      className="block w-full text-center bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Request Online Quote
                    </button>

                    {showForm === provider.name && (
                      <div className="mt-6">
                        <HubSpotForm />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
