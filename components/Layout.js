import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles['main-container']}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}