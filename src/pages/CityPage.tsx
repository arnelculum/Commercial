import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Shield, Phone, ArrowLeft } from 'lucide-react';
import { states } from '../data/states';
import { Helmet } from 'react-helmet-async';

interface InsuranceProvider {
  name: string;
  phone: string;
  description: string;
  services: string[];
  website?: string;
  rating?: number;
  reviewCount?: number;
}

export default function CityPage() {
  const { stateId, citySlug } = useParams();
  const state = states.find(s => s.abbreviation.toLowerCase() === stateId?.toLowerCase());
  const city = state?.cities.find(c => c.toLowerCase().replace(/\s+/g, '-') === citySlug);
  
  if (!state || !city) {
    return <div>Location not found</div>;
  }

  // SEO metadata
  const metaTitle = `Commercial Truck Insurance Providers in ${city}, ${state.abbreviation} | Find Local Coverage`;
  const metaDescription = `Compare top commercial truck insurance providers in ${city}, ${state.abbreviation}. Get quotes for auto liability, physical damage, and cargo coverage from local insurance agencies.`;
  const metaKeywords = `commercial truck insurance ${city}, trucking insurance providers ${state.name}, truck insurance agents ${city}, commercial vehicle insurance ${city} ${state.abbreviation}`;

  // Local Insurance Providers
  const insuranceProviders: InsuranceProvider[] = [
    {
      name: "Driver Advantage Insurance",
      phone: "208-274-8113",
      description: "Specializing in comprehensive coverage for trucking companies with competitive rates and personalized service.",
      services: ["Auto Liability", "Physical Damage", "Cargo Insurance", "General Liability"],
      website: "https://driveradvantage.com",
      rating: 4.8,
      reviewCount: 127
    },
    {
      name: "Trucking Insurance Specialists",
      phone: "555-0123",
      description: "Over 20 years of experience serving the trucking industry with tailored insurance solutions.",
      services: ["Commercial Auto", "Workers Comp", "Cargo Coverage", "Umbrella Insurance"],
      rating: 4.6,
      reviewCount: 89
    }
    // Add more providers as needed
  ];

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
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">{provider.name}</h2>
                  <p className="text-gray-600 mb-4">{provider.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {provider.services.map((service, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  {provider.rating && (
                    <div className="text-yellow-500 font-bold mb-1">
                      {provider.rating} / 5.0
                      <span className="text-gray-500 text-sm font-normal ml-1">
                        ({provider.reviewCount} reviews)
                      </span>
                    </div>
                  )}
                  <a
                    href={`tel:${provider.phone}`}
                    className="inline-block bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
                  >
                    Call {provider.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Request Form */}
        <div id="quote-form" className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Compare Multiple Quotes</h2>
          <p className="text-gray-600 mb-6">
            Fill out one form to receive quotes from multiple providers in your area.
          </p>
          <div id="hubspot-form"></div>
        </div>
      </div>
    </>
  );
}
