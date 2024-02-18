import React from 'react';
import classes from './CTAReminder.module.css';
import Link from 'next/link';

const CTAReminder = () => {
    return (
        <section className={classes.reminderSection}>
            <div className={`${classes.wrapper} max-width`}>
                <h2>Ready to get started?</h2>
                <Link href="/contact" className='primary-button-dark'>contact us</Link>
            </div>
        </section>

    );
};
export default CTAReminder;

