import { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';

interface Props {
    menuItems: string[]
}

function Menu({ menuItems }: Props) {
    const [prevScrollVal, setPrevScrollVal] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);
    const [showNav, setShowNav] = useState(true);
    const activeLabel = useSelector((state: RootState) => state.nav.active);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsAtTop(latest === 0);
        if (latest > prevScrollVal) setShowNav(false);
        else if (latest < prevScrollVal) setShowNav(true);
        setPrevScrollVal(latest);
    });

    const menuSections = menuItems.map((item, i) => {
        const isActive = item.toLowerCase() === activeLabel.toLowerCase().replace('_', ' ');
        return <MenuItem key={i} title={item} isActive={isActive} />;
    });

    return <AnimatePresence>
        {showNav &&
            <motion.nav
                className='hidden sm:block'
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                exit={{ opacity: 0, y: -100 }}
            >
                <ul className={`flex sm:flex-row items-center sm:gap-4 md:gap-12 mt-4 lg:mt-8 rounded-full px-10 sm:h-16 bg-slate-700 ${isAtTop ? 'bg-opacity-0 text-slate-700' : 'bg-opacity-90 text-slate-400 hover:bg-opacity-100'} duration-150 `}>
                    {menuSections}
                </ul>
            </motion.nav>
        }
    </AnimatePresence>
}

export default Menu