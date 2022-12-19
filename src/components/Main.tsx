import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import About from './About'
import Experience from './Experience'
import Section from './Section'
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education'
import Interests from './Interests'
import Footer from './Footer'
import styles from '../styles/Main.module.css'

interface Selector {
    nav: { active: string }
}

const Main = () => {
    const activeLink = useSelector((state: Selector) => state.nav.active)

    useEffect(() => {
        if (window.location.hash.length) {
            let sectionRef = document.getElementById(window.location.hash.replace(/#/g, ''))
            if (sectionRef) sectionRef.scrollIntoView({ behavior: "smooth" })
        }
    }, [])

    useEffect(() => {
        const element = document.getElementById(activeLink)
        element?.scrollIntoView({ behavior: "smooth" })
    }, [activeLink])

    return (
        <div className={styles.main} >
            <Section ><About /></Section>
            <Section ><Experience /></Section>
            <Section ><Projects /></Section>
            <Section ><Skills /></Section>
            <Section ><Education /></Section>
            <Section ><Interests /></Section>
            <Footer />
        </div>
    )
}

export default Main