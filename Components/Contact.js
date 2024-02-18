import React, { useContext, useEffect, useRef, useState } from 'react';
import classes from './Contact.module.css';

import ClientsLogo from './ClientsLogo';
import iconPerson from '@/public/images/icon-person.svg';
import iconCog from '@/public/images/icon-cog.svg';
import iconChart from '@/public/images/icon-chart.svg';
import Image from 'next/image';

const Contact = () => {

    return (
        <div className={`${classes.container} max-width`}>
            <div className={`${classes.wrapper} ${classes.maxWidth}`}>
                <div className={classes.qualitiesAndFormContainer}>
                    <h1>Contact</h1>
                    <h2>Ask about us</h2>
                    <div className={classes.qualities}>
                        <div className={classes.quality}>
                            <Image src={iconPerson} alt='icon person' />
                            <p>The quality of our talent network</p>
                        </div>
                        <div className={classes.quality}>
                            <Image src={iconCog} alt='icon cog' />
                            <p>Usage & implementation of our software</p>
                        </div>
                        <div className={classes.quality}>
                            <Image src={iconChart} alt='icon chart' />
                            <p>How we help drive innovation</p>
                        </div>
                    </div>
                </div>
                <form className={classes.form}>
                    <div className={classes.fieldsWrapper}>
                        <div className={classes.formGroup}>
                            <label htmlFor='name'>Name</label>
                            <input type='text' name='name' id='name' placeholder='Name' required />
                            <div className={classes.errorMessage}></div>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor='email'>Email Address</label>
                            <input type='email' name='email' id='email' placeholder='Email Address' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required />
                            <div className={classes.errorMessageMail}></div>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor='companyName'>Company Name</label>
                            <input type='text' name='companyName' id='companyName' placeholder='Company Name' required />
                            <div className={classes.errorMessage}></div>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor='title'>Title</label>
                            <input type='text' name='title' id='title' placeholder='Title' required />
                            <div className={classes.errorMessage}></div>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor='message'>Message</label>
                            <textarea type='textarea' id='message' name='message' placeholder='Message' rows={4} required />
                            <div className={classes.errorMessage}></div>
                        </div>

                    </div>
                    <div className={classes.buttonWrapper}>
                        <button className='secondary-button' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;