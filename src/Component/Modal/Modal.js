import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import millify from 'millify';
import './Modal.css'; // Import your CSS file

function Modal({ show, onClose, property }) {
  const handleSaveToFavorites = async () => {
    if (property) {
      try {
        await axios.post('http://localhost:3001/addProperty', {
          name: property.title,
          image: property.coverPhoto?.url,
          price: property.price,
          details: property.description
        });

        onClose();
      } catch (error) {
        console.error('Error adding property:', error.response ? error.response.data : error.message);
        alert('Failed to add property to favorites. Please try again.');
      }
    }
  };

  return (
    <BootstrapModal show={show} onHide={onClose} dialogClassName="custom-modal">
    <BootstrapModal.Body>
        {property && (
          <div>
            <img src={property.coverPhoto?.url} alt={property.title} className="Bp__img" />
            <h2 className="popular__price"><span>$</span>Price: {millify(property.price)}</h2>
            <h2 className="popular__title">{property.title}</h2>
            <p className="Bp__description">{property.description}</p>
          </div>
        )}
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
      <Button variant="secondary" onClick={handleSaveToFavorites} className='favoriteModal__card-button'> Add to Favorite</Button>
        <Button onClick={onClose} className='Modal__card-button'>Close</Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default Modal;
