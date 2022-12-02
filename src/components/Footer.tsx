import { FaReact, FaNode, FaJs } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si';
import { IconContext } from 'react-icons/lib'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className={styles.footerContainer}>
            <IconContext.Provider value={{ color: "gainsboro", size: "2rem" }}>
                <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
                    <FaNode />
                    <SiTypescript />
                    <FaReact />
                    <FaJs />
                </div>
            </IconContext.Provider>
            <p className={styles.sideNote}>Contact me at jpagtama@gmail.com</p>
            <p className={styles.sideNote}>Julian Pagtama &copy; {year}</p>
        </div>
    )
}

export default Footer