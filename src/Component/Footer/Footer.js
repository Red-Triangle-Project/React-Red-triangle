import React from 'react';
import './Footer.css';
function Footer() {
    return (
        <footer className="footer section">
            <div className="footer__container container grid">
                <div>
                    <a href="#" className="footer__logo">
                        Tringle <i className='bx bxs-home-alt-2'></i>
                    </a>
                    <p className="footer__description">
                        Our vision is to make all people <br />
                        the best place to live for them.
                    </p>
                </div>
                <div className="footer__content">
                    <div>
                        <h3 className="footer__title">
                            Follow us
                        </h3>
                        <ul className="footer__social">
                            <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                                <i className='bx bxl-facebook-circle'></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                                <i className='bx bxl-instagram-alt'></i>
                            </a>
                            <a href="https://github.com/Red-Triangle-Project" target="_blank" className="footer__social-link">
                                <i className='bx bxl-github'></i>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__info container">
                <span className="footer__copy">
                    &#169;Triangle. All rights reserved
                </span>
            </div>
        </footer>
    );
}
export default Footer;