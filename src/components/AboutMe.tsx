import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { navActions } from '../store/navSlice'
import profilePic from '../assets/julianpagtama.png';
import { motion } from 'framer-motion'

const AboutMe = () => {
    const [alreadyViewed, setAlreadyViewed] = useState(false)
    const dispatch = useDispatch()
    const { ref, inView } = useInView({
        threshold: 0,
    })
    useEffect(() => {
        if (inView) dispatch(navActions.activate('interests'))
    }, [inView, dispatch])

    useEffect(() => {
        if (inView && !alreadyViewed) {
            setAlreadyViewed(true)
        }
    }, [inView, alreadyViewed])

    return (
        <div className='flex flex-col justify-center items-center gap-12 sm:gap-24 w-full min-h-screen overflow-x-hidden py-12'>
            <motion.h1 id='AboutMe' className='text-5xl md:text-9xl text-center px-2 font-audiowide bg-gradient-to-b from-slate-100 to-slate-900 text-transparent bg-clip-text'
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
                    <img src={profilePic} alt="Julian Pagtama image" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.15, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ style: 'spring', duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <p className='p-4 max-w-xl leading-loose' >
                        I believe that the web is more than just a collection of pages and links. It is a powerful medium for communication, collaboration, and creativity. It is a platform for expressing ideas, sharing knowledge, and building communities. It is a space where everyone can have a voice, a choice, and an impact.
                    </p>
                    <p className='p-4 max-w-xl leading-loose'>
                        Not only do I enjoy creating experiences that are engaging and user-friendly, I also love creating functional applications that solve real-world problems. My career in professional web development has allowed me to synthesize front-end and back-end technologies to create complete products.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutMe;