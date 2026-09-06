'use client'

import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowRight, Menu, MoveUpRight, X } from 'lucide-react'

const navItems = [
  ['Towns', '#towns'],
  ['Intelligence', '#intelligence'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

function Logo() {
  return <a href="#top" className="wordmark" aria-label="PropVerse home">PropVerse</a>
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="nav-inner">
      <Logo />
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </nav>
      <a className="nav-cta" href="#towns">Visit the Town <MoveUpRight size={14} /></a>
      <button className="menu-button" type="button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">
      {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="mobile-cta" href="#towns" onClick={() => setOpen(false)}>Visit the Town <MoveUpRight size={16} /></a>
    </nav>}
  </header>
}

function TownVisual({ large = false }: { large?: boolean }) {
  return <div className={`town-visual ${large ? 'town-visual-large' : ''}`} aria-label="Abstract 3D town model preview" role="img">
    <div className="town-horizon" />
    <div className="town-sun" />
    <div className="terrain terrain-one" /><div className="terrain terrain-two" />
    <div className="town-road town-road-one" /><div className="town-road town-road-two" /><div className="town-road town-road-three" />
    {Array.from({ length: 13 }).map((_, i) => <span className={`town-building building-${i + 1}`} key={i} />)}
    <div className="town-water" />
    <div className="visual-caption"><span>PROPVERSE / TOWN 01</span><span>31.5°N 74.3°E</span></div>
  </div>
}

function Hero() {
  return <section id="top" className="hero-section">
    <div className="hero-copy">
      <p className="eyebrow">3D REAL ESTATE INTELLIGENCE</p>
      <h1>See the town<br /><em>before it exists.</em></h1>
    </div>
    <div className="hero-visual-wrap"><TownVisual /></div>
    <div className="hero-under">
      <p>Explore every plot, plan, and possibility in one living model.</p>
      <div className="hero-actions"><a className="primary-action" href="#towns">Explore the Town <ArrowRight size={16} /></a><a className="text-action" href="#intelligence">Watch how it works <ArrowDownRight size={16} /></a></div>
    </div>
  </section>
}

function Marquee() {
  const text = 'RAYCASTER  ✦  CESIUM  ✦  BLENDER  ✦  THREE.JS  ✦  REAL-TIME DATA  ✦  '
  return <div className="marquee" aria-label="Technology stack"><div>{text}{text}</div></div>
}

const features = [
  ['01', 'Explore', 'Fly through the town in real-time 3D. Move from the street to the skyline without losing the details that matter.'],
  ['02', 'Intelligence', 'Live data is layered onto every plot, so context is always one glance away.'],
  ['03', 'Plan', 'Compare societies, districts, and possibilities before you make your next move.'],
]

function Features() {
  return <section id="intelligence" className="features-section content-section">
    <div className="section-intro"><p className="eyebrow">A living point of view</p><h2>Property is more<br /><em>than a pin on a map.</em></h2></div>
    <div className="feature-grid">{features.map(([number, title, text]) => <article className="feature-item" key={number}><span className="feature-number">{number}</span><h3>{title}</h3><p>{text}</p><a href="#towns" aria-label={`Explore ${title}`}><ArrowRight size={17} /></a></article>)}</div>
  </section>
}

function QuoteBreak() {
  return <section id="about" className="quote-break"><TownVisual large /><div className="quote-overlay"><p>“The clearest view of the future<br />is a place you can walk through.”</p><span>— PropVerse, 2026</span></div></section>
}

function Stats() {
  return <section className="stats-section"><div><strong>500+</strong><span>Plots mapped</span></div><div><strong>12</strong><span>Districts modeled</span></div><div><strong>24/7</strong><span>Real-time pricing</span></div><div><strong>01</strong><span>Living model</span></div></section>
}

function Footer() {
  return <footer id="contact" className="site-footer"><div className="footer-top"><div><p className="eyebrow">The next address</p><h2>Make room<br /><em>for possibility.</em></h2></div><div className="newsletter"><p>Get the occasional view from here.</p><div className="newsletter-line"><input aria-label="Email address" type="email" placeholder="Your email address" /><button type="button" aria-label="Subscribe"><ArrowRight size={18} /></button></div></div></div><div className="footer-bottom"><Logo /><div className="footer-links"><div><span>Platform</span><a href="#towns">Towns</a><a href="#intelligence">Intelligence</a></div><div><span>Company</span><a href="#about">About</a><a href="#contact">Contact</a></div><div><span>Social</span><a href="#contact">Instagram</a><a href="#contact">LinkedIn</a></div></div></div><div className="footer-meta"><span>© 2026 PropVerse</span><span>31.5°N 74.3°E</span><span>Built for the future of place</span></div></footer>
}

export default function PropVerseLanding() {
  return <main><Navbar /><Hero /><Marquee /><Features /><QuoteBreak /><Stats /><section id="towns" className="towns-section content-section"><p className="eyebrow">A town in your hands</p><h2>Walk it. Read it.<br /><em>Know it.</em></h2><a className="primary-action" href="#top">Launch the 3D experience <MoveUpRight size={16} /></a></section><Footer /></main>
}
