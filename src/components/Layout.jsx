import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/research', label: 'Research' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    setNavOpen(false)
  }, [location.pathname])

  return (
    <div className="page">
      <div className="trail-line" aria-hidden="true" />

      <header className="topbar">
        <NavLink to="/" className="wordmark">
          David Ge
        </NavLink>
        <nav className={`nav ${navOpen ? 'nav-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? 'nav-active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <span>&copy; {new Date().getFullYear()} David Ge</span>
        <span className="footer-coords"></span>
      </footer>
    </div>
  )
}
