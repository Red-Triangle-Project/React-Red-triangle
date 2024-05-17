import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RentProperty() {
    const [properties, setProperties] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('http://localhost:3000/properties/list', {
                    params: {
                        locationExternalIDs: '5002',
                        purpose: 'for-rent',
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
            <h1>Properties for Rent</h1>
            <div className="property-list">
                {properties.map((property) => (
                    <div key={property.externalID} className="property-card">
                        <img src={property.coverPhoto.url} alt={property.title} className="property-image" />
                        <h2>{property.title}</h2>
                        <p>Price: {property.price}</p>
                        <p>Rent Frequency: {property.rentFrequency || 'N/A'}</p>
                        <p>Rooms: {property.rooms}</p>
                        <p>Baths: {property.baths}</p>
                        <p>Area: {property.area} sqft</p>
                        <p>Agency: {property.agency.name}</p>
                        <p>{property.isVerified ? 'Verified' : 'Not Verified'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RentProperty;
