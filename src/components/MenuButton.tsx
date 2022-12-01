import { navActions } from '../store/navSlice'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../styles/MenuButton.module.css'

interface Selector {
    nav: { showMenu: boolean }
}

const MenuButton = () => {
    const dispatch = useDispatch()
    const { showMenu } = useSelector((state: Selector) => state.nav)
    const clickHandler = () => {
        dispatch(navActions.toggleMenu())
    }

    return (
        <button className={styles.menuButton} onClick={clickHandler} >
            <span className={`${styles.top} ${showMenu ? styles.animateTopToX : ''}`}></span>
            <span className={`${styles.mid} ${showMenu ? styles.animateMidToX : ''}`}></span>
            <span className={`${styles.bottom} ${showMenu ? styles.animateBottomToX : ''}`}></span>
        </button>
    )
}

export default MenuButton