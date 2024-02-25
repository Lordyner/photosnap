import React, { useContext, useEffect } from 'react';
import classes from './PriceCard.module.css';
import Link from 'next/link';
import { motion } from "framer-motion"
import GlobalContext from '@/Store/GlobalContext';

const PriceCard = ({ title, description, price, mostPopular, isMonthly }) => {

    return (
        <div className={`${classes.card} ${mostPopular ? classes.mostPopular : ''}`}>
            <div className={`${classes.titleAndDescription}`}>
                <h3 className={classes.title}>{title}</h3>
                <p className={classes.description}>{description}</p>
            </div>
            <div className={classes.price}>
                <p className={classes.amount}>${price}</p>
                <p className={classes.periodicity}>{isMonthly ? 'per month' : 'per year'}</p>
            </div>
            <div className={`${classes.linkWrapper}`}>
                <Link href='' className={`primary-link ${mostPopular ? 'dark' : 'light'}`}>Pick Plan</Link>
            </div>
        </div>
    );
};

export default PriceCard;