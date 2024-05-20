import React from 'react';
import './PopularSection.css';
import popular2 from '../../assets/img/popular2.jpg';
import popular3 from '../../assets/img/popular3.jpg';
 
const PopularSection = () => {
  const residences = [
    {
      img: popular2,
      link: '/RentProperty',
      price: '1,200 - 2,500',
      title: 'Popular Houses for Rent',
      description: 'Explore our array of ready-to-occupy residences, eagerly awaiting your arrival. From delightful starter homes to opulent dwellings, our assortment presents a wide spectrum of choices to align with your tastes and financial plan. Seize the chance to secure your ideal rental abode – peruse our listings now and discover the perfect fit for you!',
    },
    {
      img: popular3,
      link: '/BuyProperty',
      price: '250,000 - 750,000',
      title: 'Popular Houses for Sale',
      description: 'Dive into our collection of move-in ready homes that are waiting for you to make them your own. From charming starter houses to luxurious estates, our inventory offers a diverse range of options to meet your preferences and budget. Don\'t miss out on the opportunity to own your dream home – browse our listings and find your perfect match today!',
    },
  ];
 
  return (
    <section className="popular section" id="popular">
      <div className="container">
        <span className="section__subtitle">Best Choice</span>
        <h2 className="section__title">Popular Residences<span>.</span></h2>
        <div className="popular__container">
          {residences.map((residence, index) => (
            <article key={index} className="popular__card">
              <a href={residence.link}>
                <img src={residence.img} alt="" className="popular__img" />
              </a>
              <div className="popular__data">
                <h2 className="popular__price">
                  <span>$</span>{residence.price}
                </h2>
                <h3 className="popular__title">{residence.title}</h3>
                <p className="popular__description">{residence.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default PopularSection;