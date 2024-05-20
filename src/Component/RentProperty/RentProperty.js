import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RProperty from './RProp/RProp';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../BuyProperty/BuyProperty.css';
 
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
 
const PopularSection = ({ properties }) => {
  const groupedProperties = chunkArray(properties, 3);
 
  return (
    <section className="popular section" id="Rentpopular">
      <Container>
        <span className="section__subtitle">Best Choice</span>
        <h2 className="section__title">Properties for Rent<span>.</span></h2>
        <Carousel indicators={false} nextLabel="" prevLabel="">
          {groupedProperties.map((group, index) => (
            <Carousel.Item key={index}>
              <Row>
                {group.map((property) => (
                  <Col key={property.externalID} xs={12} md={4}>
                    <RProperty property={property} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};
 
function RentProperty() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:3001/properties/list', {
          params: {
            locationExternalIDs: '5002',
            purpose: 'for-rent',
            hitsPerPage: 6,
          },
        });
        setProperties(response.data.hits);
      } catch (err) {
        console.error('Error fetching property data:', err);
        setError('An error occurred while fetching property data');
      }
    };
    fetchProperties();
  }, []);
 
  if (error) {
    return <div className="property-error">{error}</div>;
  }
 
  return <PopularSection properties={properties} />;
}
 
export default RentProperty;