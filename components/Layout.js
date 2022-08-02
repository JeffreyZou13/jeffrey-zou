import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jeffrey Zou</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles['main-container']}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}