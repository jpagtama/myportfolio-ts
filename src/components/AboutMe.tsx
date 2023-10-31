import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { navActions } from '../store/navSlice'
import profilePic from '../assets/julianpagtama.png';
import { motion } from 'framer-motion'

const AboutMe = () => {
    const dispatch = useDispatch()
    const { ref, inView } = useInView({
        threshold: 0.10,
    })
    useEffect(() => {
        if (inView) dispatch(navActions.activate('about me'));
    }, [inView, dispatch]);

    return (
        <div className='flex flex-col justify-center items-center gap-12 sm:gap-24 w-full h-[1250px] sm:min-h-screen overflow-x-hidden overflow-y-hidden py-12'>
            <motion.h1 id='about me' ref={ref} className='text-5xl md:text-9xl text-center px-2 font-audiowide bg-gradient-to-b from-slate-100 to-slate-900 text-transparent bg-clip-text'
                initial={{ opacity: 0.0, x: '-100px' }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
            >
                About Me
            </motion.h1>
            <div className='flex flex-wrap justify-center items-center gap-8' >
                <motion.div className='hexagon h-72 w-72'
                    initial={{ opacity: 0.15, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ style: 'spring', duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <img className='opacity-80 hover:opacity-100 duration-200' src={profilePic} alt="Julian Pagtama image" />
                </motion.div>
                <motion.div className='text-slate-400'
                    initial={{ opacity: 0.15, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ style: 'spring', duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <p className='p-4 max-w-xl leading-loose' >
                        <span className='font-bold text-slate-300'>I believe that the web is more than just a collection of pages and links.</span> It is a powerful medium for communication, collaboration, and creativity. It is a platform for expressing ideas, sharing knowledge, and building communities. It is a space where everyone can have a voice, a choice, and an impact.
                    </p>
                    <p className='p-4 max-w-xl leading-loose'>
                        <span className='font-bold text-slate-300'>I love creating functional applications that solve real-world problems.</span> My career in professional web development has allowed me to integrate front-end and back-end technologies into complete products that focuses on intuitive user-experience and optimal data structures.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutMe;