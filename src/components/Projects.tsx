import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { navActions } from '../store/navSlice';
import flekinGif from '../assets/flekin_med.gif';
import calendarGif from '../assets/calendar.gif';
import finflexiGif from '../assets/finflexi.gif';
import { motion } from 'framer-motion';

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
        <div className='flex flex-col justify-center items-center gap-12 bg-charcoal sm:gap-24 w-full min-h-screen py-12'>
            <motion.h1 ref={ref} id='Projects' className='text-5xl md:text-9xl text-center px-2 pb-12 font-audiowide bg-gradient-to-b from-slate-100 to-slate-900 text-transparent bg-clip-text'
                initial={{ opacity: 0.0, x: '100px' }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
            >
                Projects
            </motion.h1>
            <div>
                <img className='' src={finflexiGif} alt="finflexi demo" />
                <h4 >Finflexi</h4>
                <span>React | TypeScript | Next.js | PostgreSQL</span>
                <p >Finflexi is a fintech app that allows you to view market and company data.</p>
                <div >
                    <a href="https://finflexi.vercel.app" target="_blank" rel="noopener noreferrer" >Go to project</a>
                    <a href="https://github.com/jpagtama/finflexi" target="_blank" rel="noopener noreferrer" >View the code</a>
                </div>
            </div>
            <img src={calendarGif} alt="calendar demo" />
            <div>
                <h4>react-event-viewer-calendar</h4>
                <div>
                    <span>React | TypeScript | NPM</span>
                </div>
                <p>react-event-viewer-calendar is an npm package that allows developers to display daily events in a monthly view. It's lightweight, responsive, and customizable.</p>
                <div>
                    <a href="https://react-event-viewer-calendar-r34x4.ondigitalocean.app/" target="_blank" rel="noopener noreferrer" >Go to project</a>
                    <a href="https://github.com/jpagtama/react-event-viewer-calendar" target="_blank" rel="noopener noreferrer" >View the code</a>
                </div>
            </div>
            <img src={flekinGif} alt="flekin demo" />
            <div >
                <h4 >Flekin</h4>
                <div >
                    <span>React | JavaScript | NPM</span>
                </div>
                <p >Flekin is an npm package that allows developers to automatically extract the number of words, syllables, and sentences. Returns a readability score as processed by the Flesch-Kincaid formula.</p>
                <div>
                    <a href="https://flekin-7qyrt.ondigitalocean.app/" target="_blank" rel="noopener noreferrer" >Go to project</a>
                    <a href="https://github.com/jpagtama/flekin" target="_blank" rel="noopener noreferrer" >View the code</a>
                </div>
            </div>
        </div>
    )
}

export default Projects