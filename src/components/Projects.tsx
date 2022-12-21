import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { navActions } from '../store/navSlice'
import flekinGif from '../assets/flekin_med.gif'
import calendarGif from '../assets/calendar.gif'
import finflexiGif from '../assets/finflexi.gif'
import styles from '../styles/Projects.module.css'

const Projects = () => {
    const dispatch = useDispatch()
    const { ref, inView } = useInView({
        threshold: 0,
    })
    const [alreadyViewed, setAlreadyViewed] = useState(false)

    useEffect(() => {
        if (inView) dispatch(navActions.activate('projects'))
    }, [inView, dispatch])

    useEffect(() => {
        if (inView && !alreadyViewed) {
            setAlreadyViewed(true)
        }
    }, [inView, alreadyViewed])

    return (
        <>
            <div id="Projects" className={styles.headingContainer}>
                <h1 ref={ref} className={alreadyViewed ? styles.slideIn : ''}>Projects</h1>
            </div>
            <div className={styles.allProjectsContainer}>
                <div className={styles.projContainer}>
                    <img className={styles.demoGif} src={finflexiGif} alt="finflexi demo" />
                    <div className={styles.projTextContainer}>
                        <h4 className={styles.projTitle}>Finflexi</h4>
                        <div className={styles.projTech}>
                            <span>React | TypeScript | Next.js | PostgreSQL</span>
                        </div>
                        <p className={styles.projDesc}>Finflexi is a fintech app that allows you to view market and company data.</p>
                        <div className={styles.projLinks}>
                            <a href="https://finflexi.vercel.app" target="_blank" rel="noopener noreferrer" >Go to project</a>
                            <a href="https://github.com/jpagtama/finflexi" target="_blank" rel="noopener noreferrer" >View the code</a>
                        </div>
                    </div>
                </div>
                <div className={styles.projContainer}>
                    <img className={styles.demoGif} src={calendarGif} alt="calendar demo" />
                    <div className={styles.projTextContainer}>
                        <h4 className={styles.projTitle}>react-event-viewer-calendar</h4>
                        <div className={styles.projTech}>
                            <span>React | TypeScript | NPM</span>
                        </div>
                        <p className={styles.projDesc}>react-event-viewer-calendar is an npm package that allows developers to display daily events in a monthly view. It's lightweight, responsive, and customizable.</p>
                        <div className={styles.projLinks}>
                            <a href="https://react-event-viewer-calendar-r34x4.ondigitalocean.app/" target="_blank" rel="noopener noreferrer" >Go to project</a>
                            <a href="https://github.com/jpagtama/react-event-viewer-calendar" target="_blank" rel="noopener noreferrer" >View the code</a>
                        </div>
                    </div>
                </div>
                <div className={styles.projContainer}>
                    <img className={styles.demoGif} src={flekinGif} alt="flekin demo" />
                    <div className={styles.projTextContainer}>
                        <h4 className={styles.projTitle}>Flekin</h4>
                        <div className={styles.projTech}>
                            <span>React | JavaScript | NPM</span>
                        </div>
                        <p className={styles.projDesc}>Flekin is an npm package that allows developers to automatically extract the number of words, syllables, and sentences. Returns a readability score as processed by the Flesch-Kincaid formula.</p>
                        <div className={styles.projLinks}>
                            <a href="https://flekin-7qyrt.ondigitalocean.app/" target="_blank" rel="noopener noreferrer" >Go to project</a>
                            <a href="https://github.com/jpagtama/flekin" target="_blank" rel="noopener noreferrer" >View the code</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects