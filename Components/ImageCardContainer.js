import React from 'react';
import classes from './ImageCardContainer.module.css';
import ImageCard from './ImageCard';

const ImageCardContainer = ({ cards }) => {
    return (
        <div className={classes.container}>
            {cards.map((card, index) => {
                return (
                    <ImageCard key={index} image={card.image} alt={card.alt} title={card.title} author={card.author} CTA={card.CTA} />
                )
            })}
        </div>
    );
};

export default ImageCardContainer;