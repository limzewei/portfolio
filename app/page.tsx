import profile from "../content/profile.json";
import projects from "../content/projects.json";
import caseStudies from "../content/case-studies.json";
import notes from "../content/notes.json";

function TagList({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="hero shell">
        <p className="eyebrow">Malaysia · Software Engineer</p>
        <h1>{profile.name}</h1>
        <h2>{profile.headline}</h2>
        <p className="lede">{profile.intro}</p>
        <p className="muted">{profile.current}</p>

        <div className="actions">
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.links.email}>Email</a>
        </div>
      </section>

      <section className="shell section">
        <div className="section-heading">
          <p className="eyebrow">Engineering focus</p>
          <h2>What I work on</h2>
        </div>
        <div className="focus-grid">
          {profile.focus.map((item) => (
            <article className="focus-card" key={item}>
              <span>→</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section">
        <div className="section-heading">
          <p className="eyebrow">Selected projects</p>
          <h2>What I'm building</h2>
          <p className="muted">
            The core implementations are private. Public showcase repositories document architecture,
            engineering decisions, status, and safe-to-share examples.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="card" key={project.slug}>
              <div className="card-topline">
                <span>{project.status}</span>
                <span>{project.visibility}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <TagList items={project.stack} />
              <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                View public showcase →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section">
        <div className="section-heading">
          <p className="eyebrow">Production background</p>
          <h2>Selected engineering work</h2>
        </div>
        <div className="case-grid">
          {caseStudies.map((study) => (
            <article className="case-card" key={study.title}>
              <h3>{study.title}</h3>
              <p>{study.summary}</p>
              <TagList items={study.tags} />
            </article>
          ))}
        </div>
      </section>

      <section className="shell section">
        <div className="section-heading">
          <p className="eyebrow">How I work</p>
          <h2>Investigation-first engineering</h2>
        </div>
        <div className="process">
          {[
            "Understand the existing system",
            "Identify constraints and risks",
            "Build a plan",
            "Implement incrementally",
            "Test and review",
            "Deploy and verify"
          ].map((step, index) => (
            <div className="process-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
        <p className="muted process-note">
          I use AI coding agents as engineering tools while keeping architecture decisions,
          verification, testing, and delivery responsibility human-reviewed.
        </p>
      </section>

      {notes.length > 0 && (
        <section className="shell section">
          <div className="section-heading">
            <p className="eyebrow">Engineering notes</p>
            <h2>Writing & case studies</h2>
          </div>
          <div className="case-grid">
            {notes.map((note: { title: string; summary: string; href: string }) => (
              <article className="case-card" key={note.title}>
                <h3>{note.title}</h3>
                <p>{note.summary}</p>
                <a className="text-link" href={note.href}>Read →</a>
              </article>
            ))}
          </div>
        </section>
      )}

      <footer className="shell footer">
        <div>
          <p className="eyebrow">Let's connect</p>
          <h2>Software engineering, integrations, infrastructure & AI.</h2>
        </div>
        <div className="footer-links">
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.links.email}>Email</a>
        </div>
      </footer>
    </main>
  );
}
