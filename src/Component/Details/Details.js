import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import millify from 'millify';
import Modal from '../Modal/Modal.js';

function Details() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3001/properties/detail', {
          params: { externalID: id }
        });
        setProperty(response.data);
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  const {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos
  } = property;

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <img src={coverPhoto.url} alt={title} />
      <h1>{title}</h1>
      <p>Price: {millify(price)} {rentFrequency}</p>
      <p>Rooms: {rooms}</p>
      <p>Baths: {baths}</p>
      <p>Area: {millify(area)} sqft</p>
      <p>Agency: {agency.name}</p>
      <img src={agency.logo.url} alt="AgencyPhoto" />
      <p>Verified: {isVerified ? 'Yes' : 'No'}</p>
      <p>Description: {description}</p>
      <p>Type: {type}</p>
      <p>Purpose: {purpose}</p>
      <p>Furnishing Status: {furnishingStatus}</p>
      <div>
        <h2>Amenities</h2>
        <ul>
          {amenities.map((amenity, index) => (
            <li key={index}>{amenity.text}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Photos</h2>
        <div className="photo-gallery">
          {photos.map((photo, index) => (
            <img key={index} src={photo.url} alt={`PropertyImage ${index + 1}`} className="property-photo" />
          ))}
        </div>
      </div>
      <button onClick={openModal}>Add to Favorite</button>
      <Modal
        show={showModal}
        onClose={closeModal}
        property={property}
      />
    </div>
  );
}

export default Details;