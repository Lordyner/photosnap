import React from 'react';
import classes from './Director.module.css';
import Image from 'next/image';
import iconCross from '@/public/images/icon-cross.svg';
import iconClose from '@/public/images/icon-close.svg';
import twitterIcon from '@/public/images/icon-twitter.svg';
import linkedinIcon from '@/public/images/icon-linkedin.svg';

const Director = ({ name, title, image, alt, quote }) => {

    const [active, setActive] = React.useState(false);

    return (
        <div className={classes.wrapper}>
            <div className={classes.director}>
                <Image src={image} alt={alt} className={classes.avatar} />

                <div className={classes.info}>
                    <h3>{name}</h3>
                    <p>{title}</p>
                </div>
            </div>
            <button className={`${classes.buttonPlus} ${active ? classes.active : ''}`} onClick={() => setActive(!active)}>
                {!active && <Image src={iconCross} alt="icon cross" className={classes.crossIcon} />}
                {active && <Image src={iconClose} alt="icon close" className={classes.crossIcon} />}
            </button>
            <div className={`${classes.overlay} ${active ? classes.visibleOverlay : classes.hiddenOverlay}`}>
                <div className={classes.overlayContent}>
                    <h3>{name}</h3>
                    <p>{quote}</p>
                    <div className={classes.socialIcons}>
                        <Image src={twitterIcon} alt='twitter icon' />
                        <Image src={linkedinIcon} alt='linkedin icon' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Director;