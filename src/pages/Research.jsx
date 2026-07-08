import PageSection from '../components/PageSection'

const RESEARCH = [
  {
    org: 'University of Southern California',
    role: 'Research Associate · June 2024 – Present',
    description:
      'Lead a cross-institutional team of USC and Cal State Fullerton professors and students building a decentralized reinforcement learning framework with Shared Policy Information (SPI), letting agents cooperate without direct communication. Improved multi-agent task coordination by 25% in learning efficiency and 20% in training time versus MARL baselines.',
  },
  {
    org: 'Lawrence Berkeley National Laboratory',
    role: 'Research Assistant · May 2022 – Sep 2022',
    description:
      'Designed a reinforcement learning circuit in Python using stochastic computing with CNN accelerators, engineering core components including Bipolar and Unipolar Accumulators for optimized performance.',
  },
]

export default function Research() {
  return (
    <PageSection label="research">
      <h2>Research</h2>
      <ul className="research-list">
        {RESEARCH.map((item) => (
          <li key={item.org}>
            <span className="research-org">{item.org}</span>
            <span className="research-role">{item.role}</span>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <p className="research-note">
        Primary author on work published on arXiv and accepted to ASME (2025) and{' '}
        <a
          href="https://asmedigitalcollection.asme.org/computingengineering/article/26/4/041002/1231599/Efficient-Training-in-Multiagent-Reinforcement"
          target="_blank"
          rel="noreferrer"
        >
          JCISE (2026)
        </a>{' '}
        journals, covering efficient training in multi-agent reinforcement
        learning.
      </p>
    </PageSection>
  )
}