// components/Features.js
import React, { useEffect, useState } from 'react';
import './_features.scss'; // Ensure this file contains the necessary styles

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/features', {
          headers: {
            'Accept': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFeatures(data);
      } catch (error) {
        console.error('Error fetching features:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  if (loading) return <p>Loading features...</p>;
  if (error) return <p>Error loading features: {error}</p>;

  return (
    <section className="features-section my-5">
      <div className="container">
        <h2 className="feature-title text-center mb-4">Powerful GIS & Geospatial Tools</h2>
        <div className="row">
          {features.map((feature) => (
            <div key={feature._id} className="col-md-4 feature-item mb-4">
              <div className="card h-100">
                <img src={feature.image} alt={feature.title || 'Feature'} className="card-img-top" />
                <div className="card-body">
                  <h3 className="card-title">{feature.title}</h3>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;







