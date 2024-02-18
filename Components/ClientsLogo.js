import Image from 'next/image';
import React from 'react';
import classes from './ClientsLogo.module.css';
import logoTheVerge from '@/public/images/logo-the-verge.png';
import logoTheJakartaPost from '@/public/images/logo-jakarta-post.png';
import logoTheGuardian from '@/public/images/logo-the-guardian.png';
import logoTechRadar from '@/public/images/logo-tech-radar.png';
import logoGadgetsNow from '@/public/images/logo-gadgets-now.png';

const ClientsLogo = () => {
    return (
        <div className={classes.clientsLogoContainer}>
            <Image src={logoTheVerge} alt="The Verge" />
            <Image src={logoTheJakartaPost} alt="The Jakarta Post" />
            <Image src={logoTheGuardian} alt="The Guardian" />
            <Image src={logoTechRadar} alt="Tech Radar" />
            <Image src={logoGadgetsNow} alt="Gadgets Now" className={classes.logoGadgetsNow} />

        </div>
    );
};

export default ClientsLogo;