import React, { useContext } from 'react';
import classes from './About.module.css';


const About = () => {

    return (
        <div className={`${classes.aboutSection} max-width`}>
            <div className={classes.wrapper}>
                <h1>About</h1>
                <p>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We&apos;ll bring those teams to you.</p>
            </div>

        </div>
    );
};

export default About;