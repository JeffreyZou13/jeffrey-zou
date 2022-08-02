import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <FontAwesomeIcon className={styles['heart-icon']} icon={faHeart} /> by Jeffrey
      </footer>
    </>
  )
}
