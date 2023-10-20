import { navActions } from '../store/navSlice';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

interface Selector {
    nav: { showMenu: boolean }
}

const variants = {
    animateTopToX: { rotate: -45, y: 8 },
    animateBottomToX: { rotate: 45, y: -8 },
    animateToHamburger: { rotate: 0, y: 0 },
}

const MenuButton = () => {
    const dispatch = useDispatch();
    const { showMenu } = useSelector((state: Selector) => state.nav);

    const clickHandler = () => {
        dispatch(navActions.toggleMenu());
    }

    return (
        <button onClick={clickHandler} className='flex flex-col justify-center items-center self-end gap-1 rounded-full h-12 w-12 bg-slate-700 visible sm:hidden border-none fixed top-0 right-0 mt-4 mr-4 focus:outline-none z-20'>
            <motion.span id='topLine' className='w-7 h-1 rounded-full bg-slate-200'
                animate={showMenu ? 'animateTopToX' : 'animateToHamburger'}
                variants={variants}
            >
            </motion.span>
            <motion.span id='midLine' className='w-7 h-1 rounded-full bg-slate-200'
                animate={{ opacity: showMenu ? 0 : 1, scaleX: showMenu ? 0 : 1 }}
                transition={{ style: 'spring' }}
            >
            </motion.span>
            <motion.span id='bottomLline' className='w-7 h-1 rounded-full bg-slate-200'
                animate={showMenu ? 'animateBottomToX' : 'animateToHamburger'}
                variants={variants}
            >
            </motion.span>
        </button>
    )
}

export default MenuButton