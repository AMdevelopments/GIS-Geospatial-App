// Map.js
import React, { useEffect, useRef } from 'react';

// Define the initMap function globally before the component definition
window.initMap = function() {
  // Placeholder for map initialization
};

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Update the initMap function with the actual implementation
    window.initMap = () => {
      // Check if the Google Maps API has been loaded before trying to use it
      if (window.google && window.google.maps) {
        new window.google.maps.Map(mapRef.current, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      } else {
        console.error('Google Maps API not loaded yet.');
      }
    };

    // Append the initMap function to the window object immediately
    // to ensure it's available when the Google Maps script loads
    window.initMap();

    // Clean up on unmount
    return () => {
      // Remove the initMap reference when the component is unmounted
      delete window.initMap;
    };
  }, []);

  return <div ref={mapRef} id="map" style={{ height: '400px', width: '100%' }} />;
};

export default Map;





