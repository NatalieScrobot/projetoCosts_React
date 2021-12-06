import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from'./Footer.module.css'

function Footer() {
    return (
        <footer className= {styles.footer}>
        <ul className={styles.social_list}>
            <li className={styles.li}> 
                <FaFacebook/>
            </li>
            <li className={styles.li}> 
                <FaInstagram/>
            </li>
            <li className={styles.li}> 
                <FaLinkedin/>
            </li>
        </ul>
        <p className={styles.copy_right}>
            <span>Projeto Costs com React!</span> &copy; 2021
        </p>
        </footer>
    )
}
export default Footer