import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { navActions } from '../store/navSlice'
import { useInView } from 'react-intersection-observer'
import styles from '../styles/Experience.module.css'

const Experience = () => {
    const dispatch = useDispatch()
    const { ref: expRef, inView: expInView } = useInView({
        threshold: 0,
    })
    const { ref: firstSummaryRef, inView: firstSummaryInView } = useInView({
        threshold: 0,
        triggerOnce: true
    })
    const { ref: secondSummaryRef, inView: secondSummaryInView } = useInView({
        threshold: 0,
        triggerOnce: true
    })

    const [alreadyViewed, setAlreadyViewed] = useState(false)

    useEffect(() => {
        if (expInView) dispatch(navActions.activate('experience'))
    }, [expInView, dispatch])

    useEffect(() => {
        if (expInView && !alreadyViewed) {
            setAlreadyViewed(true)
        }
    }, [expInView, alreadyViewed])

    return (
        <>
            <div id="Experience" className={styles.headingContainer} >
                <h1 ref={expRef} className={`${styles.heading} ${alreadyViewed ? styles.slideIn : ''}`}>Experience</h1>
            </div>
            <div ref={firstSummaryRef} className={`${styles.container} ${styles.summary} ${firstSummaryInView ? styles.firstSummary : ''}`}>
                <span className={styles.workDetails}>
                    <h2>Software Developer</h2>
                    <h3>Regal Medical Group</h3>
                    <p className={styles.workDesc} >
                        Developed and maintained applications for one of the largest physician-led healthcare networks in Southern California. Applications used among thousands of doctors and patients across hospitals and urgent care centers.
                    </p>
                </span>
                <p className={styles.workDates} >January 2018 - March 2021</p>
            </div>
            <div ref={secondSummaryRef} className={`${styles.container} ${secondSummaryInView ? styles.secondSummary : ''}`}>
                <span className={styles.workDetails}>
                    <h2>Web Developer</h2>
                    <h3>Nonfat Media (Breakdown Services)</h3>
                    <p className={styles.workDesc} >
                        Worked within a team to maintain and engineer a system of applications recognized by the Casting Society of America as the primary distributor of casting breakdowns. Applications used to service casting directors, talent representatives, and actors within a seamless, casting ecosystem.
                    </p>
                </span>

                <p className={styles.workDates} >June 2014 - January 2018</p>
            </div>
        </>
    )
}

export default Experience