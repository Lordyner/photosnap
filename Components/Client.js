import React from 'react';
import classes from './Client.module.css';
import ClientsLogo from './ClientsLogo';

const Client = () => {
    return (
        <section className={classes.clientSection}>
            <div className={`${classes.wrapper} max-width`}>
                <h2>Some of our clients</h2>
                <ClientsLogo />
            </div>
        </section>
    );
};

export default Client;