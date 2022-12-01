import styles from '../../styles/personal/MenuItem.module.css'

interface Props {
    title: string
    isActive: boolean
}

const MenuItem = (props: Props) => {
    return (
        <li className={`${styles.listItem} ${props.isActive && styles.active}`} >
            <a className={styles.navLink} href={`#${props.title}`} >{props.title}</a>
        </li>
    )
}

export default MenuItem