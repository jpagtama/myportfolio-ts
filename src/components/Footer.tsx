import { useState, useEffect } from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiVite, SiTailwindcss } from 'react-icons/si';
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

    return (
        <div className='flex flex-col justify-center items-center gap-16 min-h-[75vh] p-4 bg-gradient-to-b from-zinc-950 to-black text-slate-300 text-center' >
            <div className='flex flex-col justify-center items-center gap-6'>
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
                <IconContext.Provider value={{ size: "3rem" }}>
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