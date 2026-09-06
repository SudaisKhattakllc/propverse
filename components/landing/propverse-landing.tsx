'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Bot,
  CircleDot,
  Cuboid,
  Menu,
  Play,
  Search,
  Sparkles,
  X,
} from 'lucide-react'

const navItems = ['Features', 'How It Works', 'Properties', 'Contact']

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="PropVerse home">
      <span className="logo-mark"><span /></span>
      <span className="font-heading text-lg font-bold tracking-tight text-gradient">PropVerse</span>
    </a>
  )
}

function TownPreview({ large = false }: { large?: boolean }) {
  return (
    <div className={large ? 'town-preview town-preview-large' : 'town-preview'}>
      <div className="town-sky" />
      <div className="town-grid" />
      <div className="town-road road-a" /><div className="town-road road-b" /><div className="town-road road-c" />
      <div className="town-block block-a"><span /><span /><span /></div>
      <div className="town-block block-b"><span /><span /></div>
      <div className="town-block block-c"><span /><span /><span /><span /></div>
      <div className="town-block block-d"><span /><span /></div>
      <div className="town-pin pin-a"><CircleDot size={12} /></div>
      <div className="town-pin pin-b"><CircleDot size={12} /></div>
      <div className="town-pin pin-c"><CircleDot size={12} /></div>
      <div className="town-label">3D TOWN PREVIEW</div>
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#020408]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#top" className="nav-link active">Home</a>
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="nav-link">{item}</a>)}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <button className="text-sm text-muted-foreground transition-colors hover:text-foreground">Sign In</button>
          <a href="#experience" className="button-gradient px-5 py-2.5 text-sm">View Town <ArrowRight size={15} /></a>
        </div>
        <button className="text-foreground md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="border-t border-white/[0.06] bg-[#060D16]/95 px-6 py-5 md:hidden"><div className="flex flex-col gap-5">{['Home', ...navItems].map((item) => <a key={item} href={item === 'Home' ? '#top' : `#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-cyan">{item}</a>)}</div></nav>}
    </header>
  )
}

