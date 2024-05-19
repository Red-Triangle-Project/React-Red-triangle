import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';
import axios from 'axios';
import millify from 'millify'; // Import millify
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css'; // Import the CSS file

function Modal({ show, onClose, property }) {
    const handleSaveToFavorites = async () => {
        if (property) {
            await axios.post('http://localhost:3001/addProperty', {
                name: property.title,
                image: property.coverPhoto?.url,
                price: property.price,
                details: property.title
            });
            onClose();
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
