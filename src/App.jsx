import React from 'react'
import LogoIITminds from './Logo'

function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand-with-logo">
          <LogoIITminds size={28} />
          <div className="brand">IITminds</div>
        </div>
        <nav className="nav">
          <a href="#what-we-are">What We Are</a>
          <a href="#how">How It Works</a>
          <a href="#why">Why Choose Us</a>
          <a href="#contact" className="cta">Get Your Engineer</a>
        </nav>
      </div>
    </header>
  )
}

function Hero(){
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Top-Tier Software Engineers, Ready When You Need Them</h1>
          <p className="lead">IITian-Led Talent. Global Delivery. Zero Contract Complexity.</p>
          <p>We provide highly skilled software engineers and complete engineering teams that integrate directly into your organization — for exactly the duration you require.</p>
          <div className="hero-ctas">
            <a className="btn primary" href="#contact">Get Your Engineer</a>
            <a className="btn ghost" href="#what-we-are">Learn More</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-box">
            <strong>Flexible Engagements</strong>
            <ul>
              <li>Weeks, months, or long-term</li>
              <li>Individuals or complete teams</li>
              <li>Zero hourly tracking or fixed scopes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


function WhatWeAre(){
  return (
    <section id="what-we-are" className="what-we-are">
      <div className="container">
        <div className="what-we-are-copy">
          <h2>What We Are</h2>
          <p>A specialist engineering talent firm delivering elite software engineers and system experts to companies that demand the highest standards.</p>
          <p>Every engagement is guided by an IIT-trained project lead, ensuring talent alignment, technical quality, and seamless integration with your team.</p>
          <ul className="value-list">
            <li>IIT expertise backing every placement</li>
            <li>Global network of vetted engineers</li>
            <li>Flexible, commitment-free engagements</li>
            <li>Direct integration with your existing teams</li>
          </ul>
        </div>
        <div className="what-we-are-visual">
          <div className="icon-placeholder">🎯</div>
          <p style={{marginTop:'12px', color:'#666'}}>IITian-Led Engineering Excellence</p>
        </div>
      </div>
    </section>
  )
}

function How(){
  return (
    <section id="how" className="how container">
      <h2>How You Scale With Us</h2>
      <div className="grid three">
        <div className="card">
          <div className="icon-placeholder">⚡</div>
          <h3>On-Demand Engineers</h3>
          <p>Add a single engineer or an entire team. Scale up or down smoothly, without traditional consulting contracts.</p>
        </div>
        <div className="card">
          <div className="icon-placeholder">📅</div>
          <h3>Flexible Duration</h3>
          <p>Engage engineers for weeks, months, long-term, or open-ended roles — on terms that fit your roadmap.</p>
        </div>
        <div className="card">
          <div className="icon-placeholder">🏆</div>
          <h3>Tier-1 Engineering Talent</h3>
          <p>Vetted engineers across backend, frontend, AI/ML, cloud, DevOps, mobile, distributed systems, and more.</p>
        </div>
      </div>
    </section>
  )
}

function Why(){
  return (
    <section id="why" className="why container">
      <h2>Why Companies Choose Us</h2>
      <ul className="why-list">
        <li>Elite global engineering talent</li>
        <li>IIT-led oversight on every engagement</li>
        <li>Flexible, no-commitment durations</li>
        <li>Easy integration with your existing teams</li>
        <li>Zero hourly billing or project scoping</li>
        <li>Engineers focused entirely on YOUR roadmap</li>
      </ul>
    </section>
  )
}

function Promise(){
  return (
    <section className="promise">
      <div className="container">
        <h2>Our Promise</h2>
        <p>We give you engineering capacity without friction: trusted talent, stable engagement, and seamless collaboration — exactly when you need it. We become your long-term partner for scaling engineering without traditional outsourcing headaches.</p>
      </div>
    </section>
  )
}

function Contact(){
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get Your Engineer</h2>
        <p>Speak directly with an IITian Project Lead and secure the right talent for your team.</p>
        <a className="btn primary large" href="https://mail.google.com/mail/?view=cm&to=prakhargar@iitbhilai.ac.in&su=IITminds%20—%20Request%20Engineer"
>Contact an IITian Project Lead</a>
        <div className="contact-info">
          <p>Email: <a href="mailto:prakhargar@iitbhilai.ac.in">prakhargar@iitbhilai.ac.in</a></p>
          <p>Office: <strong>IIT BHILAI, Chhattisgarh, India</strong></p>
        </div>
      </div>
    </section>
  )
}

function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {year} IITminds — Elite Engineering Talent</div>
        <div>
          <a href="mailto:prakhargar@iitbhilai.ac.in" style={{color:'rgba(255,255,255,0.8)', textDecoration:'none', marginRight:'16px'}}>Email</a>
          <a href="#privacy" style={{color:'rgba(255,255,255,0.8)', textDecoration:'none', marginRight:'16px'}}>Privacy</a>
          <a href="#terms" style={{color:'rgba(255,255,255,0.8)', textDecoration:'none'}}>Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default function App(){
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <WhatWeAre />
        <How />
        <Why />
        <Promise />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
