import React, { useEffect, useState, useMemo } from 'react';
import { navActions } from '../store/navSlice';
import { useDispatch } from 'react-redux';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useInView } from 'react-intersection-observer';
import lightBublIcon from '../assets/lightbulb_icon.svg';
import securityIcon from '../assets/security_icon.svg';
import dumbBellIcon from '../assets/dumbbell_icon.svg';
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
                <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8' >
                    <motion.div className='flex flex-col justify-center items-center sm:items-end gap-0 sm:gap-2'
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', duration: 0.75 }}
                        viewport={{ once: true }}
                    >
                        <h1 ref={aboutRef} className='text-8xl md:text-9xl text-indigo-300 bg-gradient-to-b from-slate-100 to-slate-900 text-transparent bg-clip-text' >Julian</h1>
                        <h1 className='text-5xl sm:text-8xl md:text-9xl text-indigo-300 pb-4 bg-gradient-to-b from-slate-100 to-slate-900 text-transparent bg-clip-text' >Pagtama</h1>
                    </motion.div>
                    <ul className='flex flex-row sm:flex-col justify-start gap-2 md:gap-8 sm:gap-4 text-xs sm:text-lg md:text-3xl' >
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
                        <IconContext.Provider value={{ color: 'darkolivegreen' }}><FaLinkedin /></IconContext.Provider>
                    </motion.a>
                    <motion.a ref={gitHubRef} className='hover:scale-110 duration-150 text-6xl sm:text-7xl' href='https://github.com/jpagtama' target='_blank' rel='noreferrer'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.75, delay: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <IconContext.Provider value={{ color: 'darkolivegreen' }}><FaGithub /></IconContext.Provider>
                    </motion.a>
                </div>
                <div className='flex items-end absolute w-full h-full -z-10 overflow-x-hidden bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[rgba(27,39,53,1)] to-black' >
                    {/* <div className='w-full h-full '
                        style={{ backgroundImage: `url(${starryBackground1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                    /> */}
                    {renderStars}
                </div>
            </div>
            <div ref={summaryRef} className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-16 sm:gap-48 w-full min-h-screen p-4 mb-96 xs:mb-48' >
                <motion.div className='sm:w-56 flex flex-col justify-center items-center gap-12'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ style: 'spring', duration: 0.7, delay: 0.25 }}
                    viewport={{ once: true }}
                >
                    <img className='w-48 -order-1 sm:order-none' src={lightBublIcon} alt="experiences image" />
                    <p className='text-center sm:text-2xl' >Crafting user-centric experiences is my passion</p>
                </motion.div>
                <motion.div className='sm:w-56 flex flex-col justify-center items-center gap-12'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ style: 'spring', duration: 0.7, delay: 0.25 }}
                    viewport={{ once: true }}
                >
                    <img className='w-48 -order-1 sm:order-none' src={securityIcon} alt="security image" />
                    <p className='text-center sm:text-2xl'>Security best practices are a must</p>
                </motion.div>
                <motion.div className='sm:w-56 flex flex-col justify-center items-center gap-12'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ style: 'spring', duration: 0.7, delay: 0.25 }}
                    viewport={{ once: true }}
                >
                    <img className='w-48 -order-1 sm:order-none' src={dumbBellIcon} alt="performance image" />
                    <p className='text-center sm:text-2xl'>I aim for performant, scalable, and accessible solutions</p>
                </motion.div>
            </div>
        </React.Fragment >
    )
}

export default About