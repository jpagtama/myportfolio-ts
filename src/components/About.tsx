import React, { useEffect, useState } from 'react';
import { navActions } from '../store/navSlice';
import { useDispatch } from 'react-redux';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useInView } from 'react-intersection-observer';
import lightBublIcon from '../assets/lightbulb_icon.svg';
import securityIcon from '../assets/security_icon.svg';
import dumbBellIcon from '../assets/dumbbell_icon.svg';

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
    }, [aboutInView, alreadyViewed])

    return (
        <React.Fragment>
            <div id='About' className='h-screen w-full flex flex-col justify-center items-center flex-wrap gap-8'>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8' >
                    <div className='flex flex-col justify-center items-center sm:items-end gap-0 sm:gap-2' >
                        <h1 ref={aboutRef} className='text-8xl md:text-9xl text-indigo-300' >Julian</h1>
                        <h1 className='text-5xl sm:text-8xl md:text-9xl text-indigo-300' >Pagtama</h1>
                    </div>
                    <ul className='flex flex-row sm:flex-col justify-start gap-2 md:gap-8 sm:gap-4 text-xs sm:text-lg md:text-3xl' >
                        <li>Software Developer</li>
                        <span className='visible sm:hidden' >&bull;</span>
                        <li>Los Angeles, CA</li>
                        <span className='visible sm:hidden' >&bull;</span>
                        <li>jpagtama@gmail.com</li>
                    </ul>
                </div>
                <div className='w-full flex justify-center gap-4'>
                    <a ref={linkedInRef} className='hover:scale-110 duration-150 text-6xl sm:text-7xl' href='https://www.linkedin.com/in/jpagtama/' target='_blank' rel='noreferrer' >
                        <IconContext.Provider value={{ color: 'darkolivegreen' }}><FaLinkedin /></IconContext.Provider>
                    </a>
                    <a ref={gitHubRef} className='hover:scale-110 duration-150 text-6xl sm:text-7xl' href='https://github.com/jpagtama' target='_blank' rel='noreferrer'>
                        <IconContext.Provider value={{ color: 'darkolivegreen' }}><FaGithub /></IconContext.Provider>
                    </a>
                </div>
            </div>
            <div ref={summaryRef} className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-16 sm:gap-48 w-full min-h-screen p-4' >
                <div className='sm:w-56 flex flex-col justify-center items-center gap-12' >
                    <img className='w-48 -order-1 sm:order-none' src={lightBublIcon} alt="experiences image" />
                    <p className='text-center sm:text-2xl' >Crafting user-centric experiences is my passion</p>
                </div>
                <div className='sm:w-56 flex flex-col justify-center items-center gap-12' >
                    <img className='w-48 -order-1 sm:order-none' src={securityIcon} alt="security image" />
                    <p className='text-center sm:text-2xl'>Security best practices are a must</p>
                </div>
                <div className='sm:w-56 flex flex-col justify-center items-center gap-12' >
                    <img className='w-48 -order-1 sm:order-none' src={dumbBellIcon} alt="performance image" />
                    <p className='text-center sm:text-2xl'>I aim for performant, scalable, and accessible solutions</p>
                </div>

            </div>
        </React.Fragment >
    )
}

export default About