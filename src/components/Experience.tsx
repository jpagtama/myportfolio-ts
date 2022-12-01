import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { navActions } from '../store/navSlice'
import { useInView } from 'react-intersection-observer'
import styles from '../../styles/personal/Experience.module.css'

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

    useEffect(() => {
        if (expInView) dispatch(navActions.activate('experience'))
    }, [expInView, dispatch])

    return (
        <>
            <div id="Experience" className={styles.headingContainer} >
                <h1 ref={expRef} className={`${styles.heading} ${expInView ? styles.slideIn : ''}`}>Experience</h1>
            </div>
            <div ref={firstSummaryRef} className={`${styles.container} ${firstSummaryInView ? styles.firstSummary : ''}`}>
                <span className={styles.workDetails}>
                    <h2>Software Developer</h2>
                    <h3>Regal Medical Group</h3>
                    <p className={styles.workDesc} >
                        Developed and maintained applications within the health industry. Users consists of customers, nurses, doctors, and employees within their network.
                    </p>
                </span>
                <p className={styles.workDates} >January 2018 - March 2021</p>
            </div>
            <div ref={secondSummaryRef} className={`${styles.container} ${secondSummaryInView ? styles.secondSummary : ''}`}>
                <span className={styles.workDetails}>
                    <h2>Web Developer</h2>
                    <h3>Breakdown Services</h3>
                    <p className={styles.workDesc} >
                        Worked within a team to maintain and engineer a system of applications designed to service casting directors, talent representatives, and actors within a seamless, casting ecosystem.
                    </p>
                </span>

                <p className={styles.workDates} >June 2014 - January 2018</p>
            </div>
        </>
    )
}

export default Experience