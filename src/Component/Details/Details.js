import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import millify from 'millify';
import Modal from '../Modal/Modal';
import './Details.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import verified from '../assets/img/verified-icon.jpg'
import notverified from '../assets/img/Notverified-icon.png'

function Details() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="Details__cont">
         <article className="Bp__card">

        {/* agency */}
        <div className="Details__logo-container">
          <img className="Details__logo" src={agency.logo.url} alt="Agency Logo" />
          <h2 className="Details__logodescription">{agency.name}</h2>
        </div>

        {/* photo-gallery */}
        <div className="photo-gallery-container">

          
        </div>
        <div className="photo-gallery">
          <div className="options">
            {photos.slice(0, 10).map((photo, index) => (
              <div
                key={index}
                className={`option ${index === activeIndex ? 'active' : ''}`}
                style={{ '--optionBackground': `url(${photo.url})` }}
                onClick={() => handleImageClick(index)}
              >
                <div className="shadow"></div>
                <div className="label">
                  <div className="icon">
                    <i className="fas fa-image"></i>
                  </div>
                  <div className="info">
                    <div className="main">Image {index + 1}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      <div className="Details__container"> 

      {/* Details data */}
      <div className="Details__data">

      <h2 className="popular__title">{title}</h2>
      <h2 className="popular__price"><span>$</span>Price: {millify(price)} {rentFrequency}</h2>
      <p>Description: {description}</p>

    {/* Amenities */}
      <div>
      <p >
    Amenities:{" "}
    {amenities.map((amenity, index) => (
      <span key={index}>
        {amenity.text}
        {index === amenities.length - 1 ? '.' : ', '}
      </span>
    ))}
       </p>
        </div>


     <button class="Details__card-button">Rooms: {rooms}</button>
      <button class="Details__card-button">Baths: {baths}</button>
      <button class="Details__card-button">Area: {millify(area)} sqft</button>
      <button class="Details__card-button">Type: {type}</button>
      <button class="Details__card-button">Purpose: {purpose}</button>
      <button class="Details__card-button">Furnishing Status: {furnishingStatus}</button>

<div className="verified-container">
    {property.isVerified ? (
        <img src={verified} alt="Verified" className="verified__img" />
    ) : (
        <img src={notverified} alt="Not Verified" className="verified__img" />
    )}
    <p className="Bp__description">{property.isVerified ? 'Verified' : 'Not Verified'}</p>
</div>

    {/* Modal */}
<button onClick={openModal} class="favorite__card-button">Add to Favorite</button>
      <Modal
        show={showModal}
        onClose={closeModal}
        property={property}
      />

    </div>
    </div>
    </div>

  );
}

export default Details;
