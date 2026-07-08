import { useReveal } from '../components/PageSection'

const CHANNELS = [
  {
    label: 'Email',
    url: 'dg3517@columbia.edu',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=dg3517@columbia.edu',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    url: 'github.com/lwg0320',
    href: 'https://github.com/lwg0320',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    url: 'linkedin.com/in/david-ge-047924173',
    href: 'https://linkedin.com/in/david-ge-047924173',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7.5 10v6.5M7.5 7.5v.01M12 16.5V12a2 2 0 0 1 4 0v4.5M12 12v4.5" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [ref, visible] = useReveal()

  return (
    <section ref={ref} className={`section ${visible ? 'is-visible' : ''}`}>
      <div className="section-inner section-inner-contact">
        <div className="contact-header">
          <h2>Contact</h2>
          <p className="contact-line">
            I&rsquo;m always interested in new opportunities and collaborations. Reach out via
            email or connect on LinkedIn.
          </p>
        </div>
        <div className="contact-grid">
          {CHANNELS.map((channel) => (
            <a
              className="contact-card"
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              key={channel.label}
            >
              <span className="contact-icon">{channel.icon}</span>
              <span className="contact-card-text">
                <span className="contact-card-label">{channel.label}</span>
                <span className="contact-card-url">{channel.url}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}