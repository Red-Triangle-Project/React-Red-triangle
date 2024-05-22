import React, { useState } from 'react';
import './ValueSection.css';
import value from '../../assets/img/value.jpg';

const ValueSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            icon: 'bxs-shield-x',
            title: 'Best interest rates on the market',
            description: 'We offer the most competitive interest rates, ensuring you get the best deal available.',
        },
        {
            icon: 'bxs-x-square',
            title: 'Prevent unstable prices',
            description: 'Our pricing is stable and transparent, protecting you from unexpected cost fluctuations.',
        },
        {
            icon: 'bxs-bar-chart-square',
            title: 'Best prices on the market',
            description: 'Enjoy unbeatable prices with our commitment to providing the best value for your investment.',
        },
        {
            icon: 'bxs-check-square',
            title: 'Security of your data',
            description: 'Your data is safe with us, thanks to our stringent security measures and protocols.',
        },
    ];
    
    return (
        <section className="value section" id="value">
            <div className="value__container container grid">
                <div className="value__images">
                    <div className="value__orbe"></div>
                    <div className="value__img">
                        <img src={value} alt="Value" />
                    </div>
                </div>

                <div className="value__content">
                    <div className="value__data">
                        <span className="section__subtitle">Our Value</span>
                        <h2 className="section__title">
                            Value We Give To You<span>.</span>
                        </h2>
                        <p className="value__description">
                            We are always ready to help by providing the best service for you. We believe a good place to live can make your life better.
                        </p>
                    </div>

                    <div className="value__accordion">
                        {accordionData.map((item, index) => (
                            <div
                                key={index}
                                className={`value__accordion-item ${activeIndex === index ? 'accordion-open' : ''}`}
                            >
                                <header className="value__accordion-header" onClick={() => toggleAccordion(index)}>
                                    <i className={`bx ${item.icon} value__accordion-icon`}></i>
                                    <h3 className="value__accordion-title">{item.title}</h3>
                                    <div className="value__accordion-arrow">
                                        <i className='bx bxs-down-arrow'></i>
                                    </div>
                                </header>
                                <div
                                    className="value__accordion-content"
                                    style={{ height: activeIndex === index ? 'auto' : '0' }}
                                >
                                    <p className="value__accordion-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueSection;
