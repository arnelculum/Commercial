import React, { useEffect } from 'react';

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

export default function HubSpotForm() {
  useEffect(() => {
    // Make sure HubSpot script is loaded
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "46656651",
        formId: "93b31b28-d843-48c0-ae77-9b78a1942dfe",
        target: "#hubspot-form-container"
      });
    }
  }, []);

  return <div id="hubspot-form-container"></div>;
} 