import React, { useEffect, useState, useMemo } from 'react';
import { navActions } from '../store/navSlice';
import { useDispatch } from 'react-redux';
import { FaLinkedin, FaGithub, FaRegLightbulb, FaShieldAlt } from 'react-icons/fa';
import { SiStarship } from 'react-icons/si';
import { IconContext } from 'react-icons/lib';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Home = () => {
    const dispatch = useDispatch()
    const { ref: ref, inView: homeInView } = useInView({
        threshold: 0.10,
    })

    useEffect(() => {
        if (homeInView) {
            dispatch(navActions.activate('home'))
        }
    }, [homeInView, dispatch])

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
            <div ref={ref} id='home' className='min-h-screen w-full flex flex-col justify-center items-center flex-wrap gap-8' >
                <div className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 min-w-[320px] lg:gap-4 px-2 py-4 mt-12 sm:mt-0' >
                    <motion.div className='flex flex-col justify-center items-center sm:items-end gap-0 sm:gap-2'
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', duration: 0.75 }}
                        viewport={{ once: true }}
                    >
                        <h1 className='font-audiowide text-7xl lg:text-9xl text-indigo-300 bg-gradient-to-b from-slate-100 to-slate-900 text-transparent bg-clip-text' >JULIAN</h1>
                        <h1 className='font-audiowide text-4xl lg:text-9xl text-indigo-300 bg-gradient-to-b from-slate-100 to-slate-900 text-transparent bg-clip-text' >PAGTAMA</h1>
                    </motion.div>
                    <ul className='flex flex-row flex-wrap sm:flex-col justify-center sm:justify-start gap-3 lg:gap-4 text-sm sm:text-lg lg:text-2xl p-2' >
                        <motion.li
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', duration: 0.75, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Software Developer
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', duration: 0.75, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            B.S. Computer Science CSULB
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', duration: 0.75, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Los Angeles, CA
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', duration: 0.75, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            jpagtama@gmail.com
                        </motion.li>
                    </ul>
                    <div className='w-full flex justify-center gap-2 lg:gap-4'>
                        <motion.a className='hover:scale-110 duration-150 text-5xl lg:text-7xl text-lime-900' href='https://www.linkedin.com/in/jpagtama/' target='_blank' rel='noreferrer'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.75, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a className='hover:scale-110 duration-150 text-5xl lg:text-7xl text-lime-900' href='https://github.com/jpagtama' target='_blank' rel='noreferrer'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.75, delay: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <FaGithub />
                        </motion.a>
                    </div>
                </div>
                <div className='fixed top-0 h-screen w-full -z-10' >
                    <div className='flex items-end absolute min-w-[320px] w-full h-full overflow-x-hidden bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[rgba(27,39,53,1)] to-black' >
                        {renderStars}
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center py-16 px-4 w-full min-h-screen bg-charcoal-light' >
                <div className='flex flex-col sm:flex-row sm:justify-center items-center sm:items-start flex-wrap gap-12 lg:gap-48' >
                    <motion.div className='sm:w-56 flex flex-col justify-center items-center gap-3 lg:gap-12'
                        initial={{ opacity: 0.15, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ style: 'spring', duration: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className='flex justify-center items-center h-36 w-36 lg:h-52 lg:w-52 relative hexagon bg-gradient-to-bl from-slate-700 to-lime-900'>
                            <IconContext.Provider value={{ size: '60%', color: '#121212' }}><FaRegLightbulb /></IconContext.Provider>
                        </div>
                        <p className='text-center sm:text-2xl' >Crafting user-centric experiences is my passion</p>
                    </motion.div>
                    <motion.div className='sm:w-56 flex flex-col justify-center items-center gap-3 lg:gap-12'
                        initial={{ opacity: 0.15, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ style: 'spring', duration: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className='flex justify-center items-center h-36 w-36 lg:h-52 lg:w-52 relative hexagon bg-gradient-to-bl from-slate-700 to-lime-900'>
                            <IconContext.Provider value={{ size: '60%', color: '#121212' }}><SiStarship /></IconContext.Provider>
                        </div>
                        <p className='text-center sm:text-2xl'>I aim for performant, scalable, and accessible solutions</p>
                    </motion.div>
                    <motion.div className='sm:w-56 flex flex-col justify-center items-center gap-3 lg:gap-12'
                        initial={{ opacity: 0.15, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ style: 'spring', duration: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className='flex justify-center items-center h-36 w-36 lg:h-52 lg:w-52 relative hexagon bg-gradient-to-bl from-slate-700 to-lime-900'>
                            <IconContext.Provider value={{ size: '60%', color: '#121212' }}><FaShieldAlt /></IconContext.Provider>
                        </div>
                        <p className='text-center sm:text-2xl'>Security best practices are a must</p>
                    </motion.div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Home;