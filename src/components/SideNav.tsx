import Menu from './Menu'
import { useSelector } from 'react-redux'

interface Selector {
    nav: { showMenu: boolean }
}

const SideNav = () => {
    const { showMenu } = useSelector((state: Selector) => state.nav)
    return (
        <nav className="flex justify-center fixed top-0 w-full bg-none" >
            <Menu />
        </nav>
    )
}
export default SideNav