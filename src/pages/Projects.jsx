import PageSection from '../components/PageSection'

const PROJECTS = [
  {
    name: 'Questscape',
    tag: 'Founder & Developer · Dec 2025 – Present',
    description:
      'A real-world outdoor gaming platform shipped on the App Store and Google Play with 100+ users — Hide & Seek, Battleship, and road trip games played on an actual map instead of a screen. Own the full product lifecycle, frontend to Firebase/Google Cloud backend.',
    stack: ['React Native', 'Expo', 'Firebase', 'Google Cloud', 'react-native-maps'],
    link: 'https://apps.apple.com/app/questscape/id6759075132',
  },
  {
    name: 'Spotify Fingerprint',
    tag: 'Personal Project · 2026',
    description:
      'Interactive data stories exploring Spotify genre fingerprints and popularity signals with wordle-like games.',
    stack: ['Python', 'React', 'Pandas', 'Scikit-learn'],
    link: 'https://lwg0320.github.io/soundsvisualize/',
  },
  {
    name: 'Attack of the Boba Vampire',
    tag: 'Unity Game · 2023 – 2026',
    description:
      'A Unity game built from the ground up, implementing enemy AI, UI systems, tile mapping, and scene management.',
    stack: ['C#', 'Unity'],
    link: 'https://troutstick.itch.io/bobavamps-01',
  },
  {
    name: 'Music Request Discord Bot',
    tag: 'Personal Project · 2025',
    description:
      'A discord bot that fetches piano sheet music given a search worrd or artist.',
    stack: ['Python'],
    link: '#',
  },
  {
    name: 'Data Visualization Projects',
    tag: 'Personal Project · 2024 – Present',
    description:
      'Stock price prediction model using regression analysis.',
    stack: ['Python', 'React', 'Pandas', 'Scikit-learn'],
    link: '#',
  },
  {
    name: 'AI Vocoder',
    tag: 'Co-developed with UC Berkeley students · 2022',
    description:
      'Processes live or prerecorded audio and modifies it in real time.',
    stack: ['Python', 'MAX'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <PageSection label="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {PROJECTS.map((project) => {
          const hasLink = project.link && project.link !== '#'
          const CardTag = hasLink ? 'a' : 'div'
          const cardProps = hasLink
            ? { href: project.link, target: '_blank', rel: 'noreferrer' }
            : {}

          return (
            <CardTag
              className={`project-card${hasLink ? '' : ' project-card-static'}`}
              key={project.name}
              {...cardProps}
            >
              <div className="project-card-head">
                <h3>{project.name}</h3>
                <span className="project-tag">{project.tag}</span>
              </div>
              <p>{project.description}</p>
              <ul className="stack-list">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {hasLink && (
                <span className="project-link-cta">
                  Take me to the project
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 11L11 3M11 3H4.5M11 3V9.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </CardTag>
          )
        })}
      </div>
    </PageSection>
  )
}