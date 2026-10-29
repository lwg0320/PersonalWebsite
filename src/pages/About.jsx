import PageSection from '../components/PageSection'

export default function About() {
  return (
    <PageSection label="about">
      <h2>About</h2>
      <div className="about-grid">
        <p>
          I&rsquo;m a full-stack developer and AI agent builder finishing an MS in Computer
          Science at Columbia (expected Dec 2026), after a BA in Computer Science and a
          minor in Music at UC Berkeley. I founded Questscape, a mobile game platform for
          outdoor adventures, and Abiwork, an AI startup building workflow tools for
          engineering paperwork. I also enjoy exploring the outdoors with friends, which
          inspired Questscape.
        </p>

        <div className="about-quadrants">
          <div className="about-quadrant">
            <h3 className="about-subhead">School</h3>
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
          </div>

          <div className="about-quadrant">
            <h3 className="about-subhead">Interests</h3>
            <p>
              I look to take full ownership of the products I build, and I work hard and
              learn fast when a project pulls me in. I bring strong communication and
              leadership from directing dance teams of 40+ members, teaching a class at UC
              Berkeley, and tutoring students for three years.
            </p>
          </div>

          <div className="about-quadrant">
            <h3 className="about-subhead">Skills</h3>
            <div className="about-skills">
              <div className="about-skills-group">
                <span className="about-skills-label">AI &amp; Agents</span>
                <ul className="stack-list">
                  <li>LLM Agents</li>
                  <li>Agentic Harness Design</li>
                  <li>LLM Tool Calling</li>
                  <li>Claude API</li>
                  <li>LLM-as-Judge</li>
                  <li>Synthetic Data</li>
                  <li>Multi-Agent RL</li>
                  <li>Workflow State Machines</li>
                </ul>
              </div>
              <div className="about-skills-group">
                <span className="about-skills-label">Languages</span>
                <ul className="stack-list">
                  <li>Python</li>
                  <li>JavaScript/TypeScript</li>
                  <li>C</li>
                  <li>C#</li>
                  <li>Java</li>
                  <li>SQL</li>
                  <li>MATLAB</li>
                  <li>Ruby</li>
                  <li>R</li>
                  <li>LaTeX</li>
                  <li>D3</li>
                  <li>Go</li>
                </ul>
              </div>
              <div className="about-skills-group">
                <span className="about-skills-label">Mobile &amp; Web</span>
                <ul className="stack-list">
                  <li>React Native</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Vite</li>
                  <li>HTML/CSS</li>
                  <li>Firebase</li>
                  <li>Firestore</li>
                  <li>Supabase</li>
                  <li>RevenueCat</li>
                  <li>Google Cloud</li>
                  <li>App Deployment</li>
                </ul>
              </div>
              <div className="about-skills-group">
                <span className="about-skills-label">Frameworks &amp; Tools</span>
                <ul className="stack-list">
                  <li>Node.js</li>
                  <li>PyTorch</li>
                  <li>Scikit-learn</li>
                  <li>Pandas</li>
                  <li>Docker</li>
                  <li>Unity</li>
                  <li>Godot</li>
                  <li>CNN</li>
                  <li>Clustering</li>
                  <li>PCA</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-quadrant">
            <h3 className="about-subhead">Research</h3>
            <p>
              I lead a decentralized multi-agent reinforcement learning project at USC as
              primary author, with work published on arXiv and in peer-reviewed ASME and
              JCISE journals.
              Earlier, at Lawrence Berkeley National Lab, I designed RL circuits using
              stochastic computing with CNN accelerators.
            </p>
          </div>
        </div>

        <div className="about-experience">
          <h3 className="about-subhead">Experience</h3>
          <ul className="about-experience-list">
            <li>
              <span className="about-timeline-org">Abiwork</span>
              <span className="about-timeline-role">Founder · 2026 – Present</span>
              <p>
                Building an AI-powered B2B workflow tool for engineering paperwork. I
                interviewed users and built a demo agent that drafts request forms from
                conversation, with a code-controlled state machine keeping workflow logic
                deterministic and auditable.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </PageSection>
  )
}
