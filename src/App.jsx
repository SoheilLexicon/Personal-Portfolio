import { useState } from 'react';
import { education, profile, projects, skills } from './portfolioData';
import './App.css';

const navigation = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Education', '#education'],
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Soheil Mohajer – back to top">
          <span className="brand-symbol" aria-hidden="true">S<span>.</span></span>
          <span className="brand-wordmark">SOHEIL <span>MOHAJER</span><small>DEVELOPER PORTFOLIO</small></span>
        </a>
        <button type="button" className="menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-controls="primary-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /> <span /> <span />
        </button>
        <nav id="primary-navigation" className={`navigation ${menuOpen ? 'navigation-open' : ''}`} aria-label="Main navigation">
          {navigation.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a href="#contact" onClick={closeMenu} className="nav-contact">Let's connect <Arrow diagonal /></a>
        </nav>
      </div>
    </header>
  );
}

function HeroPreview() {
  return (
    <div className="hero-visual" aria-label="Illustration of three frontend projects">
      <div className="visual-glow" aria-hidden="true" />
      <div className="mock-browser">
        <div className="mock-topbar"><span className="mock-dots"><i /><i /><i /></span><span>my-work / overview</span><span className="mock-circle" /></div>
        <div className="mock-body">
          <span className="mock-eyebrow">PROJECT SHOWCASE</span>
          <strong>Thoughtful design.<br /><em>Practical solutions.</em></strong>
          <div className="mock-lines"><span /><span /><span /></div>
          <div className="mock-panels"><span className="panel-blue"/><span className="panel-green"/><span className="panel-gold"/></div>
        </div>
      </div>
      <div className="floating-label"><span className="status-dot"/> React · Vite · CSS</div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="section-kicker kicker-light"><span className="kicker-rule" /> BASED IN LUND, SWEDEN</p>
          <h1 id="hero-title">Hi, I'm Soheil.<br /><em>I build for the web.</em></h1>
          <p className="hero-lead">IT support trainee and aspiring full stack developer with a background in customer service, problem-solving and international management.</p>
          <p className="hero-sublead">This portfolio brings together what I am learning, creating and improving — one project at a time.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">Explore projects <Arrow /></a>
            <a className="btn btn-outline" href="#about">About me <Arrow diagonal /></a>
          </div>
          <div className="hero-note"><span className="note-line" /> Learning through real projects, documentation and testing.</div>
        </div>
        <HeroPreview />
      </div>
      <div className="hero-bottom shell"><span>SCROLL TO EXPLORE</span><span>HTML · CSS · JAVASCRIPT · REACT</span></div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="shell about-grid">
        <div>
          <p className="section-kicker">01 / ABOUT ME</p>
          <h2 id="about-title" className="section-title">A people-first approach<br /><em>to technology.</em></h2>
        </div>
        <div className="about-copy">
          <p className="about-intro">I enjoy making digital experiences clear, helpful and easy to use.</p>
          <p>I am currently studying Full Stack C# .NET development at Lexicon, building on my IT support and networking training. Previous roles in reception, banking and customer-facing environments strengthened my communication and problem-solving skills.</p>
          <p>My goal is to combine technical skills with an understanding of the people who use technology.</p>
          <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">Explore my GitHub <Arrow diagonal /></a>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-title">
      <div className="shell">
        <p className="section-kicker">02 / SKILLS & TOOLS</p>
        <div className="section-heading-row"><h2 id="skills-title" className="section-title">The tools behind<br /><em>the projects.</em></h2><p>From semantic HTML to reusable React components — a growing set of practical skills.</p></div>
        <div className="skills-grid">
          {skills.map((group, index) => <article key={group.label} className="skill-card">
            <span className="card-counter">0{index + 1}</span>
            <h3>{group.label}</h3>
            <ul>{group.values.map((value) => <li key={value}>{value}</li>)}</ul>
          </article>)}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ project }) {
  return <div className={`project-visual visual-${project.theme}`} aria-hidden="true">
    <div className="visual-sheet">
      <span className="sheet-dots"><i/><i/><i/></span>
      <div className="sheet-top" />
      <div className="sheet-layout"><span/><span/><span/></div>
      <div className="sheet-bottom"><span/><span/></div>
    </div>
    <span className="visual-label">{project.id === 'cv' ? 'CV / CAREER' : project.id === 'support' ? 'SKÅNE / IT' : 'CAMPUS / EATS'}</span>
  </div>;
}

function Projects() {
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="shell">
        <p className="section-kicker">03 / FEATURED WORK</p>
        <div className="section-heading-row"><h2 id="projects-title" className="section-title">Selected projects.<br /><em>Built to learn.</em></h2><p>Real coursework and prototypes. Each one has helped me practise a different part of frontend development.</p></div>
        <div className="projects-grid">
          {projects.map((project) => <article className="project-card" key={project.id}>
            <ProjectVisual project={project}/>
            <div className="project-content">
              <div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="tech-tags" aria-label={`Technologies used in ${project.name}`}>
                {project.stack.map(tech => <li key={tech}>{tech}</li>)}
              </ul>
              <div className="project-actions">
                {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">Live website <Arrow diagonal /></a>}
                {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub <Arrow diagonal /></a>}
                {!project.demoUrl && !project.repoUrl && <span className="project-status">{project.status}</span>}
              </div>
            </div>
          </article>)}
        </div>
        <p className="projects-note">Some projects are local demos or group prototypes. Public links will be added only when the final versions are deployed and verified.</p>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section education-section" aria-labelledby="education-title">
      <div className="shell education-grid">
        <div>
          <p className="section-kicker">04 / EDUCATION</p>
          <h2 id="education-title" className="section-title">Always learning.<br /><em>Always improving.</em></h2>
          <p className="education-intro">My current focus is web development, supported by IT training and an academic background in management and law.</p>
          <a className="text-link" href={profile.credly} target="_blank" rel="noopener noreferrer">Verified digital badges <Arrow diagonal /></a>
        </div>
        <div className="education-list">
          {education.map((item) => <article className="education-row" key={item.name}>
            <div><h3>{item.name}</h3><p>{item.school}</p></div><span>{item.meta}</span>
          </article>)}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="shell contact-grid">
        <div><p className="section-kicker kicker-light">05 / LET'S CONNECT</p><h2 id="contact-title" className="section-title">Let's build a<br /><em>conversation.</em></h2>
          <p>Interested in my projects, professional background or an entry-level IT or web development opportunity? I'd be happy to hear from you.</p>
          <a className="btn btn-light" href={`mailto:${profile.email}`}>Send an email <Arrow diagonal /></a>
        </div>
        <div className="contact-panel"><span>FIND ME ONLINE</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a>
          <a href={profile.credly} target="_blank" rel="noopener noreferrer">Credly badges <Arrow diagonal /></a>
          <div className="contact-location">{profile.location} · {profile.email}</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="site-footer"><div className="shell footer-inner"><span>© 2026 Soheil Mohajer · Personal Portfolio</span><a href="#home">Back to top ↑</a><span>Built with React, JavaScript & CSS</span></div></footer>;
}

export default function App() {
  return <>
    <a className="skip-link" href="#about">Skip to content</a>
    <Header/>
    <main><Hero/><About/><Skills/><Projects/><Education/><Contact/></main>
    <Footer/>
  </>;
}
