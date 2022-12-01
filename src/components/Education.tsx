import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { navActions } from '../store/navSlice'
import { useInView } from 'react-intersection-observer'
import styles from '../styles/Education.module.css'

const Education = () => {
    const dispatch = useDispatch()
    const { ref, inView } = useInView({
        threshold: 0,
    })
    useEffect(() => {
        if (inView) dispatch(navActions.activate('education'))
    }, [inView, dispatch])

    return (
        <React.Fragment>
            <div id="Education" className={styles.headingContainer}>
                <h1 ref={ref} className={inView ? styles.slideIn : ''} >Education</h1>
            </div>
            <div className={`${styles.educationInfo}`} >
                <span className={styles.collegeInfo}>
                    <h2>California State University, Long Beach</h2>
                    <h3>Bachelor's of Science, Computer Science</h3>
                </span>
                <p className={styles.attendanceDates}>August 2006 - December 2013</p>
            </div>

        </React.Fragment>
    )
}

export default Education