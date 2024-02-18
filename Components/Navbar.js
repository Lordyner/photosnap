import React, { useContext, useRef } from 'react';
import logo from '@/public/images/logo.svg';
import Image from 'next/image';
import classes from './Navbar.module.css'
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';


const Navbar = () => {
    const burger = useRef();
    const { isMobileResolution } = useContext(GlobalContext);
    const { isDesktopResolution } = useContext(GlobalContext);

    const { isMenuOpen } = useContext(GlobalContext);
    const { toggleMenu } = useContext(GlobalContext);



    return (
        <header className={`${classes.header}`}>
            <nav className={`${classes.navbar} ${isDesktopResolution ? 'max-width' : ''}`}>
                <div className={classes.navWrapper}>
                    <div className='d-flex gap-5 align-items-center'>
                        <div className={classes.logo}>
                            <Link href="/">
                                <Image src={logo} alt='logo myTeam' className={classes.logoImg} />
                            </Link>
                        </div>
                        {/* Classic links */}
                        <div className={`${isMobileResolution ? "display-none" : classes.navLink}`}>

                            <Link href="/" className={classes.link}>home</Link>
                            <Link href="/about" className={classes.link}>about</Link>
                        </div>
                    </div>
                    <div className={`${isMobileResolution ? "display-none" : ""}`}>
                        <Link href="/contact" className='primary-button-light'>contact us</Link>
                    </div>


                    {/* Icon burger menu */}
                    <div ref={burger} className={`${isMobileResolution ? classes.hamburger : classes.hamburger + " display-none"}`}
                        onClick={() => {
                            toggleMenu();
                            burger.current.classList.toggle(classes.isActive);

                        }}>
                        <div className={classes.bar} />
                    </div>

                    {/* Mobile menu */}
                    <div className={`${classes.mobileNav} ${isMenuOpen ? classes.active : ""}`}>
                        <div className={classes.mobileNavWrapper}>
                            <div className={classes.mobileLinks}>
                                <Link href="/" className={classes.mobileLink} onClick={() => {
                                    toggleMenu();
                                    burger.current.classList.toggle(classes.isActive);
                                }}>home</Link>

                                <Link href="/about" className={classes.mobileLink} onClick={() => {
                                    toggleMenu();
                                    burger.current.classList.toggle(classes.isActive);
                                }}>about</Link>

                                <Link href="/contact" className='primary-button-light' onClick={() => {
                                    toggleMenu();
                                    burger.current.classList.toggle(classes.isActive);
                                }}>contact us</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;