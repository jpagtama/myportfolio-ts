import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiVite, SiTailwindcss } from 'react-icons/si';
import { BsChevronDoubleUp } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib';
import { motion } from 'framer-motion';

const Footer = () => {
    const [wiggle, setWiggle] = useState(false);
    const [emailCopied, setEmailCopied] = useState(false);

    useEffect(() => {
        if (emailCopied) {
            setTimeout(() => {
                setEmailCopied(false);
            }, 1000);
        }
    }, [emailCopied]);

    const year = new Date().getFullYear();

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText('jpagtama@gmail.com');
        setWiggle(true);
        setEmailCopied(true);
    }

    const scrollToTop = () => {
        const element = document.getElementById('home');
        element?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className='flex flex-col justify-center items-center gap-16 h-[600px] sm:min-h-[75vh] p-4 bg-gradient-to-b from-zinc-950 to-black text-slate-300 text-center relative' >
            <button className='group h-16 w-24 text-lime-700 p-0 bg-transparent hover:animate-bounce hover:text-lime-500 transition duration-300 absolute -top-8' onClick={scrollToTop}>
                <IconContext.Provider value={{ size: '100%' }}>
                    <BsChevronDoubleUp />
                </IconContext.Provider>
                <span className='text-slate-600 group-hover:text-slate-300 duration-300'>back to top</span>
            </button>
            <div className='flex flex-col justify-center items-center gap-6 mt-24'>
                <p className='text-4xl text-center'>Let's work together.</p>
                <p>Contact me at:
                    <button className={`hover:text-slate-100 hover:bg-lime-900 transition duration-300 outline-none ring-0 mx-2 w-48 ${wiggle ? 'animate-wiggle' : ''}`}
                        onClick={copyToClipboard}
                        onAnimationEnd={() => setWiggle(false)}
                    >
                        {emailCopied ?
                            <span className='text-lime-500'>copied!</span> :
                            <motion.span initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} >jpagtama@gmail.com</motion.span>
                        }
                    </button>
                </p>
                <div className='flex justify-center gap-4'>
                    <a className='text-lime-700 hover:text-lime-400 hover:scale-110 duration-150' href="https://www.linkedin.com/in/jpagtama" target="_blank" rel="noopener noreferrer" >linkedin</a>
                    <a className='text-lime-700 hover:text-lime-400 hover:scale-110 duration-150' href="https://www.github.com/jpagtama" target="_blank" rel="noopener noreferrer" >github</a>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <span>Created using these technologies:</span>
                <IconContext.Provider value={{ size: "40px" }}>
                    <div style={{ display: "flex", gap: "1.5rem" }}>
                        <SiVite />
                        <FaReact />
                        <SiTypescript />
                        <SiTailwindcss />
                    </div>
                </IconContext.Provider>
            </div>
            <p className='text-slate-600'>Julian Pagtama &copy; {year}</p>
        </div>
    )
}

export default Footer