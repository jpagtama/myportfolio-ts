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
    });

    useEffect(() => {
        if (inView) dispatch(navActions.activate('projects'))
    }, [inView, dispatch])

    return (
        <div ref={ref} id='projects' className='flex flex-col justify-center items-center gap-12 bg-charcoal sm:gap-24 w-full min-h-screen py-12 overflow-x-hidden'>
            <motion.h1 className='text-5xl md:text-9xl text-center px-2 pb-12 font-audiowide bg-gradient-to-b from-slate-100 to-slate-900 text-transparent bg-clip-text'
                initial={{ opacity: 0.0, x: '100px' }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
            >
                Projects
            </motion.h1>
            <div className='flex justify-center flex-wrap'>
                <motion.div className='relative'
                    initial={{ opacity: 0.15, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ style: 'spring', duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <img className='' src={finflexiGif} alt="finflexi demo" />
                    <div className='flex flex-col justify-around items-center w-[400px] h-[300px] p-4 bg-gradient-to-bl from-slate-700 to-lime-900 absolute top-0 opacity-0 hover:opacity-100 duration-200'>
                        <motion.div className='flex flex-col justify-center items-center'
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <h4 className='text-5xl' >Finflexi</h4>
                            <span className='text-slate-400' >React | TypeScript | Next.js | PostgreSQL</span>
                        </motion.div>
                        {/* <p >Finflexi is a fintech app that allows you to view market and company data.</p> */}
                        <div className='flex gap-4'>
                            <a className='py-2 px-2 bg-slate-300 rounded-lg text-zinc-950 hover:scale-105 duration-200' href="https://finflexi.vercel.app" target="_blank" rel="noopener noreferrer" >Go to project</a>
                            <a className='py-2 px-2 bg-slate-300 rounded-lg text-zinc-950 hover:scale-105 duration-200' href="https://github.com/jpagtama/finflexi" target="_blank" rel="noopener noreferrer" >View the code</a>
                        </div>
                    </div>
                </motion.div>
                <motion.div className='relative'
                    initial={{ opacity: 0.15, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ style: 'spring', duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <img src={calendarGif} alt="calendar demo" />
                    <div className='flex flex-col justify-around items-center w-[400px] h-[300px] p-4 bg-gradient-to-bl from-slate-700 to-lime-900 absolute top-0 opacity-0 hover:opacity-100 duration-200'>
                        <motion.div className='flex flex-col justify-center items-center'
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <h4 className='text-5xl text-center' >Event Viewer Calendar</h4>
                            <span className='text-slate-400' >React | TypeScript | NPM</span>
                        </motion.div>
                        {/* <p>react-event-viewer-calendar is an npm package that allows developers to display daily events in a monthly view. It's lightweight, responsive, and customizable.</p> */}
                        <div className='flex gap-4'>
                            <a className='py-2 px-2 bg-slate-300 rounded-lg text-zinc-950 hover:scale-105 duration-200' href="https://react-event-viewer-calendar-r34x4.ondigitalocean.app/" target="_blank" rel="noopener noreferrer" >Go to project</a>
                            <a className='py-2 px-2 bg-slate-300 rounded-lg text-zinc-950 hover:scale-105 duration-200' href="https://github.com/jpagtama/react-event-viewer-calendar" target="_blank" rel="noopener noreferrer" >View the code</a>
                        </div>
                    </div>
                </motion.div>
                <motion.div className='relative'
                    initial={{ opacity: 0.15, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ style: 'spring', duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <img src={flekinGif} alt="flekin demo" />
                    <div className='flex flex-col justify-around items-center w-[400px] h-[300px] p-4 bg-gradient-to-bl from-slate-700 to-lime-900 absolute top-0 opacity-0 hover:opacity-100 duration-200'>
                        <motion.div className='flex flex-col justify-center items-center'
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <h4 className='text-5xl text-center' >Flekin</h4>
                            <span className='text-slate-400' >React | JavaScript | NPM</span>
                        </motion.div>
                        {/* <p >Flekin is an npm package that allows developers to automatically extract the number of words, syllables, and sentences. Returns a readability score as processed by the Flesch-Kincaid formula.</p> */}
                        <div className='flex gap-4'>
                            <a className='py-2 px-2 bg-slate-300 rounded-lg text-zinc-950 hover:scale-105 duration-200' href="https://flekin-7qyrt.ondigitalocean.app/" target="_blank" rel="noopener noreferrer" >Go to project</a>
                            <a className='py-2 px-2 bg-slate-300 rounded-lg text-zinc-950 hover:scale-105 duration-200' href="https://github.com/jpagtama/flekin" target="_blank" rel="noopener noreferrer" >View the code</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Projects