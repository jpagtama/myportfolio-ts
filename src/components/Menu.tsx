import MenuItem from './MenuItem'
import { useSelector } from 'react-redux'
import MenuButton from './MenuButton'
import styles from '../styles/Menu.module.css'

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

    return <nav className='hidden sm:block'>
        <ul className='flex sm:flex-row sm:mt-8 rounded-full px-10 sm:bg-transparent sm:backdrop-blur-sm'>
            {menuSections}
        </ul>
    </nav>

}

export default Menu