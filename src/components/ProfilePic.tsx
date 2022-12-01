import pic from '../assets/julianpagtama.png'
import styles from '../styles/personal/ProfilePic.module.css'

const ProfilePic = () => {
    return (
        <img className={styles.profileImg} src={pic} alt="Julian Pagtama" />
    )
}

export default ProfilePic