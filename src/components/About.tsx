import React, { useEffect, useState, useMemo } from 'react';
import { navActions } from '../store/navSlice';
import { useDispatch } from 'react-redux';
import { FaLinkedin, FaGithub, FaRegLightbulb, FaShieldAlt } from 'react-icons/fa';
import { SiStarship } from 'react-icons/si';
import { IconContext } from 'react-icons/lib';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const About = () => {
    const dispatch = useDispatch()
    const { ref: aboutRef, inView: aboutInView } = useInView({
        threshold: 0,
    })
    const { ref: summaryRef, inView: summaryInView } = useInView({
        threshold: 0,
        triggerOnce: true
    })
    const { ref: linkedInRef, inView: linkedInView } = useInView({
        threshold: 0,
        triggerOnce: true
    })
    const { ref: gitHubRef, inView: gitHubInView } = useInView({
        threshold: 0,
        triggerOnce: true
    })

    const [alreadyViewed, setAlreadyViewed] = useState(false)

    useEffect(() => {
        if (aboutInView) {
            dispatch(navActions.activate('about'))
        }
    }, [aboutInView, dispatch])

    useEffect(() => {
        if (aboutInView && !alreadyViewed) {
            setAlreadyViewed(true)
        }
    }, [aboutInView, alreadyViewed]);

    const renderStars = useMemo(() => {
        const randomPositions = [];
        const smStarCount = 45;
        const lgStarCount = 10;
        const totalStarCount = smStarCount + lgStarCount;

        for (let c = 0; c < totalStarCount; c++) {
            const xPosition = Math.floor(Math.random() * 99) + 1;
            const yPosition = Math.floor(Math.random() * 99) + 1;
            randomPositions.push({ x: xPosition, y: yPosition });
        }

        return randomPositions.map((position, i) => {
            if (i < smStarCount) {
                return <div key={`star${i}`} className='bg-white rounded-full h-[1px] w-[1px] relative' style={{ left: `${position.x}%`, bottom: `${position.y}%` }} />
            }
            if (i < totalStarCount) {
                return <div key={`star${i}`} className='bg-white rounded-full h-[3px] w-[3px] relative' style={{ left: `${position.x}%`, bottom: `${position.y}%` }} />
            }
        });
    }, []);

    return (
        <React.Fragment>
            <div id='About' className='h-screen w-full flex flex-col justify-center items-center flex-wrap gap-8'>
                <div className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 min-w-[320px] sm:gap-8' >
                    <motion.div className='flex flex-col justify-center items-center sm:items-end gap-0 sm:gap-2'
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', duration: 0.75 }}
                        viewport={{ once: true }}
                    >
                        <h1 ref={aboutRef} className='text-7xl md:text-9xl text-indigo-300 bg-gradient-to-b from-slate-100 to-slate-900 text-transparent bg-clip-text' >JULIAN</h1>
                        <h1 className='text-4xl md:text-9xl text-indigo-300 bg-gradient-to-b from-slate-100 to-slate-900 text-transparent bg-clip-text' >PAGTAMA</h1>
                    </motion.div>
                    <ul className='flex flex-row sm:flex-col justify-start gap-2 md:gap-8 sm:gap-4 flex-wrap text-xs sm:text-lg md:text-3xl' >
                        <motion.li
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', duration: 0.75, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Software Developer
                        </motion.li>
                        {/* <span className='visible sm:hidden' >&bull;</span> */}
                        <motion.li
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', duration: 0.75, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Los Angeles, CA
                        </motion.li>
                        {/* <span className='visible sm:hidden' >&bull;</span> */}
                        <motion.li
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', duration: 0.75, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            jpagtama@gmail.com
                        </motion.li>
                    </ul>
                </div>
                <div className='w-full flex justify-center gap-4'>
                    <motion.a ref={linkedInRef} className='hover:scale-110 duration-150 text-6xl sm:text-7xl' href='https://www.linkedin.com/in/jpagtama/' target='_blank' rel='noreferrer'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.75, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <IconContext.Provider value={{ color: 'rgb(51 65 85)' }}><FaLinkedin /></IconContext.Provider>
                    </motion.a>
                    <motion.a ref={gitHubRef} className='hover:scale-110 duration-150 text-6xl sm:text-7xl' href='https://github.com/jpagtama' target='_blank' rel='noreferrer'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.75, delay: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <IconContext.Provider value={{ color: 'rgb(51 65 85)' }}><FaGithub /></IconContext.Provider>
                    </motion.a>
                </div>
                <div className='flex items-end absolute min-w-[320px] w-full h-full -z-10 overflow-x-hidden bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[rgba(27,39,53,1)] to-black' >
                    {renderStars}
                </div>
            </div>
            <div ref={summaryRef} className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-16 sm:gap-48 w-full min-h-screen py-16 px-4' >
                <motion.div className='sm:w-56 flex flex-col justify-center items-center gap-12'
                    initial={{ opacity: 0.15, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ style: 'spring', duration: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className='flex justify-center items-center h-52 w-52 relative hexagon bg-gradient-to-bl from-slate-700 to-lime-900'>
                        <IconContext.Provider value={{ size: '7rem', color: '#121212' }}><FaRegLightbulb /></IconContext.Provider>
                    </div>
                    <p className='text-center sm:text-2xl' >Crafting user-centric experiences is my passion</p>
                </motion.div>
                <motion.div className='sm:w-56 flex flex-col justify-center items-center gap-12'
                    initial={{ opacity: 0.15, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ style: 'spring', duration: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className='flex justify-center items-center h-52 w-52 relative hexagon bg-gradient-to-bl from-slate-700 to-lime-900'>
                        <IconContext.Provider value={{ size: '7rem', color: '#121212' }}><SiStarship /></IconContext.Provider>
                    </div>
                    <p className='text-center sm:text-2xl'>I aim for performant, scalable, and accessible solutions</p>
                </motion.div>
                <motion.div className='sm:w-56 flex flex-col justify-center items-center gap-12'
                    initial={{ opacity: 0.15, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ style: 'spring', duration: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className='flex justify-center items-center h-52 w-52 relative hexagon bg-gradient-to-bl from-slate-700 to-lime-900'>
                        <IconContext.Provider value={{ size: '7rem', color: '#121212' }}><FaShieldAlt /></IconContext.Provider>
                    </div>
                    <p className='text-center sm:text-2xl'>Security best practices are a must</p>
                </motion.div>
            </div>
        </React.Fragment >
    )
}

export default About