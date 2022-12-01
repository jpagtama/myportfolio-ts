import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { navActions } from '../store/navSlice'
import styles from '../styles/Interests.module.css'

const Interests = () => {
    const dispatch = useDispatch()
    const { ref, inView } = useInView({
        threshold: 0,
    })
    useEffect(() => {
        if (inView) dispatch(navActions.activate('interests'))
    }, [inView, dispatch])

    return (
        <React.Fragment>
            <div id="Interests" className={styles.headingContainer}>
                <h1 ref={ref} className={inView ? styles.slideIn : ''}>Interests</h1>
            </div>
            <p className={`${styles.desc}`}>
                When I'm not coding, I'm working on digital art, gaming, or going to an escape room. If you have any escape room recommendations, please let me know! Thanks for stopping by :)
            </p>

        </React.Fragment>
    )
}

export default Interests