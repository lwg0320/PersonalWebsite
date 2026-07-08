import { Link } from 'react-router-dom'
import homePhoto from '../homephoto.png'

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-topo" aria-hidden="true">
        <svg viewBox="0 0 600 400" preserveAspectRatio="none">
          <path d="M-20,340 C120,300 180,380 300,330 C420,280 480,360 620,300" />
          <path d="M-20,280 C120,240 180,320 300,270 C420,220 480,300 620,240" />
          <path d="M-20,220 C120,180 180,260 300,210 C420,160 480,240 620,180" />
        </svg>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>David Ge</h1>
          <p className="hero-role">
            MS CS @ Columbia and CS @ Berkeley · Founder of Questscape · AI and ML research at USC and LBNL
          </p>
          <p className="hero-line">
            Full-stack and mobile developer with a shipped iOS/Android app live on the App
            Store and Google Play. I also do applied ML research — published in ASME and
            JCISE — on multi-agent systems and reinforcement learning.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">
              See what I&rsquo;ve built
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              Get in touch
            </Link>
          </div>
        </div>
        <img
          className="hero-photo"
          src={homePhoto}
          alt="David Ge"
        />
      </div>
    </section>
  )
}