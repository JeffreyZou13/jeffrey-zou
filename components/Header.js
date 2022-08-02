export default function Header() {
  return (
    <header>
      <p className="header-name"> Jeffrey Zou </p>
      <div className="menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="/resume">Resume</a>
      </div>
      <hr className="header-line" />
    </header>
  )
}
