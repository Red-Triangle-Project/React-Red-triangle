import React from 'react';
import { Link } from 'react-router-dom';
import millify from 'millify';
import './BProp.css'
import verified from '../../assets/img/verified-icon.jpg'
import notverified from '../../assets/img/Notverified-icon.png'
 
 
function BProperty({ property }) {
  return (
    <div className="popular__container">
       <article className="Bp__card">
       
       <div className="Bp__logo-container">
    <img className="Bp__logo" src={property.agency.logo.url} alt="AgencyPhoto" />
    <p className="Bp__logodescription">{property.agency.name}</p>
</div>
 
       <Link to={`/property/${property.externalID}`}>
        <img src={property.coverPhoto.url} alt={property.title} className="Bp__img" /> </Link>
        <div className="popular__data">
        <h2 className="popular__price"> <span>$</span>Price: {millify(property.price)}</h2>
          <h2 className="popular__title">{property.title}</h2>
          <p className="Bp__description">Rooms: {property.rooms}, Baths: {property.baths}, Area: {millify(property.area)} sqft</p>
       
          <div className="verified-container">
    {property.isVerified ? (
        <img src={verified} alt="Verified" className="verified__img" />
    ) : (
        <img src={notverified} alt="Not Verified" className="verified__img" />
    )}
    <p className="Bp__description">{property.isVerified ? 'Verified' : 'Not Verified'}</p>
</div>
 
        </div>
     
      </article>
    </div>
 
     
  );
}
 
export default BProperty;
