import React from 'react';
import { Link } from 'react-router-dom';

function RProperty({ property }) {
  return (
    <div className="property-card">
      <Link to={`/property/${property.externalID}`}>
        <img src={property.coverPhoto.url} alt={property.title} className="property-image" />
        <h2>{property.title}</h2>
        <p>Price: {property.price}</p>
        <p>Rent Frequency: {property.rentFrequency || 'N/A'}</p>
        <p>Rooms: {property.rooms}</p>
        <p>Baths: {property.baths}</p>
        <p>Area: {property.area} sqft</p>
        <p>Agency: {property.agency.name}</p>
        <img src= {property.agency.logo.url} alt="AgencyPhoto"/>
        <p>{property.isVerified ? 'Verified' : 'Not Verified'}</p>
      </Link>
    </div>
  );
}

export default RProperty;

