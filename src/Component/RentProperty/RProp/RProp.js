import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import millify from 'millify'; // Import millify

function RProperty({ property }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const openModal = (property) => {
    setShowModal(true);
    setSelectedProperty(property);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProperty(null);
  };

  return (
    <div className="property-card">
      <Link to={`/property/${property.externalID}`}>
        <img src={property.coverPhoto.url} alt={property.title} className="property-image" />
        <h2>{property.title}</h2>
        <p>Price: {millify(property.price)}</p>
        <p>Rent Frequency: {property.rentFrequency || 'N/A'}</p>
        <p>Rooms: {property.rooms}</p>
        <p>Baths: {property.baths}</p>
        <p>Area: {millify(property.area)} sqft</p>
        <p>Agency: {property.agency.name}</p>
        <img src={property.agency.logo.url} alt="Agency Photo" />
        <p>{property.isVerified ? 'Verified' : 'Not Verified'}</p>
      </Link>
      <button onClick={() => openModal(property)}>Add to Favorite</button>
      <Modal
        show={showModal}
        onClose={closeModal}
        property={selectedProperty}
      />
    </div>
  );
}

export default RProperty;
