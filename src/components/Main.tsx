import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { navActions } from '../store/navSlice';
import Home from './Home';
import Experience from './Experience';
import Section from './Section';
import Projects from './Projects';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Footer from './Footer';

const Main = () => {
    const { scrollTo } = useSelector((state: RootState) => state.nav);
    const dispatch = useDispatch();

    useEffect(() => {
        if (window.location.hash.length) {
            let sectionRef = document.getElementById(window.location.hash.replace(/#/g, ''));
            if (sectionRef) sectionRef.scrollIntoView({ behavior: "smooth" });
        }
    }, [])

    useEffect(() => {
        if (scrollTo.length) {
            const element = document.getElementById(scrollTo);
            element?.scrollIntoView({ behavior: "smooth" });
            dispatch(navActions.scrollTo(''));
        }
    }, [scrollTo]);

    return (
        <div className="flex flex-col min-w-[320px] w-screen min-h-screen overscroll-none overflow-hidden" >
            <Section ><Home /></Section>
            <Section ><Skills /></Section>
            <Section ><Experience /></Section>
            <Section ><Projects /></Section>
            <Section ><AboutMe /></Section>
            <Footer />
        </div>
    )
}

export default Main