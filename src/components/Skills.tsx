import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { navActions } from '../store/navSlice'
import CheckMark from './CheckMark'
import styles from '../styles/Skills.module.css'

const Skills = () => {
    const [alreadyViewed, setAlreadyViewed] = useState(false)
    const dispatch = useDispatch();

    const { ref, inView } = useInView({
        threshold: 0,
    });
    const { ref: codeRef, inView: codeInView } = useInView({
        threshold: 1,
        triggerOnce: true
    });
    const { ref: toolsRef, inView: toolsInView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    useEffect(() => {
        if (inView) dispatch(navActions.activate('skills'))
    }, [inView, dispatch]);
    useEffect(() => {
        if (inView && !alreadyViewed) {
            setAlreadyViewed(true)
        }
    }, [inView, alreadyViewed])

    return (
        <>
            <div id="Skills" className={styles.headingContainer}>
                <h1 ref={ref} className={alreadyViewed ? styles.slideIn : ''} >Skills</h1>
            </div>
            <div className={styles.skillList}>
                <h3>Programming languages</h3>
                <ul ref={codeRef} className={styles.list} >
                    <li><CheckMark className={`${styles.checkMarkInit} ${codeInView ? styles.animateCheckMark1 : ''}`} /><span>ReactJS</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${codeInView ? styles.animateCheckMark2 : ''}`} /><span>JavaScript</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${codeInView ? styles.animateCheckMark3 : ''}`} /><span>TypeScript</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${codeInView ? styles.animateCheckMark4 : ''}`} /><span>ColdFusion</span></li>
                </ul>
                <h3>Tools & Technologies</h3>
                <ul ref={toolsRef} className={styles.list} >
                    <li><CheckMark className={`${styles.checkMarkInit} ${toolsInView ? styles.animateCheckMark1 : ''}`} /><span>Node.js</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${toolsInView ? styles.animateCheckMark2 : ''}`} /><span>Next.js</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${toolsInView ? styles.animateCheckMark3 : ''}`} /><span>PostgreSQL</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${toolsInView ? styles.animateCheckMark4 : ''}`} /><span>GitHub</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${toolsInView ? styles.animateCheckMark5 : ''}`} /><span>Jest</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${toolsInView ? styles.animateCheckMark6 : ''}`} /><span>MacOS</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${toolsInView ? styles.animateCheckMark7 : ''}`} /><span>Windows</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${toolsInView ? styles.animateCheckMark8 : ''}`} /><span>SourceTree</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${toolsInView ? styles.animateCheckMark9 : ''}`} /><span>JIRA</span></li>
                </ul>
            </div>
        </>
    )
}

export default Skills