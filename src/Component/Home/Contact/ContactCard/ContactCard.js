import React from 'react';
import './ContactCard.css'

function ContactCard({ icon, title, description, buttonText }) {
    return (
            <div className="contact__card-info">
                <i className={icon}></i>
                <div>
                    <h3 className="contact__card-title">{title}</h3>
                    <p className="contact__card-description">{description}</p>
                </div>
            </div>
    );
}

export default ContactCard;


