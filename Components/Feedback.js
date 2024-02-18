import React from 'react';
import classes from './Feedback.module.css';
import Image from 'next/image';
import avatarKady from '@/public/images/avatar-kady.jpg';
import avatarAiysha from '@/public/images/avatar-aiysha.jpg';
import avatarArthur from '@/public/images/avatar-arthur.jpg';

const Feedback = () => {
    return (
        <section className={classes.feedbackSection}>
            <div className={`${classes.wrapper} max-width`}>
                <h2>Delivering real results for top companies. Some of our <span className={classes.coloredWord}>success stories.</span></h2>
                <div className={classes.feedbacks}>
                    <div className={classes.feedbackMessage}>
                        <p>“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                        <div className={classes.feedbackAuthor}>
                            <h3>Kady Baker</h3>
                            <p>Product Manager at Bookmark</p>
                            <Image src={avatarKady} alt="avatar-kady" width={62} height={62} className={classes.avatar} />
                        </div>
                    </div>
                    <div className={classes.feedbackMessage}>
                        <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                        <div className={classes.feedbackAuthor}>
                            <h3>Aiysha Reese</h3>
                            <p>Founder of Manage</p>
                            <Image src={avatarAiysha} alt="avatar-aiysha" width={62} height={62} className={classes.avatar} />
                        </div>
                    </div>
                    <div className={classes.feedbackMessage}>
                        <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                        <div className={classes.feedbackAuthor}>
                            <h3>Arthur Clarke</h3>
                            <p>Co-founder of MyPhysio</p>
                            <Image src={avatarArthur} alt="avatar-arthur" width={62} height={62} className={classes.avatar} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;