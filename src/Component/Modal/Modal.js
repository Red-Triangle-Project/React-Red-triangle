import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import millify from 'millify';
import './Modal.css'; 

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
        <BootstrapModal show={show} onHide={onClose}>
            <BootstrapModal.Body>
                {property && (
                    <div>
                        <img src={property.coverPhoto?.url} alt={property.title} className="property-image" />
                        <p>Price: {millify(property.price)}</p>
                        <p>{property.title}</p>
                        <p>{property.description}</p>
                    </div>
                )}
            </BootstrapModal.Body>
            <BootstrapModal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveToFavorites}>
                    Add to Favorite
                </Button>
            </BootstrapModal.Footer>
        </BootstrapModal>
    );
}

export default Modal;

