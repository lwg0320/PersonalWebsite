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
          <p className="hero-kicker">
            <span className="hero-kicker-dot" aria-hidden="true" />
            Builder · problem solver · product thinker
          </p>
          <h1>David Ge</h1>
          <p className="hero-headline">
            I love solving problems by building useful things.
          </p>
          <p className="hero-role">
            MS Computer Science @ Columbia · UC Berkeley alum
          </p>
          <p className="hero-line">
            I take ideas from first sketch to shipped software—from Questscape&rsquo;s outdoor
            games to Abiwork&rsquo;s AI workflows for engineering teams. My USC research on
            decentralized multi-agent reinforcement learning has been published in
            peer-reviewed ASME and JCISE journals.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">
              Explore my work
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              Contact me
            </Link>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <img className="hero-photo" src={homePhoto} alt="David Ge" />
          <div className="hero-photo-note">
            <span>Currently building</span>
            <strong>Questscape + Abiwork</strong>
            <span>Mobile games &amp; AI workflows</span>
          </div>
        </div>
      </div>
    </section>
  )
}
