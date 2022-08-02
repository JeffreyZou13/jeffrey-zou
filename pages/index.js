import Head from 'next/head'
import Header from '@components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jeffrey Zou</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main-container">
        <Header />
        
        <h1>Hello there!</h1>
        <p>Welcome to my page. Come get to know a little about me and take a look at my projects</p>
        <p>Check out some of my social links below:</p>
        <a href="https://www.linkedin.com/in/jeffreyzou13" className="social-button linkedin" target="_blank">
          <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
          Linkedin
        </a>
        <a href="https://github.com/JeffreyZou13" className="social-button github" target="_blank">
          <FontAwesomeIcon className="social-icon" icon={faGithub} />
          Github
        </a>
        <a href="mailto:jeffreyzou13@gmail.com" className="social-button email">
          <FontAwesomeIcon className="social-icon" icon={faEnvelope} />
          Email
        </a>
        
        <Footer />
      </div>
    </div>
  )
}
