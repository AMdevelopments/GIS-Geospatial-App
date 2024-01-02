// components/HomePage.js
import React from 'react';
import Map from './Map';

const HomePage = () => {
  return (
    <main className="flex-fill">
      <div className="container text-center mt-5">
        <h1 className="page-title mb-4">GIS & Geospatial Application</h1>
        <Map />
        {/* You can add more content here that belongs to the HomePage */}
      </div>
    </main>
  );
};

export default HomePage;
