import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import './ContactSection.css';
import contact from './contact.png';

function ContactSection() {
    return (
        <section className="contact section" id="contact">
            <div className="contact__container container grid">
                <div className="contact__images">
                    <div className="contact__orbe"></div>
                    <div className="contact__img">
                        <img src={contact} alt="contact" />
                    </div>
                </div>
                <div className="contact__content">
                    <div className="contact__data">
                        <span className="section__subtitle">Contact Us</span>
                        <h2 className="section__title">
                            Easy to Contact us<span>.</span>
                        </h2>
                        <p className="contact__description">
                            Is there a problem finding your dream home? Need a
                            guide in buying first home? or need a consultation
                            on residential issues? just contact us.
                        </p>
                    </div>
                    <div className="contact__card">
                        <ContactCard
                            icon="bx bxs-phone-call"
                            title="Call"
                            description="022.321.165.19"
                            buttonText="Call Now"
                        />
                        <ContactCard
                            icon="bx bxs-message-rounded-dots"
                            title="Chat"
                            description="022.321.165.19"
                            buttonText="Chat Now"
                        />
                        <ContactCard
                            icon="bx bxs-video"
                            title="Video Call"
                            description="022.321.165.19"
                            buttonText="Video Call Now"
                        />
                        <ContactCard
                            icon="bx bxs-envelope"
                            title="Message"
                            description="022.321.165.19"
                            buttonText="Message Now"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;