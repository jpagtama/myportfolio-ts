import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { navActions } from '../store/navSlice';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import office1 from '../assets/office1.webp';
import office2 from '../assets/office2.webp';

const Experience = () => {
    const [openRegal, setOpenRegal] = useState(false);
    const [openNonfat, setOpenNonfat] = useState(false);
    const dispatch = useDispatch()
    const { ref: expRef, inView: expInView } = useInView({
        threshold: 0,
    })
    const { ref: firstSummaryRef, inView: firstSummaryInView } = useInView({
        threshold: 0,
        triggerOnce: true
    })
    const { ref: secondSummaryRef, inView: secondSummaryInView } = useInView({
        threshold: 0,
        triggerOnce: true
    })

    const [alreadyViewed, setAlreadyViewed] = useState(false)

    useEffect(() => {
        if (expInView) dispatch(navActions.activate('experience'))
    }, [expInView, dispatch])

    useEffect(() => {
        if (expInView && !alreadyViewed) {
            setAlreadyViewed(true)
        }
    }, [expInView, alreadyViewed])

    return (
        <div className='flex flex-col justify-center items-center gap-12 bg-charcoal-light sm:gap-24 w-full min-h-screen py-8 overflow-x-hidden'>
            <motion.h1 className='text-5xl md:text-9xl text-center px-2 font-audiowide bg-gradient-to-b from-slate-100 to-slate-900 text-transparent bg-clip-text'
                initial={{ opacity: 0.0, x: '100px' }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
            >
                Work Experience
            </motion.h1>
            <div className='flex flex-col justify-start items-center gap-4 w-full'>
                <div >
                    <motion.div
                        onClick={() => setOpenRegal(!openRegal)}
                        className='flex flex-col justify-start w-full sm:max-w-[800px] h-[200px] bg-charcoal hover:cursor-pointer'
                    >
                        <figure className='w-full h-[200px] bg-no-repeat' style={{
                            backgroundImage: `url(${office1})`,
                            backgroundPosition: 'center left',
                        }} >
                            <figcaption className='flex flex-col justify-center items-center h-full w-full bg-lime-900 bg-opacity-70'>
                                <span className='text-2xl sm:text-6xl font-thin text-center'>REGAL MEDICAL GROUP</span>
                                <span className='text-md sm:text-2xl'>Software Developer</span>
                            </figcaption>
                        </figure>
                    </motion.div>
                    <motion.div className={`max-w-[800px] bg-charcoal overflow-hidden`}
                        onClick={() => setOpenRegal(!openRegal)}
                        initial={{ height: 0 }}
                        animate={{ height: !openRegal ? 0 : 200 }}
                    >
                        <p className='' >January 2018 - March 2021</p>
                        <p className='w-full' >
                            Developed and maintained applications for one of the largest physician-led healthcare networks in Southern California. Applications used among thousands of doctors and patients across hospitals and urgent care centers.
                        </p>
                    </motion.div>
                </div>
                <div >
                    <motion.div
                        onClick={() => setOpenNonfat(!openNonfat)}
                        className='flex flex-col justify-start w-full sm:max-w-[800px] h-[200px] bg-charcoal hover:cursor-pointer'
                    >
                        <figure className='w-full h-[200px] bg-no-repeat' style={{
                            backgroundImage: `url(${office2})`,
                            backgroundPosition: 'center left',
                        }} >
                            <figcaption className='flex flex-col justify-center items-center h-full w-full bg-lime-900 bg-opacity-70'>
                                <span className='text-2xl sm:text-6xl font-thin text-center'>NONFAT MEDIA</span>
                                <span className='text-md sm:text-2xl'>Web Developer</span>
                            </figcaption>
                        </figure>
                    </motion.div>
                    <motion.div className={`max-w-[800px] bg-charcoal overflow-hidden`}
                        onClick={() => setOpenNonfat(!openNonfat)}
                        initial={{ height: 0 }}
                        animate={{ height: !openNonfat ? 0 : 200 }}
                    >
                        <p className='' >June 2014 - January 2018</p>
                        <p className='w-full' >
                            Worked within a team to maintain and engineer a system of applications recognized by the Casting Society of America as the primary distributor of casting breakdowns. Applications used to service casting directors, talent representatives, and actors within a seamless, casting ecosystem.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default Experience