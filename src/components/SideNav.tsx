import { useEffect, useState } from 'react';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import { useSelector } from 'react-redux';
import MenuButton from './MenuButton';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

interface Selector {
    nav: { showMenu: boolean }
};

const menuItems = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Interests'];

const SideNav = () => {
    const { showMenu } = useSelector((state: Selector) => state.nav);


    return (
        <nav className='flex justify-center w-full fixed top-0 z-10' >
            <MenuButton />

            {/* Use for mobile view */}
            <AnimatePresence>
                {showMenu && (
                    <motion.div className={`flex flex-col sm:hidden w-full h-screen py-8 px-4 bg-indigo-300`}
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                        exit={{ y: '-100%' }}
                    >
                        <MobileMenu menuItems={menuItems} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Use for viewports larger than mobile */}
            <Menu menuItems={menuItems} />
        </nav>
    )
}
export default SideNav