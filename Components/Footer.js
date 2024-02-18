import React, { useContext } from 'react';
import classes from './Footer.module.css';
import logo from '@/public/images/logo.svg';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import iconFacebook from '@/public/images/icon-facebook.svg';
import iconTwitter from '@/public/images/icon-twitter.svg';
import iconPinterest from '@/public/images/icon-pinterest.svg';

const Footer = () => {
    const { isDesktopResolution } = useContext(GlobalContext);
    return (
        <footer className={`${classes.footer}`}>
            <div className={`${classes.wrapper} ${isDesktopResolution ? 'max-width' : ''}`}>
                <div className={classes.contactInfoAndLinksContainer}>
                    <div className={classes.logoAndLinksContainer}>
                        <Link href="/">
                            <Image src={logo} alt='logo payAPI' className={classes.logoImg} width={160} height={40} />
                        </Link>
                        <div className={`${classes.links}`}>
                            <Link href="/" className={classes.link}>home</Link>
                            <Link href="/about" className={classes.link}>about</Link>
                        </div>
                    </div>
                    <div className={classes.contactInformation}>
                        <p>987 Hillcrest Lane</p>
                        <p>Irvine, CA</p>
                        <p>California 92714</p>
                        <p>Call Us : 949-833-7432</p>
                    </div>
                </div>
                <div className={classes.socialAndCopyrightContainer}>
                    <div className={classes.socialLinks}>
                        <a href="" className={classes.icon} target='_blank'>
                            <Image src={iconFacebook} alt='facebook' width={24} height={24} />
                        </a>
                        <a href="" className={classes.icon} target='_blank'>
                            <Image src={iconPinterest} alt='pinterest' width={24} height={24} />
                        </a>
                        <a href="" className={classes.icon} target='_blank'>
                            <Image src={iconTwitter} alt='pinterest' width={24} height={24} />
                        </a>
                    </div>
                    <div className={classes.copyRight}>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;