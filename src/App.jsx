import "./App.css";

const Button = ({ href, children, variant = "secondary" }) => (
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

const Section = ({ title, children, className = "" }) => (
  <section className={`section ${className}`}>
    <h3 className="section-title">{title}</h3>
    {children}
  </section>
);

const ProjectCard = ({ title, description, href, linkText }) => (
  <a
    className="card project-card featured-project"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <div className="project-copy">
      <h4>{title}</h4>
      <p>{description}</p>
      <span className="link">{linkText}</span>
    </div>
    <img
      src={`${import.meta.env.BASE_URL}bitbalance-preview.jpeg`}
      alt="BitBalance dashboard preview"
      className="project-preview-image"
    />
  </a>
);

function App() {
  return (
    <div className="page">
      <div className="page-container">
        <header className="hero card fade-up" style={{ "--delay": "0ms" }}>
          <div className="hero-media">
            <img
              src={`${import.meta.env.BASE_URL}mateus.jpeg`}
              alt="Mateus Sfeir"
              className="avatar"
            />
          </div>
          <div className="hero-content">
            <p className="eyebrow">Hello, I am</p>
            <h1>
              <span className="name-accent">Mateus Sfeir</span>
            </h1>
            <h2>Junior Software Engineer</h2>
            <p className="subtitle">
              I build data-driven web products with Python, Django, and modern
              JavaScript — focused on clean backend systems and real-world
              problems.
            </p>
            <div className="button-row">
              <Button href="https://github.com/mateussfeir">GitHub</Button>
              <Button href="https://www.linkedin.com/in/REPLACE_ME/">
                LinkedIn
              </Button>
              <Button href="https://www.bitbalance.ca" variant="primary">
                BitBalance <span className="button-arrow">→</span>
              </Button>
            </div>
          </div>
        </header>

        <Section title="Featured Project" className="fade-up" >
          <ProjectCard
            title="BitBalance"
            description="Portfolio and net worth tracker built with Django and Python. Uses external APIs with caching and analytics for clear, real-time insights."
            href="https://www.bitbalance.ca"
            linkText="View Live Demo →"
          />
        </Section>

        <Section title="Tech Stack" className="fade-up" >
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
    </div>
  );
}

export default App;
