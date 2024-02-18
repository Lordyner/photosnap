import React from 'react';
import classes from './Hero.module.css';

const Hero = () => {

    return (

        <section id="hero" className={`${classes.heroContainer} max-width`}>
            <h1>Find the <br /> best <span className={classes.coloredWord}>talent</span></h1>
            <p>Finding the right people and building high performing teams can be hard. Most companies aren&apos;t tapping into the abundance of global talent. We&apos;re about to change that.</p>
        </section>
    );
};

export default Hero;