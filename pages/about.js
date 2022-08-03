import Image from 'next/image'
import aboutMePic from '/public/aboutme.JPG'
import rafting from '/public/rafting.jpeg'
import hiking from '/public/hiking.JPG'
import whiteface from '/public/whiteface.jpeg'

export default function About() {
  return (
    <div className="content-container">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-image-container">
          <Image src={aboutMePic} alt="Picture of me" />
        </div>
        <div className="about-text">
          <p>Hey! I'm Jeffrey Zou (I also go by Jeff). I was born and raised in Queens, New York. I am a full-stack web developer.</p>
          <p>I also love trying new restaurants and bubble tea shops, doing physical activities (hiking, rock climbing, ballroom dancing), and travelling.</p>
        </div>
      </div>
      <div className="grid-images">
        <div className="about-grid-image">
          <Image src={rafting} alt="Whitewater rafting" width={200} height={200} className="about-grid-image-content" />
        </div>
        <div className="about-grid-image">
          <Image src={hiking} alt="Hiking" width={200} height={200} className="about-grid-image-content" />
        </div>
        <div className="about-grid-image">
          <Image src={whiteface} alt="Hiking" width={200} height={200} className="about-grid-image-content" />
        </div>
      </div>
    </div>
  )
}