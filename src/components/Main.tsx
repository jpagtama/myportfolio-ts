import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import About from './About'
import Experience from './Experience'
import Section from './Section'
import Projects from './Projects'
import Skills from './Skills'
import AboutMe from './AboutMe'
import Footer from './Footer'

interface Selector {
    nav: { scrollTo: string }
}

const Main = () => {
    const scrollTo = useSelector((state: Selector) => state.nav.scrollTo)

    useEffect(() => {
        if (window.location.hash.length) {
            let sectionRef = document.getElementById(window.location.hash.replace(/#/g, ''))
            if (sectionRef) sectionRef.scrollIntoView({ behavior: "smooth" })
        }
    }, [])

    useEffect(() => {
        const element = document.getElementById(scrollTo)
        element?.scrollIntoView({ behavior: "smooth" })
    }, [scrollTo])

    return (
        <div className="flex flex-col w-screen h-min-screen" >
            <Section ><About /></Section>
            <Section ><Skills /></Section>
            <Section ><Experience /></Section>
            <Section ><Projects /></Section>
            <Section ><AboutMe /></Section>
            <Footer />
        </div>
    )
}

export default Main