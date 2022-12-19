import { useDispatch } from 'react-redux'
import { navActions } from '../store/navSlice'
import styles from '../styles/MenuItem.module.css'

interface Props {
    title: string
    isActive: boolean
}

const MenuItem = (props: Props) => {
    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch(navActions.scrollTo(props.title))
        dispatch(navActions.openMenu(false))
    }

    return (
        <li className={`${styles.listItem} ${props.isActive && styles.active}`} onClick={clickHandler}>
            <span>{props.title}</span>
        </li>
    )
}

export default MenuItem