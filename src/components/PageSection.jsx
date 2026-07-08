import { useEffect, useRef, useState } from 'react'

export function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

export function Waypoint({ label }) {
  return (
    <div className="waypoint">
      <span className="waypoint-dot" aria-hidden="true" />
      <span className="waypoint-label">waypoint.{label.toLowerCase()}</span>
    </div>
  )
}

export default function PageSection({ label, children, className = '' }) {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} className={`section ${visible ? 'is-visible' : ''} ${className}`}>
      <div className="section-inner">
        {children}
      </div>
    </section>
  )
}