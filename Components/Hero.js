import React from 'react';
import classes from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Hero = ({ image, alt, title, text, CTA, theme, withMainAccent, heroGridClass }) => {

    return (
        // TODO rename Hero component so it could be reused through the page
        // TODO add a prop to change color of bg and text

        <div className={`hero ${theme} ${heroGridClass}`}>
            <div className={`${withMainAccent ? 'mainAccent' : ''} heroText max-width grid-text`}>
                <h1>{title}</h1>
                <div className='heroTextContent'>
                    <p>{text}</p>
                    {CTA && <Link href="#" className={`secondary-link ${theme}`}>{CTA}</Link>}
                </div>
            </div>
            <Image src={image} alt={alt} className='heroImg grid-image' />
        </div>
    );
};

export default Hero;