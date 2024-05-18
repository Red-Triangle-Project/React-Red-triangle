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
            description: 'Price we provide is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.',
        },
        {
            icon: 'bxs-x-square',
            title: 'Prevent unstable prices',
            description: 'Price we provide is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.',
        },
        {
            icon: 'bxs-bar-chart-square',
            title: 'Best prices on the market',
            description: 'Price we provide is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.',
        },
        {
            icon: 'bxs-check-square',
            title: 'Security of your data',
            description: 'Price we provide is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.',
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