function Hero() {
  return <section id="top" className="relative overflow-hidden pt-36 lg:pt-44"><div className="orb orb-cyan" /><div className="orb orb-purple" /><div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:pb-32">
    <div className="relative z-10"><div className="eyebrow mb-7"><i /> Next-Gen Real Estate Platform</div><h1 className="font-heading text-5xl font-bold leading-[1.06] tracking-[-0.055em] text-pretty sm:text-6xl lg:text-[4.5rem]">Explore Properties<br />in Stunning<br /><span className="text-gradient">3D Universe</span></h1><p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">Walk through entire housing societies, inspect every plot and home in immersive 3D. Ask our AI agent anything about any property.</p><div className="mt-9 flex flex-wrap gap-4"><a href="#experience" className="button-gradient px-7 py-4 text-sm font-semibold sm:text-base">Enter PropVerse <ArrowRight size={17} /></a><a href="#experience" className="button-ghost px-7 py-4 text-sm font-semibold sm:text-base"><Play size={15} fill="currentColor" /> Watch Demo</a></div><div className="mt-9 flex flex-wrap items-center gap-4 text-xs text-muted-foreground sm:gap-6 sm:text-sm"><span><strong>2,400+</strong> Properties</span><b>•</b><span><strong>12</strong> Societies</span><b>•</b><span><strong>AI</strong> Powered</span></div></div>
    <div className="relative mx-auto w-full max-w-[580px] animate-float"><div className="preview-glow" /><div className="preview-shell"><div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4"><div className="flex items-center gap-2"><span className="window-dot bg-[#ff5f57]" /><span className="window-dot bg-[#febc2e]" /><span className="window-dot bg-[#28c840]" /></div><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">PropVerse / 3D View</span><span className="rounded-full border border-cyan/30 px-2 py-1 font-mono text-[9px] text-cyan">LIVE</span></div><TownPreview /><div className="grid grid-cols-2 gap-3 p-4"><div className="data-chip"><span>Plot B-145</span><small>10 Marla · Available</small></div><div className="data-chip"><span>PKR 85 Lakh</span><small>Park Facing</small></div></div></div></div>
  </div></section>
}

const features = [{ icon: Cuboid, title: 'Walk Every Street', label: 'Immersive 3D Tours', text: 'Explore entire housing societies in photorealistic 3D. Walk through neighborhoods, inspect plots, enter homes.' }, { icon: Bot, title: 'Ask Anything, Instantly', label: 'AI Property Agent', text: 'Our RAG-powered AI knows every plot, price, and detail. Ask in plain language, get precise answers.' }, { icon: BarChart3, title: 'Data-Driven Decisions', label: 'Live Analytics', text: 'Price trends, appreciation rates, availability heatmaps. All the data you need, visualized beautifully.' }]

function Stats() { return <section className="border-y border-white/[0.07] bg-white/[0.015]"><div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-9 lg:grid-cols-4 lg:px-10">{[['2,400+', 'Properties Listed'], ['12', 'Societies Mapped'], ['98%', 'Client Satisfaction'], ['3D AI', 'Powered Platform']].map(([num, label]) => <div key={label} className="stat"><strong>{num}</strong><span>{label}</span></div>)}</div></section> }

function Features() { return <section id="features" className="section-wrap"><div className="mx-auto max-w-7xl px-6 lg:px-10"><SectionTitle eyebrow="A better way to search" title={<>Everything You Need<br /><span className="text-gradient">to Find Your Dream Home</span></>} /><div className="mt-14 grid gap-5 lg:grid-cols-3">{features.map(({ icon: Icon, title, label, text }, i) => <article key={title} className="feature-card"><div className={`feature-icon ${i === 1 ? 'purple' : ''}`}><Icon size={23} /></div><p className="mt-7 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">{label}</p><h3 className="mt-3 font-heading text-xl font-semibold">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p><a href="#experience" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-cyan">Explore feature <ArrowRight size={14} /></a></article>)}</div></div></section> }

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) { return <div className="text-center"><p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">{eyebrow}</p><h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.04em] text-balance sm:text-4xl lg:text-5xl">{title}</h2></div> }

function Journey() { const steps = [{ n: '01', icon: Search, title: 'Choose Your Society', text: 'Select from our mapped housing societies across Pakistan' }, { n: '02', icon: Cuboid, title: 'Explore in 3D', text: 'Walk through streets, inspect plots, enter model homes' }, { n: '03', icon: Sparkles, title: 'Ask Our AI', text: 'Get instant answers about prices, availability, and investment potential' }]; return <section id="how-it-works" className="section-wrap border-t border-white/[0.06] bg-[#060D16]/35"><div className="mx-auto max-w-7xl px-6 lg:px-10"><SectionTitle eyebrow="Simple by design" title="Your Journey in 3 Steps" /><div className="relative mt-16 grid gap-12 lg:grid-cols-3 lg:gap-10"><div className="journey-line" />{steps.map(({ n, icon: Icon, title, text }) => <div key={n} className="relative text-center"><div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan/20 bg-cyan/[0.06] text-cyan"><Icon size={23} /><span className="step-number">{n}</span></div><h3 className="mt-7 font-heading text-xl font-semibold">{title}</h3><p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></div></section> }

function Experience() { return <section id="experience" className="section-wrap overflow-hidden"><div className="mx-auto max-w-7xl px-6 lg:px-10"><SectionTitle eyebrow="A glimpse into the future" title={<>See PropVerse <span className="text-gradient">in Action</span></>} /><div className="experience-frame mt-14"><TownPreview large /><div className="experience-overlay" /><div className="absolute inset-0 flex items-center justify-center"><a href="#top" className="button-gradient px-7 py-4 text-sm font-semibold">Launch 3D Experience <ArrowRight size={16} /></a></div></div></div></section> }

function Footer() { return <footer className="border-t border-white/[0.07] bg-[#020408] py-14"><div className="mx-auto grid max-w-7xl gap-12 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10"><div><Logo /><p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">The future of real estate exploration.</p><div className="mt-6 flex gap-3"><a className="social" href="#top" aria-label="Twitter"><CircleDot size={15} /></a><a className="social" href="#top" aria-label="LinkedIn"><CircleDot size={15} /></a><a className="social" href="#top" aria-label="Instagram"><CircleDot size={15} /></a></div></div>{[['Platform', ['Features', 'How It Works', 'Properties', 'Societies', 'Pricing']], ['Company', ['About', 'Blog', 'Careers', 'Press', 'Contact']], ['Legal', ['Privacy Policy', 'Terms of Service', 'Cookie Policy']]].map(([heading, links]) => <div key={heading as string}><h3 className="font-heading text-sm font-semibold">{heading as string}</h3><div className="mt-5 flex flex-col gap-3">{(links as string[]).map((link) => <a key={link} href="#top" className="text-sm text-muted-foreground transition-colors hover:text-cyan">{link}</a>)}</div></div>)}</div><div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/[0.07] px-6 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10"><span>© 2026 PropVerse. All rights reserved.</span><span>Made with intention in Pakistan</span></div></footer> }

export default function PropVerseLanding() { return <main className="min-h-screen overflow-hidden"><Navbar /><Hero /><Stats /><Features /><Journey /><Experience /><section className="relative px-6 py-28 text-center"><div className="cta-glow" /><p className="relative font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">Your next address is waiting</p><h2 className="relative mx-auto mt-5 max-w-3xl font-heading text-4xl font-bold tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl">Ready to Experience<br /><span className="text-gradient">Real Estate in 3D?</span></h2><p className="relative mx-auto mt-6 text-muted-foreground">Join thousands exploring properties the future way.</p><a href="#top" className="button-gradient relative mt-9 px-9 py-4 text-base font-bold">Enter PropVerse <ArrowRight size={17} /></a></section><Footer /></main> }
