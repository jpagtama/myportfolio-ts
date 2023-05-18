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
    const { ref: frameworksRef, inView: frameworksInView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    const { ref: toolsRef, inView: toolsInView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    const { ref: libRef, inView: libInView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    const { ref: softwareRef, inView: softwareInView } = useInView({
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
                <h1 ref={ref} className={alreadyViewed ? styles.slideIn : ''} >Technical Skills</h1>
            </div>
            <div className={styles.skillList}>
                <h3>Languages</h3>
                <ul ref={codeRef} className={styles.list} >
                    <li><CheckMark className={`${styles.checkMarkInit} ${codeInView ? styles.animateCheckMark1 : ''}`} /><span>JavaScript</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${codeInView ? styles.animateCheckMark2 : ''}`} /><span>TypeScript</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${codeInView ? styles.animateCheckMark3 : ''}`} /><span>SQL</span></li>
                </ul>
                <h3>Frameworks</h3>
                <ul ref={frameworksRef} className={styles.list}>
                    <li><CheckMark className={`${styles.checkMarkInit} ${frameworksInView ? styles.animateCheckMark1 : ''}`} /><span>React</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${frameworksInView ? styles.animateCheckMark2 : ''}`} /><span>Next.js</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${frameworksInView ? styles.animateCheckMark3 : ''}`} /><span>Vitest</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${frameworksInView ? styles.animateCheckMark4 : ''}`} /><span>Jest</span></li>
                </ul>
                <h3>Developer Tools</h3>
                <ul ref={toolsRef} className={styles.list} >
                    <li><CheckMark className={`${styles.checkMarkInit} ${toolsInView ? styles.animateCheckMark1 : ''}`} /><span>Git</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${toolsInView ? styles.animateCheckMark2 : ''}`} /><span>Node.js</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${toolsInView ? styles.animateCheckMark3 : ''}`} /><span>Next.js</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${toolsInView ? styles.animateCheckMark4 : ''}`} /><span>React Dev Tools</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${toolsInView ? styles.animateCheckMark5 : ''}`} /><span>Redux Toolkit</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${toolsInView ? styles.animateCheckMark6 : ''}`} /><span>Git</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${toolsInView ? styles.animateCheckMark7 : ''}`} /><span>Redux DevTools</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${toolsInView ? styles.animateCheckMark8 : ''}`} /><span>Prisma</span></li>
                </ul>
                <h3>Libraries</h3>
                <ul ref={libRef} className={styles.list} >
                    <li><CheckMark className={`${styles.checkMarkInit} ${libInView ? styles.animateCheckMark1 : ''}`} /><span>Axios</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${libInView ? styles.animateCheckMark2 : ''}`} /><span>NextAuth.js</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${libInView ? styles.animateCheckMark3 : ''}`} /><span>Chart.js</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${libInView ? styles.animateCheckMark4 : ''}`} /><span>Nodemailer</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${libInView ? styles.animateCheckMark5 : ''}`} /><span>jQuery</span></li>
                </ul>
                <h3>Software</h3>
                <ul ref={softwareRef} className={styles.list} >
                    <li><CheckMark className={`${styles.checkMarkInit} ${softwareInView ? styles.animateCheckMark1 : ''}`} /><span>VS Code</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${softwareInView ? styles.animateCheckMark2 : ''}`} /><span>Jira</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${softwareInView ? styles.animateCheckMark3 : ''}`} /><span>pgAdmin</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${softwareInView ? styles.animateCheckMark4 : ''}`} /><span>Supabase</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${softwareInView ? styles.animateCheckMark5 : ''}`} /><span>Postman</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${softwareInView ? styles.animateCheckMark6 : ''}`} /><span>macOS</span></li>
                    <li><CheckMark className={`${styles.checkMarkInit} ${softwareInView ? styles.animateCheckMark7 : ''}`} /><span>Windows</span></li>
                </ul>
            </div>
        </>
    )
}

export default Skills