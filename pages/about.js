import Image from 'next/image'

export default function About() {
  return (
    <div className="content-container">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-image-container">
          <Image src='/aboutme.JPG' alt="Picture of me" height={250} width={200} priority />
        </div>
        <div className="about-text">
          <p>Hey! I'm Jeffrey Zou (I also go by Jeff). I was born and raised in Queens, New York. I am a full-stack web developer.</p>
          <p>I also love trying new restaurants and bubble tea shops, doing physical activities (hiking, rock climbing, ballroom dancing), and travelling.</p>
        </div>
      </div>
      <div className="grid-images">
        <div className="about-grid-image">
          <Image src='/rafting.jpeg' alt="Whitewater rafting" width={200} height={200} />
        </div>
        <div className="about-grid-image">
          <Image src='/hiking.JPG' alt="Hiking" width={200} height={200} />
        </div>
        <div className="about-grid-image">
          <Image src='/whiteface.jpeg' alt="Hiking" width={200} height={200} />
        </div>
      </div>
    </div>
  )
}