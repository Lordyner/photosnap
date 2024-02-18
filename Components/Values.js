import React, { useContext } from 'react';
import classes from './Values.module.css';
import Image from 'next/image';

const Values = () => {

    return (
        <section className={`${classes.valueSection}`}>
            <div className={`${classes.wrapper} max-width`}>
                <h2>Build & manage distributed teams like no one else.</h2>
                <div className={classes.values}>
                    <div className={classes.value}>
                        <Image src="/images/icon-person.svg" alt="icon-person" width={72} height={72} />
                        <div className={classes.valueContent}>
                            <h3>Experienced Individuals</h3>
                            <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </div>
                    </div>
                    <div className={classes.value}>
                        <Image src="/images/icon-cog.svg" alt="icon-cog" width={72} height={72} />
                        <div className={classes.valueContent}>
                            <h3>Easy to Implement</h3>
                            <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                        </div>
                    </div>
                    <div className={classes.value}>
                        <Image src="/images/icon-chart.svg" alt="icon-chart" width={72} height={72} />
                        <div className={classes.valueContent}>
                            <h3>Enhanced Productivity</h3>
                            <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Values;