import React, { useEffect, useState } from 'react';
import { navActions } from '../store/navSlice';
import { useDispatch } from 'react-redux';
import LinkedInSVG from './LinkedInSVG';
import GitHubSVG from './GitHubSVG';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/About.module.css';


const About = () => {
    const dispatch = useDispatch();
    const { ref: aboutRef, inView: aboutInView } = useInView({
        threshold: 0,
    });
    const { ref: summaryRef, inView: summaryInView } = useInView({
        threshold: 0,
        triggerOnce: true
    });
    const { ref: linkedInRef, inView: linkedInView } = useInView({
        threshold: 0,
        triggerOnce: true
    });
    const { ref: gitHubRef, inView: gitHubInView } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    const [alreadyViewed, setAlreadyViewed] = useState(false)

    useEffect(() => {
        if (aboutInView) {
            dispatch(navActions.activate('about'))
        }
    }, [aboutInView, dispatch]);

    useEffect(() => {
        if (aboutInView && !alreadyViewed) {
            setAlreadyViewed(true)
        }
    }, [aboutInView, alreadyViewed])

    return (
        <React.Fragment>
            <div id="About" className={styles.headingContainer}>
                <h1 ref={aboutRef} className={alreadyViewed ? styles.slideIn : ''}>Julian Pagtama</h1>
                <h3>Software Developer &bull; Los Angeles, CA &bull; jpagtama@gmail.com</h3>
            </div>
            <div className={styles.summaryContainer}>
                <p ref={summaryRef} className={`${styles.summary} ${summaryInView ? styles.animateSummary : ''}`}>
                    I have more than 6 years of software development experience in high volume applications where I aim to ensure scalability, optimize performance, and utilize best security practices.
                </p>
                <div className={styles.links} >
                    <a ref={linkedInRef} className={`${linkedInView && styles.animateLinkedIn}`} href="https://www.linkedin.com/in/jpagtama/" target="_blank" rel="noreferrer"><LinkedInSVG /></a>
                    <a ref={gitHubRef} className={`${gitHubInView && styles.animateGitHub}`} href="https://github.com/jpagtama" target="_blank" rel="noreferrer"><GitHubSVG /></a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About