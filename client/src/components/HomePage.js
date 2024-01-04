// components/HomePage.js
import React from 'react';
import './_homepage.scss';
import Map from './Map';

const HomePage = () => {
  return (
    <main className="home-page flex-fill">
      <div className="container text-center mt-5">
        <h1 className="page-title mb-4">GIS & Geospatial Application</h1>
        <Map />
        {/* Additional content here */}
      </div>
    </main>
  );
};

export default HomePage;

