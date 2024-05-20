import React from 'react';
import './ReviewCard.css'; 

const ReviewCard = () => {
    return (
        <div className="review-card-container">
            <h2 className="review-card-title">Our Happy Clients</h2>
            <p className="review-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, atque? Repudiandae
                possimus asperiores hic nemo id a molestiae minus impedit!</p>
            
            <div className="review-card-section">
                
                <div className="review-card-item">
                    <div className="review-card-top">
                        <div className="review-card-image">
                            <img src="./client.png" alt="" />
                            <span className="client-name">Raju Sheoran</span>
                        </div>
                        <ul className="star-rating">
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-regular fa-star"></i></li>
                            <li><i className="fa-regular fa-star"></i></li>
                        </ul>
                    </div>
                    <article>
                        <p className="review-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit beatae ipsa
                            voluptatibus perferendis quos eaque nemo error tempora harum quas, laudantium tenetur, neque,
                            facere exercitationem!</p>
                        <p className="review-date">Jan 01, 2023</p>
                    </article>
                </div>

                
                <div className="review-card-item">
                    <div className="review-card-top">
                        <div className="review-card-image">
                            <img src="./client.png" alt="" />
                            <span className="client-name">Raju Sheoran</span>
                        </div>
                        <ul className="star-rating">
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-regular fa-star"></i></li>
                            <li><i className="fa-regular fa-star"></i></li>
                        </ul>
                    </div>
                    <article>
                        <p className="review-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit beatae ipsa
                            voluptatibus perferendis quos eaque nemo error tempora harum quas, laudantium tenetur, neque,
                            facere exercitationem!</p>
                        <p className="review-date">Jan 01, 2023</p>
                    </article>
                </div>

                
                <div className="review-card-item">
                    <div className="review-card-top">
                        <div className="review-card-image">
                            <img src="./client.png" alt="" />
                            <span className="client-name">Raju Sheoran</span>
                        </div>
                        <ul className="star-rating">
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-regular fa-star"></i></li>
                            <li><i className="fa-regular fa-star"></i></li>
                        </ul>
                    </div>
                    <article>
                        <p className="review-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit beatae ipsa
                            voluptatibus perferendis quos eaque nemo error tempora harum quas, laudantium tenetur, neque,
                            facere exercitationem!</p>
                        <p className="review-date">Jan 01, 2023</p>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;
