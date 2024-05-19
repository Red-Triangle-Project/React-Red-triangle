import './Header.css';
import { Link } from "react-router-dom";
 
function Header() {
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
                            <Link to="/BuyProperty" className="nav__link">
                                <i className='bx bx-building-house'></i>
                                <span>Sale</span>
                                </Link>
                        </li>
 
                        <li className="nav__item">
                        <Link to="/RentProperty" className="nav__link">
                                <i className='bx bx-award'></i>
                                <span>Rent</span>
                                </Link>
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
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
 
                {/* Theme change button */}
                <i className='bx bx-moon change-theme' id="theme-button"></i>
               
                <a href="/Search" className="button nav__button">search </a>
 
            </nav>
        </header>
    );
}
 
export default Header;