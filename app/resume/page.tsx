import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Lim Ze Wei",
  description: "Software Engineer resume — backend systems, integrations, Linux infrastructure, networking, and AI."
};

const skills = [
  ["Backend & Web", "PHP / Laravel, Python, JavaScript, Next.js, TypeScript, REST APIs, WebSocket, HTML/CSS"],
  ["Data & AI", "PostgreSQL, MariaDB, Redis, Llama, vLLM, Ollama, local GPU inference, hybrid rule + LLM architecture"],
  ["Infrastructure", "Linux (Rocky / Oracle), Docker, Bash, systemd, Apache / Nginx, SSH, GitHub Actions"],
  ["Networking", "DHCP, NAT, iptables/nftables, tc/HTB, Open vSwitch, VLAN, policy routing, SNMP, DNS"],
  ["Integrations", "Meta Messenger, LINE, WeChat, Oracle OHIP, Shiji PMS, PayPal"],
  ["Engineering", "Git, API testing, PHPUnit, system design, debugging, code review, implementation planning, mentoring"]
];

export default function ResumePage() {
  return (
    <main className="resume-shell">
      <header className="resume-header">
        <a className="resume-back" href="/">← Portfolio</a>
        <p className="eyebrow">Resume</p>
        <h1>Lim Ze Wei</h1>
        <h2>Software Engineer | Full-Stack & Backend Systems | Integrations | Cloud & AI</h2>
        <div className="resume-contact">
          <span>Malaysia</span>
          <a href="mailto:limzewei123@gmail.com">limzewei123@gmail.com</a>
          <a href="https://github.com/limzewei" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/zewei-lim-74269a2a7/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </header>

      <section className="resume-section">
        <h3>Professional Summary</h3>
        <p>
          Software Engineer with 3+ years of experience designing, building, integrating, deploying,
          and supporting production systems across backend development, web applications, Linux
          infrastructure, networking, and AI. Experienced in end-to-end delivery including APIs,
          third-party integrations, reservation and payment workflows, cloud-controlled gateway
          systems, automation, self-hosted LLM services, and production troubleshooting.
        </p>
      </section>

      <section className="resume-section">
        <h3>Core Skills</h3>
        <div className="resume-skill-grid">
          {skills.map(([label, value]) => (
            <div key={label}>
              <strong>{label}</strong>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <div className="resume-role-head">
          <div>
            <h3>Professional Experience</h3>
            <h4>Software Engineer · Ntech Systems</h4>
            <p>Puchong, Malaysia · 2023 – Present</p>
          </div>
        </div>
        <ul>
          <li>Own design, development, deployment, and production support for hospitality software and gateway products across backend applications, integrations, networking, and Linux infrastructure.</li>
          <li>Led cloud-control modernization of an on-premise hotel internet gateway platform supporting a 100+ hotel install base with WebSocket-based centralized management.</li>
          <li>Maintain and troubleshoot captive portal, DHCP, NAT/firewall, bandwidth control, VLAN/Open vSwitch, SNMP, routing, storage, and high-availability workflows.</li>
          <li>Designed and developed a hotel reservation chatbot and administration platform supporting PMS-integrated and local-fallback inventory, pricing overrides, reservations, and payment links.</li>
          <li>Integrated Meta Messenger, LINE, WeChat, Oracle OHIP, Shiji PMS, and PayPal through server-to-server APIs and secure message-processing workflows.</li>
          <li>Introduced a hybrid LLM architecture where models handle intent, extraction, and response generation while backend services enforce booking rules, state, PMS calls, and payment logic.</li>
          <li>Deployed and benchmarked self-hosted LLM services using Llama, vLLM/Ollama, Redis, and multi-GPU Tesla V100 infrastructure.</li>
          <li>Lead day-to-day engineering work through planning, implementation guidance, code review, production troubleshooting, task coordination, and mentoring interns.</li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>Selected Projects</h3>
        <div className="resume-project">
          <h4>AI Business OS · Independent Project — In Development</h4>
          <p>
            Developing a modular AI-ready operations platform for freelancers and SMEs. The current
            engineering work includes Next.js, FastAPI, PostgreSQL/pgvector, Redis, tenant-aware
            workflows, transaction/audit infrastructure, and governed AI capabilities.
          </p>
        </div>
        <div className="resume-project">
          <h4>AgentCTL · Private Developer Tooling Project</h4>
          <p>
            Developing tooling for installing, synchronizing, and standardizing AI-agent skills,
            MCP/configuration, provider accounts, project instructions, CLI/desktop workflows, and
            CI validation across coding-agent environments.
          </p>
        </div>
      </section>

      <section className="resume-section resume-two-col">
        <div>
          <h3>Education</h3>
          <h4>Bachelor of Information Technology (Hons.) — Security Technology</h4>
          <p>Multimedia University · 2020 – 2023 · CGPA 3.46</p>
          <h4>Diploma in Information Technology</h4>
          <p>Multimedia University · 2018 – 2020 · CGPA 3.54 · Dean's List (2019)</p>
        </div>
        <div>
          <h3>Languages</h3>
          <p>Bahasa Malaysia · English · Mandarin · Cantonese · Korean</p>
        </div>
      </section>
    </main>
  );
}
