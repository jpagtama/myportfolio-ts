import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { navActions } from '../store/navSlice'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Experience = () => {
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
        <div className='flex flex-col justify-center items-center gap-12 bg-dark sm:gap-24 w-full min-h-screen py-8'>
            <motion.h1 className='text-5xl md:text-9xl text-center px-2 font-audiowide bg-gradient-to-b from-slate-100 to-slate-900 text-transparent bg-clip-text'
                initial={{ opacity: 0.0, x: '-100px' }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
            >
                Work Experience
            </motion.h1>
            <div className='' >
                <span >
                    <h2>Software Developer</h2>
                    <h3>Regal Medical Group</h3>
                    <p className='' >
                        Developed and maintained applications for one of the largest physician-led healthcare networks in Southern California. Applications used among thousands of doctors and patients across hospitals and urgent care centers.
                    </p>
                </span>
                <p className='' >January 2018 - March 2021</p>
            </div>
            <div className=''>
                <span className=''>
                    <h2>Web Developer</h2>
                    <h3>Nonfat Media (Breakdown Services)</h3>
                    <p className='' >
                        Worked within a team to maintain and engineer a system of applications recognized by the Casting Society of America as the primary distributor of casting breakdowns. Applications used to service casting directors, talent representatives, and actors within a seamless, casting ecosystem.
                    </p>
                </span>

                <p className='' >June 2014 - January 2018</p>
            </div>
        </div>
    )
}

export default Experience