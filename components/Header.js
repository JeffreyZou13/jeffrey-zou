import styles from './Header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <p className={styles['header-name']}> Jeffrey Zou </p>
      <div className={styles['menu']}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/projects"><a>Projects</a></Link>
        <a href="/resume.pdf" target="_blank">Resume</a>
      </div>
      <hr className={styles['header-line']} />
    </header>
  )
}
