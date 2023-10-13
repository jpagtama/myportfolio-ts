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

    return (
        <>
            <MenuButton />
            <ul className='flex mt-8 rounded-full px-10 bg-transparent backdrop-blur-sm'>
                {menuSections}
            </ul>
        </>
    )
}

export default Menu