import PageSection from '../components/PageSection'

export default function About() {
  return (
    <PageSection label="about">
      <h2>About</h2>
      <div className="about-grid">
        <p>
          I&rsquo;m a full-stack and mobile developer finishing an MS in Computer Science
          at Columbia (expected Dec 2026), after a BA in Computer Science and a minor in
          Music at UC Berkeley. Outside of coding, I enjoy exploring the outdoors with friends,
          which inspired me to create Questscape—a React Native app on the App Store and Google Play that helps people turn outdoor adventures into interactive games.
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
                <span className="about-skills-label">Languages</span>
                <ul className="stack-list">
                  <li>Python</li>
                  <li>React</li>
                  <li>C</li>
                  <li>C#</li>
                  <li>Java</li>
                  <li>JS/TS</li>
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
                <span className="about-skills-label">Frameworks &amp; Tools</span>
                <ul className="stack-list">
                  <li>Node.js</li>
                  <li>LLM Tool Calling</li>
                  <li>Firebase</li>
                  <li>Google Cloud</li>
                  <li>PyTorch</li>
                  <li>Scikit-learn</li>
                  <li>Pandas</li>
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
              primary author, with work published on arXiv and accepted to ASME and JCISE.
              Earlier, at Lawrence Berkeley National Lab, I designed RL circuits using
              stochastic computing with CNN accelerators.
            </p>
          </div>
        </div>
      </div>
    </PageSection>
  )
}