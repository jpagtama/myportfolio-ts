import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { navActions } from '../store/navSlice';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

interface Props {
    title: string
    isActive: boolean
    index?: number
}

const MenuItem = (props: Props) => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(navActions.scrollTo(props.title));
        dispatch(navActions.openMenu(false));
    }

    return (
        <motion.li onClick={clickHandler}
            className='text-4xl sm:text-xl md:text-lg lg:text-3xl cursor-pointer'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.10, color: 'rgb(255 255 255)' }}
            transition={{ style: 'spring', duration: 0.25, delay: props.index ? props.index * 0.1 : 0, whileHover: { duration: 0.1 } }}
        >
            <motion.span
            >
                {props.title}
            </motion.span>
        </motion.li>
    )
}

export default MenuItem