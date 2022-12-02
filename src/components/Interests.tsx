import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { navActions } from '../store/navSlice'
import styles from '../styles/Interests.module.css'

const Interests = () => {
    const [alreadyViewed, setAlreadyViewed] = useState(false)
    const dispatch = useDispatch()
    const { ref, inView } = useInView({
        threshold: 0,
    })
    useEffect(() => {
        if (inView) dispatch(navActions.activate('interests'))
    }, [inView, dispatch])

    useEffect(() => {
        if (inView && !alreadyViewed) {
            setAlreadyViewed(true)
        }
    }, [inView, alreadyViewed])

    return (
        <React.Fragment>
            <div id="Interests" className={styles.headingContainer}>
                <h1 ref={ref} className={alreadyViewed ? styles.slideIn : ''}>Interests</h1>
            </div>
            <p className={`${styles.desc}`}>
                When I'm not coding, I'm working on digital art, gaming, or going to an escape room. If you have any escape room recommendations, please let me know! Thanks for stopping by :)
            </p>

        </React.Fragment>
    )
}

export default Interests