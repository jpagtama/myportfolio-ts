import styles from '../styles/LinkedInSVG.module.css'

const LinkedInSVG = () => {
    // rgb(85,107,47)
    return (
        <svg className={styles.svg} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}>
            <g transform="matrix(1.15835,0,0,1.12626,-3.22127,-1.94398)">
                <circle cx="13.14" cy="12.381" r="10.36" style={{ fill: "darkolivegreen" }} />
            </g>
            <g className={styles.inText} transform="matrix(0.958598,0,0,0.958598,-0.449959,6.83316)">
                <text x="4.727px" y="12.056px" style={{ fontFamily: "ArialRoundedMTBold, Arial Rounded MT Bold, sans-serif", fontSize: "18.777px", fill: "rgb(255,255,240)" }}>in</text>
            </g>
            <g className={styles.linkedInText} transform="matrix(0.958598,0,0,0.958598,-2.74342,2.29898)">
                <text x="4.727px" y="12.056px" style={{ fontFamily: "Georgia, serif", fontSize: "5.216px", fill: "rgb(255,255,240)" }}>LinkedIn</text>
            </g>
        </svg>
    )
}

export default LinkedInSVG