import { navActions } from '../store/navSlice';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

interface Selector {
    nav: { showMenu: boolean }
}

const MenuButton = () => {
    const dispatch = useDispatch();
    const { showMenu } = useSelector((state: Selector) => state.nav);

    const clickHandler = () => {
        dispatch(navActions.toggleMenu());
    }

    return (
        <button onClick={clickHandler} className='flex flex-col justify-center items-center self-end gap-1 rounded-full h-12 w-12 bg-indigo-300 visible sm:hidden'>
            <motion.span id='topLine' className='w-7 h-1 rounded-full bg-white'
                animate={{ rotate: -45, y: 8 }}
                transition={{ style: 'spring' }}
            >
            </motion.span>
            <motion.span id='midLine' className='w-7 h-1 rounded-full bg-white'
                animate={{ opacity: 0 }}
                transition={{ style: 'spring' }}
            >
            </motion.span>
            <motion.span id='bottomLline' className='w-7 h-1 rounded-full bg-white'
                animate={{ rotate: 45, y: -8 }}
                transition={{ style: 'spring' }}
            >
            </motion.span>
        </button>
    )
}

export default MenuButton