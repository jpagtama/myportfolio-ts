import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { navActions } from '../store/navSlice'
import flekinGif from '../assets/flekin_med.gif'
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
            <div className={styles.projContainer}>
                <img className={styles.demoGif} src={flekinGif} alt="flekin" />
                <div className={styles.projTextContainer}>
                    <h4 className={styles.projTitle}>Flekin</h4>
                    <div className={styles.projTech}>
                        <span>React | JavaScript | NPM</span>
                    </div>
                    <p className={styles.projDesc}>Flekin is an npm package that allows developers to automatically extract the number of words, syllables, and sentences. Returns a readability score as processed by the Flesch-Kincaid formula.</p>
                    <div className={styles.projLinks}>
                        <a href="/flekin" target="_blank" rel="noopener noreferrer" >Go to project</a>
                        <a href="https://github.com/jpagtama/flekin" target="_blank" rel="noopener noreferrer" >View the code</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects