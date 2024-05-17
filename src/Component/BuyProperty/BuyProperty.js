import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BProperty from './BProp/Bprop';

function BuyProperty() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:3001/properties/list', {
          params: {
            locationExternalIDs: '5002',
            purpose: 'for-sale',
            hitsPerPage: 6,
          },
        });
        setProperties(response.data.hits);
      } catch (err) {
        console.error('Error fetching property data:', err);
        setError('An error occurred while fetching property data');
      }
    };
    fetchProperties();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Properties for Sale</h1>
      <div className="property-list">
        {properties.map((property) => (
          <BProperty key={property.externalID} property={property} />
        ))}
      </div>
    </div>
  );
}

export default BuyProperty;

