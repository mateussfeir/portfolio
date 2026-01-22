import "./App.css";

const Button = ({ href, children, variant = "default" }) => (
  <a
    className={`button ${variant}`}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

const Pill = ({ children }) => <span className="pill">{children}</span>;

const Section = ({ title, children }) => (
  <section className="section">
    <h3 className="section-title">{title}</h3>
    {children}
  </section>
);

const ProjectCard = ({ title, description, href, linkText }) => (
  <article className="card project-card">
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
    <a className="link" href={href} target="_blank" rel="noreferrer">
      {linkText}
    </a>
  </article>
);

function App() {
  return (
    <div className="page">
      <header className="hero card">
        <div className="hero-media">
          <img
            src="/mateus.jpeg"
            alt="Mateus Sfeir"
            className="avatar"
          />
        </div>
        <div className="hero-content">
          <p className="eyebrow">Hello, I am</p>
          <h1>Mateus Sfeir</h1>
          <h2>Junior Software Engineer</h2>
          <p className="subtitle">
            I build data-driven web products with Python, Django, and modern
            JavaScript — focused on clean backend systems and real-world
            problems.
          </p>
          <div className="button-row">
            <Button href="https://github.com/mateussfeir">GitHub</Button>
            <Button href="https://www.linkedin.com/in/REPLACE_ME/" variant="ghost">
              LinkedIn
            </Button>
            <Button href="https://www.bitbalance.ca" variant="highlight">
              BitBalance
            </Button>
          </div>
        </div>
      </header>

      <Section title="Featured Project">
        <ProjectCard
          title="BitBalance"
          description="Portfolio and net worth tracker built with Django and Python. Uses external APIs with caching and analytics for clear, real-time insights."
          href="https://www.bitbalance.ca"
          linkText="View Live Demo →"
        />
      </Section>

      <Section title="Tech Stack">
        <div className="pill-row">
          <Pill>Python</Pill>
          <Pill>Django</Pill>
          <Pill>SQL</Pill>
          <Pill>REST APIs</Pill>
          <Pill>React</Pill>
          <Pill>Git/GitHub</Pill>
          <Pill>PostgreSQL</Pill>
        </div>
      </Section>

      <Section title="About Me">
        <p className="about">
          I am a Toronto-based software engineer focused on backend systems and
          fintech products. I enjoy turning complex data into tools people can
          trust and use every day.
        </p>
      </Section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Mateus Sfeir</p>
      </footer>
    </div>
  );
}

export default App;
