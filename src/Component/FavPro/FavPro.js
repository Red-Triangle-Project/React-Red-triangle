import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import millify from 'millify';
import "./FavPro.css"; // Import the CSS file

function stripHtmlTags(html) {
    let tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }
function FavPro (){
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
        const res = await axios.delete(`http://localhost:3001/deleteProperty/${id}`);
             setProperties((prev) => prev.filter(prop => prop.id !== id));
    }
    return (
        <div className="container"> {/* Add container class */}
            <h2>Favorite Properties</h2>
            {properties.map(property => (
                <div className="property" key={property.id}> {/* Add property class */}
                    <img src={property.image} alt={property.name}/> {/* Add alt attribute */}
                    <h3>{property.name}</h3>
                    <p>Price: ${millify(property.price)}</p>
                    <p>Details: {stripHtmlTags(property.details)}</p>
                    <Button variant="danger" onClick={() => deleteItem(property.id)}>Delete</Button>
                </div>
            ))}
        </div>
    );
}
export default FavPro;