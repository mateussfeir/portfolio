import "./App.css";

function App() {
  return (
    <div className="container">
      {/* HERO */}
      <header className="hero">
        <h1>Mateus Sfeir</h1>
        <h2>Junior Software Engineer</h2>
        <p className="subtitle">
          Python • Django • SQL • REST APIs • Data Pipelines
        </p>

        <div className="buttons">
          <a
            href="https://github.com/mateussfeir"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.bitbalance.ca"
            target="_blank"
            rel="noreferrer"
          >
            Live Project
          </a>
        </div>
      </header>

      {/* PROJECT */}
      <section>
        <h3>Featured Project</h3>
        <div className="card">
          <h4>BitBalance</h4>
          <p>
            A personal finance and portfolio tracking web application built with
            Django and Python. Aggregates stock and crypto prices using external
            APIs, caching, and analytics to provide net-worth insights.
          </p>
          <a
            href="https://www.bitbalance.ca"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            View Live Demo →
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section>
        <h3>Tech Stack</h3>
        <ul className="skills">
          <li>Python</li>
          <li>Django</li>
          <li>PostgreSQL</li>
          <li>REST APIs</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      {/* ABOUT */}
      <section>
        <h3>About Me</h3>
        <p>
          International student based in Toronto, graduating in April 2026.
          Strong interest in backend development, data-driven systems, and
          fintech products.
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© {new Date().getFullYear()} Mateus Sfeir</p>
      </footer>
    </div>
  );
}

export default App;
