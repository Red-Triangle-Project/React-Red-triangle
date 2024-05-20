import React, { useEffect } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.js";
 
function Header() {
    useEffect(() => {
        let lastScrollTop = 0;
        const header = document.getElementById('header');
 
        const onScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
 
            if (scrollTop > lastScrollTop) {
                header.style.top = '-80px';
            } else {
                header.style.top = '0';
            }
 
            lastScrollTop = scrollTop;
        };
 
        window.addEventListener('scroll', onScroll);
 
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);
 
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <Link to="/" className="nav__logo"> Triangle <i className='bx bxs-home-alt-2'></i></Link>
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/" className="nav__link active-link">
                                <i className='bx bx-home-alt-2'></i>
                                <span>Home</span>
                            </Link>
                        </li>
 
                        <li className="nav__item">
                        <a href="#Buypopular" className="nav__link">
                                <i className='bx bx-building-house'></i>
                                <span>Sale</span>
                                </a>
                        </li>
 
                        <li className="nav__item">
                        <a href="#Rentpopular" className="nav__link">
                                <i className='bx bx-building-house'></i>
                                <span>Rent</span>
                                </a>
                        </li>
 
                        <li className="nav__item">
                        <Link to="/WatchLater" className="nav__link">
                                <i className='bx bx-award'></i>
                                <span>Favorite</span>
                                </Link>
                        </li>
 
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className='bx bx-phone'></i>
                                <span>Contact Us</span>
                            </a>
                        </li>
                        <li className="nav__item">
                             <a href="#about-us" className="nav__link">
                                 <i className='bx bx-info-circle'></i>
                                 <span>About Us</span>
                             </a>
                         </li>
                    </ul>
                </div>
 
               
 
                <ThemeSwitcher/>
 
                <a href="/Search" className="button nav__button">Search </a>
 
            </nav>
        </header>
    );
}
 
export default Header;