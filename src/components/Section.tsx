import styles from '../styles/Section.module.css'

interface Props {
    children: JSX.Element
}

const Section = (props: Props) => {
    return (
        <section className={styles.section} >{props.children}</section>
    )
}

export default Section