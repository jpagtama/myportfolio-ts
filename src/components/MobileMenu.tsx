import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MenuItem from './MenuItem';
import { motion, useAnimate, stagger } from 'framer-motion';

interface Selector {
    nav: { active: string }
}

interface Props {
    menuItems: string[]
}

const MobileMenu = ({ menuItems }: Props) => {

    const activeLabel = useSelector((state: Selector) => state.nav.active)
    const menuSections = menuItems.map((item, i) => {
        const isActive = item.toLowerCase() === activeLabel.toLowerCase()
        return <MenuItem key={i} title={item} isActive={isActive} index={i} />
    });

    return (
        <nav className='flex flex-col items-center h-full w-full'>
            <motion.ul className='flex flex-col gap-12 mt-24 text-slate-200'>
                {menuSections}
            </motion.ul>
        </nav>
    )
}

export default MobileMenu