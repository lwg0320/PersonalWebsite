import PageSection from '../components/PageSection'

export default function About() {
  return (
    <PageSection label="about">
      <h2>About</h2>
      <div className="about-grid">
        <p>
          I&rsquo;m a full-stack and mobile developer finishing an MS in Computer Science
          at Columbia (expected Dec 2026), after a BA in Computer Science and a minor in
          Music at UC Berkeley. My main project, Questscape, is a shipped React Native app
          on the App Store and Google Play with 100+ users — I own the full product
          lifecycle, frontend to Firebase/Google Cloud backend.
        </p>
        <p>
          Alongside building, I do applied ML research: I lead a decentralized
          multi-agent reinforcement learning project at USC as primary author, with work
          published on arXiv and accepted to ASME and JCISE. Earlier, at Lawrence Berkeley
          National Lab, I designed RL circuits using stochastic computing with CNN
          accelerators.
        </p>
        <p>
          When I&rsquo;m not shipping features or training agents, I&rsquo;m usually
          outside myself — often trying to identify whatever plant just stopped me
          mid-hike.
        </p>
      </div>
    </PageSection>
  )
}
