import React from 'react';
import classes from './Directors.module.css'
import Director from './Director';
import avatarNikita from '@/public/images/avatar-nikita.jpg';
import avatarCristian from '@/public/images/avatar-christian.jpg';
import avatarCruz from '@/public/images/avatar-cruz.jpg';
import avatarDrake from '@/public/images/avatar-drake.jpg';
import avatarGriffin from '@/public/images/avatar-griffin.jpg';
import avatarAden from '@/public/images/avatar-aden.jpg';

const Directors = () => {
    return (
        <section className={classes.directorSection}>
            <div className={`${classes.wrapper} max-width`}>
                <h2>Meet the directors</h2>
                <div className={classes.directorContainer}>
                    <Director name="Nikita Marks" title="Found & CEO" image={avatarNikita} alt="avatar Nikita" quote="“It always amazes me how much talent there is in every corner of the globe.”" />
                    <Director name="Cristian Duncan" title="Co-founder & COO" image={avatarCristian} alt="avatar Cristian" quote="“Distributed teams required unique processes. You need to approach work in a new way.”" />
                    <Director name="Cruz Hamer" title="Co-founder & CTO" image={avatarCruz} alt="avatar Cruz" quote="“Technology is at the forefront of enabling distributed teams. That's where we come in.”" />
                    <Director name="Drake Heaton" title="Business Development Lead" image={avatarDrake} alt="avatar Drake" quote="Hiring similar people from similar backgrounds is a surefire way to stunt innovation." />
                    <Director name="Griffin Wise" title="Lead Marketing" image={avatarGriffin} alt="avatar Griffin" quote="“Unique perspectives shape unique products, which is what you need to survive these days.”" />
                    <Director name="Aden Allan" title="Head of Talent" image={avatarAden} alt="avatar Aden" quote="“Empowered teams create truly amazing products. Set the north star and let them follow it.”" />
                </div>
            </div>
        </section>
    );
};

export default Directors;