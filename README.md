# Lim Ze Wei — Engineering Portfolio

## Live site

https://limzewei.vercel.app/

Personal engineering portfolio for full-time and selected contract opportunities.

## Stack

- Next.js 16.3.3
- React 19
- TypeScript
- Content-driven JSON
- Vercel-ready

## Updating the site

Most future updates do **not** require component changes.

Edit these files directly in GitHub:

```text
content/
  profile.json        # headline, intro, focus areas, links
  projects.json       # selected projects
  case-studies.json   # production / engineering case studies
  notes.json          # articles or engineering notes
```

Commit the edit to `main`. With Vercel Git integration enabled, the site redeploys automatically.

This keeps the portfolio simple and version-controlled without needing a database or admin backend.

### When would a CMS/database be useful?

Only add one later if you want features such as:

- non-technical browser editing
- drafts / scheduled publishing
- multiple editors
- comments or user accounts
- frequently changing dynamic data

For long-form technical writing, the next planned upgrade is Markdown/MDX while keeping the same Git-based workflow.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Deploy

Import this GitHub repository into Vercel and use the default Next.js settings. Pushes to `main` become production deployments; feature branches can use preview deployments.

## Public project showcases

- [AgentCTL Showcase](https://github.com/limzewei/agentctl-showcase)
- [AI Business OS Showcase](https://github.com/limzewei/aibusinessos-showcase)

## Privacy

Employer-related material is intentionally kept high-level. Private project source remains private; public showcases focus on architecture, engineering decisions, sanitized examples, and status.
