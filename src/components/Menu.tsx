import MenuItem from './MenuItem'
import { useSelector } from 'react-redux'
import MenuButton from './MenuButton'
import styles from '../../styles/personal/Menu.module.css'

interface Selector {
    nav: { active: string }
}

const menuItems = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Interests']

function Menu() {
    const activeLabel = useSelector((state: Selector) => state.nav.active)
    const menuSections = menuItems.map((item, i) => {
        const isActive = item.toLowerCase() === activeLabel.toLowerCase()
        return <MenuItem key={i} title={item} isActive={isActive} />
    })

    return (
        <div className={styles.menuContainer}>
            <MenuButton />
            <ul className={styles.list}>
                {menuSections}
            </ul>
        </div>
    )
}

export default Menu