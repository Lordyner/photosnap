import React from 'react';
import classes from './ImageCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

const ImageCard = ({ image, alt, title, author, CTA }) => {
    return (
        <div className={classes.card}>
            <Image src={image} alt={alt} className={classes.cardImg} />
            <div className={classes.text}>
                <h3>{title}</h3>
                <p className={classes.author}>by {author}</p>
                <div className={classes.separator} />
                <Link className='secondary-link-dark' href=''>{CTA}</Link>
            </div>
        </div>
    );
};

export default ImageCard;