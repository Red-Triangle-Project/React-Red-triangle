import React from 'react';
import './ContactSection.css';
import contact from './contact.png';
 
 
function ContactSection() {
    return (
        <main>
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
                            <div className="contact__card-box">
                                <div className="contact__card-info">
                                    <i className='bx bxs-phone-call'></i>
 
                                    <div>
                                        <h3 className="contact__card-title">
                                            Call
                                        </h3>
                                        <p className="contact__card-description">
                                            022.321.165.19
                                        </p>
                                    </div>
                                </div>
 
                                <button className="button contact__card-button">
                                    Call Now
                                </button>
                            </div>
 
                            <div className="contact__card-box">
                                <div className="contact__card-info">
                                    <i className='bx bxs-message-rounded-dots'></i>
 
                                    <div>
                                        <h3 className="contact__card-title">
                                            Chat
                                        </h3>
                                        <p className="contact__card-description">
                                            022.321.165.19
                                        </p>
                                    </div>
                                </div>
 
                                <button className="button contact__card-button">
                                    Chat Now
                                </button>
                            </div>
 
                            <div className="contact__card-box">
                                <div className="contact__card-info">
                                    <i className='bx bxs-video'></i>
 
                                    <div>
                                        <h3 className="contact__card-title">
                                            Video Call
                                        </h3>
                                        <p className="contact__card-description">
                                            022.321.165.19
                                        </p>
                                    </div>
                                </div>
 
                                <button className="button contact__card-button">
                                    Video Call Now
                                </button>
                            </div>
 
                            <div className="contact__card-box">
                                <div className="contact__card-info">
                                    <i className='bx bxs-envelope'></i>
 
                                    <div>
                                        <h3 className="contact__card-title">
                                            Message
                                        </h3>
                                        <p className="contact__card-description">
                                            022.321.165.19
                                        </p>
                                    </div>
                                </div>
 
                                <button className="button contact__card-button">
                                    Message Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
 
export default ContactSection;