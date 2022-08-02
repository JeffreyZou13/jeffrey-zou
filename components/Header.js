import styles from './Header.module.css'

export default function Header() {
  return (
    <header>
      <p className={styles['header-name']}> Jeffrey Zou </p>
      <div className={styles['menu']}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="/resume">Resume</a>
      </div>
      <hr className={styles['header-line']} />
    </header>
  )
}
