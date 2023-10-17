import { useEffect, useState } from 'react';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import { useSelector } from 'react-redux';
import MenuButton from './MenuButton';
import { motion } from 'framer-motion';

interface Selector {
    nav: { showMenu: boolean }
};

const menuItems = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Interests'];

const SideNav = () => {
    const { showMenu } = useSelector((state: Selector) => state.nav);

    useEffect(() => {

    }, []);

    console.log("showMenu:>>", showMenu);

    return (
        <motion.nav className='flex justify-center w-full fixed top-0 z-10' >
            <MenuButton />
            <div className={`flex flex-col sm:hidden ${showMenu ? 'block' : 'hidden'} w-full h-screen py-8 px-4 bg-red-500`} >
                <MobileMenu menuItems={menuItems} />
            </div>
            <Menu menuItems={menuItems} />
        </motion.nav>
    )
}
export default SideNav