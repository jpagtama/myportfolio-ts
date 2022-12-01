import styles from '../styles/GitHubSVG.module.css'

const GitHubSVG = () => {
    return (
        <svg className={styles.svg} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}>
            <g transform="matrix(1.15835,0,0,1.12626,-3.22127,-1.94398)">
                <circle cx="13.14" cy="12.381" r="10.36" style={{ fill: "rgb(85,107,47)" }} />
            </g>
            <g className={styles.gitHubText} transform="matrix(1.21037,0,0,1.26711,-1.25063,-1.55575)">
                <text x="4.727px" y="12.056px" style={{ fontFamily: "Athelas-Regular, Athelas", fontSize: "3.946px", fill: "rgb(255,255,240)" }}>GitHub</text>
            </g>
            <path className={styles.gitHubMascot} d="M14.883,6.458C15.888,5.783 16.808,5.367 17.951,5.326C17.951,5.326 18.21,5.971 18.264,6.601C18.335,7.44 18.179,8.031 18.09,8.287C18.179,8.394 18.263,8.505 18.34,8.621C19.556,10.432 19.865,14.102 17.438,15.884C16.667,16.45 15.534,16.835 14.269,17.039C14.328,17.112 14.381,17.189 14.428,17.273C15.632,19.419 14.314,22.082 15.078,24L9.151,24C9.151,24 9.44,22.359 8.946,20.165C7.836,20.568 6.729,20.259 6.098,19.834C5.389,19.357 5.29,18.313 4.755,17.691C4.221,17.069 3.569,16.85 3.682,16.532C3.796,16.213 4.574,16.532 5.148,16.897C5.722,17.262 6.132,18.241 6.934,18.732C7.508,19.084 8.701,18.738 9.224,18.589C9.304,17.939 9.625,17.329 9.907,17.088C8.603,16.884 7.358,16.452 6.567,15.871C4.14,14.09 4.445,10.382 5.657,8.571C5.717,8.481 5.78,8.394 5.847,8.31C5.761,8.067 5.592,7.466 5.666,6.601C5.719,5.971 5.979,5.326 5.979,5.326C7.122,5.367 8.042,5.783 9.047,6.458C10,6.213 11.023,6.107 12,6.107C12.955,6.107 13.951,6.216 14.883,6.458Z" style={{ fill: "url(#_Linear1)" }} />
            <defs>
                <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(3.30515e-15,-11.6675,11.6675,3.30515e-15,12,23.6675)"><stop offset="0" style={{ stopColor: "rgb(255,255,240)", stopOpacity: 0 }} /><stop offset="0.36" style={{ stopColor: "rgb(255,255,240)", stopOpacity: "0.85" }} /><stop offset="1" style={{ stopColor: "rgb(255,255,240)", stopOpacity: 1 }} /></linearGradient>
            </defs>
        </svg>
    )
}

export default GitHubSVG