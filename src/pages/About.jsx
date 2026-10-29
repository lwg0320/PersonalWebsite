import PageSection from '../components/PageSection'

const SKILL_GROUPS = [
  {
    label: 'AI & Agents',
    items: [
      'LLM Agents',
      'Agentic Harness Design',
      'LLM Tool Calling',
      'Claude API',
      'LLM-as-Judge',
      'Synthetic Data',
      'Multi-Agent RL',
      'Workflow State Machines',
    ],
  },
  {
    label: 'Languages',
    items: [
      'Python',
      'JavaScript/TypeScript',
      'C',
      'C#',
      'Java',
      'SQL',
      'MATLAB',
      'Ruby',
      'R',
      'LaTeX',
      'D3',
      'Go',
    ],
  },
  {
    label: 'Mobile & Web',
    items: [
      'React Native',
      'React',
      'Next.js',
      'Vite',
      'HTML/CSS',
      'Firebase',
      'Firestore',
      'Supabase',
      'RevenueCat',
      'Google Cloud',
      'App Deployment',
    ],
  },
  {
    label: 'Frameworks & Tools',
    items: [
      'Node.js',
      'PyTorch',
      'Scikit-learn',
      'Pandas',
      'Docker',
      'Unity',
      'Godot',
      'CNN',
      'Clustering',
      'PCA',
    ],
  },
]

export default function About() {
  return (
    <PageSection label="about" className="section-about">
      <h2>About</h2>
      <div className="about-grid">
        <div className="about-intro">
          <p>
            I&rsquo;m a full-stack developer and AI agent builder finishing an MS in Computer
            Science at Columbia (expected Dec 2026), after a BA in Computer Science and a
            minor in Music at UC Berkeley. I founded Questscape, a mobile game platform for
            outdoor adventures, and Abiwork, an AI startup building workflow tools for
            engineering paperwork. I also enjoy exploring the outdoors with friends, which
            inspired Questscape.
          </p>
        </div>

        <div className="about-highlights">
          <article className="about-card">
            <h3 className="about-subhead">Education</h3>
            <ul className="about-timeline">
              <li>
                <span className="about-timeline-org">Columbia University</span>
                <span className="about-timeline-role">MS in Computer Science &mdash; expected Dec 2026</span>
                <span className="about-timeline-gpa">GPA: 4.094</span>
              </li>
              <li>
                <span className="about-timeline-org">UC Berkeley</span>
                <span className="about-timeline-role">BA in Computer Science, minor in Music</span>
                <span className="about-timeline-gpa">GPA: 3.848</span>
              </li>
            </ul>
          </article>

          <article className="about-card">
            <h3 className="about-subhead">Interests</h3>
            <p>
              I love taking ownership of a problem and building a thoughtful solution. I
              bring communication and leadership experience from directing dance teams of
              40+ members, teaching a class at UC Berkeley, and tutoring students for three
              years.
            </p>
          </article>

          <article className="about-card">
            <h3 className="about-subhead">Research</h3>
            <p>
              At USC, I lead decentralized multi-agent reinforcement learning research as
              primary author, with work published on arXiv and in peer-reviewed ASME and
              JCISE journals. Earlier, at Lawrence Berkeley National Lab, I designed RL
              circuits using stochastic computing with CNN accelerators.
            </p>
          </article>
        </div>

        <section className="about-card about-skills-card" aria-labelledby="about-skills-heading">
          <div className="about-skills-heading">
            <h3 className="about-subhead" id="about-skills-heading">
              Skills &amp; Tools
            </h3>
            <span>What I use to turn problems into products</span>
          </div>
          <div className="about-skills">
            {SKILL_GROUPS.map((group) => (
              <div className="about-skills-group" key={group.label}>
                <span className="about-skills-label">{group.label}</span>
                <ul className="stack-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageSection>
  )
}
