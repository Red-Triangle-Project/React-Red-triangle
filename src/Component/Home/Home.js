import React from 'react';
import './Home.css';
import home from './home.jpg'

function Home() {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__data">
                    <h1 className="home__title">
                    {/* Explore Ideal Living Spaces */}
                    Explore <br />  Ideal Living <br /> Spaces
                    </h1>
                    <p className="home__description">
                    Easily find your perfect property hassle-free. Say goodbye to the struggle of house
                   hunting and discover a variety of residences tailored to your needs effortlessly.
                    </p>

                 

                    <div className="home__value">
                        <div>
                            <h1 className="home__value-number">
                                9K <span>+</span>
                            </h1>
                            <span className="home__value-description">
                                Premium <br /> Product
                            </span>
                        </div>
                        <div>
                            <h1 className="home__value-number">
                                2K <span>+</span>
                            </h1>
                            <span className="home__value-description">
                                Happy <br /> Customer
                            </span>
                        </div>
                        <div>
                            <h1 className="home__value-number">
                                28K <span>+</span>
                            </h1>
                            <span className="home__value-description">
                                Awards <br /> Winning
                            </span>
                        </div>
                    </div>
                </div>

                <div className="home__images">
                    <div className="home__orbe"></div>

                    <div className="home__img">
                        <img src={home} alt="Home" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Home;
