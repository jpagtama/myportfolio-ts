import Menu from './Menu';
import MobileMenu from './MobileMenu';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import MenuButton from './MenuButton';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = ['Home', 'Skills', 'Experience', 'Projects', 'About Me'];

const NavBar = () => {
    const { showMenu } = useSelector((state: RootState) => state.nav);

    return (
        <nav className='flex justify-center w-full fixed top-0 z-10' >
            <MenuButton />

            {/* Use for mobile view */}
            <AnimatePresence>
                {showMenu && (
                    <motion.div className={`flex flex-col sm:hidden w-full h-screen py-8 px-4 bg-gradient-to-bl from-slate-700 to-lime-900`}
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
export default NavBar;