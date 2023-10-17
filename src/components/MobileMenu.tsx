import React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from './MenuItem';

interface Selector {
    nav: { active: string }
}

interface Props {
    menuItems: string[]
}

const MobileMenu = ({ menuItems }: Props) => {

    const activeLabel = useSelector((state: Selector) => state.nav.active)
    const menuSections = menuItems.map((item, i) => {
        const isActive = item.toLowerCase() === activeLabel.toLowerCase()
        return <MenuItem key={i} title={item} isActive={isActive} />
    });

    return (
        <nav className='flex flex-col h-full w-full'>
            <ul className='flex flex-col gap-8'>
                {menuSections}
            </ul>
        </nav>
    )
}

export default MobileMenu