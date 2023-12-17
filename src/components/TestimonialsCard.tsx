import React from "react";
import "../styles/TestimonialsCard.css"

interface ITestimonialCard{
    avatar: string;
    name: string;
    post: string;
    comment: string;
}

const TestimonialsCard: React.FC<ITestimonialCard> = ({avatar, name, post, comment}) => {
    const title = 'What our customer are saying'
    const firstElement = require('../assets/images/testimonials-card-element-1.png')
    const secondElement = require("../assets/images/testimonials-card-element-2.png")
    return(
        <div className="TestimonialsCard">
            <img className="TestimonialsCard-firstElement" src={firstElement}/>
            <img className="TestimonialsCard-secondElement" src={secondElement}/>
            <div className="TestimonialsCard-header">
                <span className="TestimonialsCard-title">{title}</span>
                <div className="TestimonialsCard-line"></div>
            </div>

            <div className="TestimonialsCard-body">
                <div className="TestimonialsCard-reviewer">
                    <img className="TestimonialsCard-avatar" src = {require(avatar) } alt={`Avatar of ${name}`}/>
                    <div className="TestimonialsCard-reviewer-text">
                        <span className="TestimonialsCard-name">{name}</span>
                        <span className="TestimonialsCard-post">{post}</span>
                    </div>
                </div>
                <span className="TestimonialsCard-comment">{comment}</span>
            </div>

        </div>
    )
}

export default TestimonialsCard;
export{}