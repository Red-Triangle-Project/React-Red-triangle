import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import millify from 'millify'; // Import millify
import "./FavPro.css"; // Import the CSS file

function FavPro() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        try {
            const res = await axios.get('http://localhost:3001/getProperty');
            setProperties(res.data);
        } catch (error) {
            console.error("Error fetching properties:", error);
        }
    };

    const deleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/deleteProperty/${id}`);
            setProperties((prev) => prev.filter(prop => prop.id !== id));
        } catch (error) {
            console.error("Error deleting property:", error);
        }
    };

    return (
        <div className="container">
            <h2>Favorite Properties</h2>
            {properties.map(property => (
                <div className="property" key={property.id}>
                    <img src={property.image} alt={property.name} />
                    <h3>{property.name}</h3>
                    <p>Price: ${millify(property.price)}</p>
                    <Button variant="danger" onClick={() => deleteItem(property.id)}>Delete</Button>
                </div>
            ))}
        </div>
    );
}

export default FavPro;
