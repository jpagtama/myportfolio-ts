import { useDispatch } from 'react-redux';
import { navActions } from '../store/navSlice';
import { motion } from 'framer-motion';

interface Props {
    title: string
    isActive: boolean
    index?: number
}

const MenuItem = (props: Props) => {
    const dispatch = useDispatch();
    const { title, isActive, index } = props;

    const clickHandler = () => {
        dispatch(navActions.scrollTo(title.toLowerCase()));
        dispatch(navActions.openMenu(false));
    }

    return (
        <motion.li
            onClick={clickHandler}
            className={`${isActive ? 'text-lime-700 duration-150' : ''} text-4xl sm:text-xl md:text-lg lg:text-3xl cursor-pointer hover:text-white`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.10 }}
            transition={{ style: 'spring', duration: 0.25, delay: index ? index * 0.1 : 0, whileHover: { duration: 0.1 } }}
        >
            <motion.span
            >
                {title}
            </motion.span>
        </motion.li>
    )
}

export default MenuItem