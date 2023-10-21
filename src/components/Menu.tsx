import { useState } from 'react'
import MenuItem from './MenuItem'
import { useSelector } from 'react-redux'
import MenuButton from './MenuButton'
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'

interface Selector {
    nav: { active: string }
}

interface Props {
    menuItems: string[]
}

function Menu({ menuItems }: Props) {
    const [prevScrollVal, setPrevScrollVal] = useState(0);
    const [showNav, setShowNav] = useState(true);
    const activeLabel = useSelector((state: Selector) => state.nav.active)
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > prevScrollVal) setShowNav(false);
        else if (latest < prevScrollVal) setShowNav(true);
        setPrevScrollVal(latest);
    });

    const menuSections = menuItems.map((item, i) => {
        const isActive = item.toLowerCase() === activeLabel.toLowerCase()
        return <MenuItem key={i} title={item} isActive={isActive} />
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
                <ul className='flex sm:flex-row items-center sm:gap-4 md:gap-12 sm:mt-8 rounded-full px-10 sm:h-16 bg-slate-700 bg-opacity-50 hover:bg-opacity-100 duration-150 text-slate-100'>
                    {menuSections}
                </ul>
            </motion.nav>
        }
    </AnimatePresence>
}

export default Menu