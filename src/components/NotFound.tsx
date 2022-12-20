import notFoundIcon from '../assets/icon404.svg'
import styles from '../styles/NotFound.module.css'

const NotFound = () => {
    return (
        <div className={styles.container} >
            <div className={styles.section} >
                <div className={styles.sectionContent}>
                    <div className={styles.descContainer}>
                        <h1>Page not found</h1>
                        <p className={styles.desc}>It seems this page does not exist. You can find my <a className={styles.link} href="/" >homepage here</a></p>
                    </div>
                </div>
            </div>
            <div className={styles.section404}>
                <div className={styles.sectionContent}>
                    <img className={styles.notFoundIcon} src={notFoundIcon} alt="Page not found icon" />
                </div>
            </div>
        </div>

    )
}

export default NotFound