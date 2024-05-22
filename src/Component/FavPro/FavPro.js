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
        <div className={`favpro__description ${isExpanded ? 'expanded' : ''}`}>
            <p>
                {isExpanded ? strippedText : truncateText(strippedText, 20)}
            </p>
            <Button variant="link" onClick={toggleExpansion} className="favpro__toggle-btn">
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
        <section className="favpro__section popular section" id="Buypopular">
            <Container>
                <div className="favpro__container popular__container">
                    <article className="favpro__card Bp__card">
                        <span className="favpro__subtitle section__subtitle">Your Choice</span>
                        <h2 className="favpro__title section__title">Favorite Properties<span>.</span></h2>
                        <Row>
                            {properties.map(property => (
                                <Col key={property.id} xs={12} sm={6} md={6} lg={4}>
                                    <div className="favpro__property property">
                                        <div className="favpro__property-content property-content">
                                            <img src={property.image} alt={property.name} className="favpro__img Bp__img" />
                                            <h2 className="favpro__property-title popular__title">{property.name}</h2>
                                            <h2 className="favpro__property-price popular__price">
                                                <span>$</span>Price: ${millify(property.price)}
                                            </h2>
                                            <Description text={property.details} />
                                        </div>
                                        <Button variant="danger" onClick={() => deleteItem(property.id)} className='favpro__delete-button favpro__card-button'>Delete</Button>
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
