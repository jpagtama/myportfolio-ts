import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { navActions } from '../store/navSlice';
import { FaReact, FaNode, FaGithubAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiJest } from 'react-icons/si';
import { TbBrandJavascript, TbBrandNextjs } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';

const Skills = () => {
    const [alreadyViewed, setAlreadyViewed] = useState(false)
    const dispatch = useDispatch();

    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView) dispatch(navActions.activate('skills'))
    }, [inView, dispatch]);
    useEffect(() => {
        if (inView && !alreadyViewed) {
            setAlreadyViewed(true)
        }
    }, [inView, alreadyViewed])

    return (
        <div className='flex flex-col justify-center items-center gap-12 bg-charcoal sm:gap-24 w-full min-h-screen py-8'>
            <motion.h1 ref={ref} className='text-5xl md:text-9xl text-center px-2 font-audiowide bg-gradient-to-b from-slate-100 to-slate-900 text-transparent bg-clip-text'
                initial={{ opacity: 0.0, x: '-100px' }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
            >
                Technical Skills
            </motion.h1>
            <motion.div className='flex flex-wrap justify-center gap-6 sm:gap-12 w-3/4 max-w-5xl'
                initial={{ opacity: 0.15, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ style: 'spring', duration: 0.7 }}
                viewport={{ once: true }}
            >
                <motion.div className='flex flex-col gap-1 text-center w-16 h-16 sm:w-28 sm:h-28' >
                    <IconContext.Provider value={{ size: '100%', color: 'rgb(148 163 184)' }}><FaReact /></IconContext.Provider>
                    <span>React</span>
                </motion.div>
                <motion.div className='flex flex-col gap-1 text-center w-16 h-16 sm:w-28 sm:h-28' >
                    <IconContext.Provider value={{ size: '100%', color: 'rgb(148 163 184)' }}><TbBrandJavascript /></IconContext.Provider>
                    <span>JavaScript</span>
                </motion.div>
                <motion.div className='flex flex-col gap-1 text-center w-16 h-16 sm:w-28 sm:h-28' >
                    <IconContext.Provider value={{ size: '100%', color: 'rgb(148 163 184)' }}><SiTypescript /></IconContext.Provider>
                    <span>TypeScript</span>
                </motion.div>
                <motion.div className='flex flex-col gap-1 text-center w-16 h-16 sm:w-28 sm:h-28' >
                    <IconContext.Provider value={{ size: '100%', color: 'rgb(148 163 184)' }}><TbBrandNextjs /></IconContext.Provider>
                    <span>Next.js</span>
                </motion.div>
                <motion.div className='flex flex-col gap-1 text-center w-16 h-16 sm:w-28 sm:h-28' >
                    <IconContext.Provider value={{ size: '100%', color: 'rgb(148 163 184)' }}><FaGithubAlt /></IconContext.Provider>
                    <span>GitHub</span>
                </motion.div>
                <motion.div className='flex flex-col gap-1 text-center w-16 h-16 sm:w-28 sm:h-28' >
                    <IconContext.Provider value={{ size: '100%', color: 'rgb(148 163 184)' }}><FaNode /></IconContext.Provider>
                    <span>Node.js</span>
                </motion.div>
                <motion.div className='flex flex-col gap-1 text-center w-16 h-16 sm:w-28 sm:h-28' >
                    <IconContext.Provider value={{ size: '100%', color: 'rgb(148 163 184)' }}><SiPostgresql /></IconContext.Provider>
                    <span>SQL</span>
                </motion.div>
                <motion.div className='flex flex-col gap-1 text-center w-16 h-16 sm:w-28 sm:h-28' >
                    <IconContext.Provider value={{ size: '100%', color: 'rgb(148 163 184)' }}><SiJest /></IconContext.Provider>
                    <span>Jest</span>
                </motion.div>
                <motion.div className='flex flex-col gap-1 text-center w-16 h-16 sm:w-28 sm:h-28' >
                    <IconContext.Provider value={{ size: '100%', color: 'rgb(148 163 184)' }}><FaHtml5 /></IconContext.Provider>
                    <span>HTML</span>
                </motion.div>
                <motion.div className='flex flex-col gap-1 text-center w-16 h-16 sm:w-28 sm:h-28' >
                    <IconContext.Provider value={{ size: '100%', color: 'rgb(148 163 184)' }}><FaCss3Alt /></IconContext.Provider>
                    <span>CSS</span>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Skills