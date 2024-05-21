import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import millify from 'millify';
import "./FavPro.css";
import { Container, Row, Col } from 'react-bootstrap';

function stripHtmlTags(html) {
    let tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}

function truncateText(text, wordLimit) {
    const words = text.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
}

function Description({ text }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const strippedText = stripHtmlTags(text);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <p className="Bp__description">
                {isExpanded ? strippedText : truncateText(strippedText, 20)}
            </p>
            <Button variant="link" onClick={toggleExpansion}>
                {isExpanded ? "See Less" : "See More"}
            </Button>
        </div>
    );
}

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
    }

    return (
        <section className="popular section" id="Buypopular">
            <Container>
                <div className="popular__container">
                    <article className="Bp__card">
                        <span className="section__subtitle">Your Choice</span>
                        <h2 className="section__title">Favorite Properties<span>.</span></h2>
                        <Row>
                            {properties.map(property => (
                                <Col key={property.id}>
                                    <div className="property">
                                        <div className="property-content">
                                            <img src={property.image} alt={property.name} className="Bp__img" />
                                            <h2 className="popular__title">{property.name}</h2>
                                            <h2 className="popular__price">
                                                <span>$</span>Price: ${millify(property.price)}
                                            </h2>
                                            <Description text={property.details} />
                                        </div>
                                        <Button variant="danger" onClick={() => deleteItem(property.id)} className='favpro__card-button'>Delete</Button>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </article>
                </div>
            </Container>
        </section>
    );
}

export default FavPro;
