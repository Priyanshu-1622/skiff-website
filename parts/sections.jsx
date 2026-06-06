// Page sections — production-ready with working links, mobile nav, scroll animations.

const REPO_URL        = "https://github.com/Priyanshu-1622/skiff";
const DOCS_URL        = REPO_URL + "/blob/main/README.md";
const ISSUES_URL      = REPO_URL + "/issues";
const DISCUSSIONS_URL = REPO_URL + "/discussions";
const RELEASES_URL    = REPO_URL + "/releases";
const DEPLOY_URL      = REPO_URL + "/blob/main/docs/DEPLOYMENT.md";
const SECURITY_URL    = REPO_URL + "/blob/main/SECURITY.md";
const CONTRIBUTING_URL= REPO_URL + "/blob/main/CONTRIBUTING.md";

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  React.useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => { if (!e.target.closest(".nav")) setMenuOpen(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [menuOpen]);
  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Docs",     href: DOCS_URL, external: true },
    { label: "GitHub",   href: REPO_URL, external: true },
    { label: "Free",     href: "#pricing" },
  ];
  return (
    <nav className={"nav " + (scrolled ? "scrolled" : "")}>
      <div className="container nav-inner">
        <a href="#" className="brand">
          <span className="brand-mark"><SkiffLogo /></span>
          Skiff
          <span style={{ fontSize: 11, fontFamily: "var(--mono)", color: "var(--text-4)", fontWeight: 400, marginLeft: 2 }}>v0.1</span>
        </a>
        <div className={"nav-links" + (menuOpen ? " open" : "")}>
          {navLinks.map(({ label, href, external }) => (
            <a key={label} href={href}
               {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
               onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </div>
        <div className="nav-right">
          <a className="gh-pill" href={REPO_URL} target="_blank" rel="noreferrer">
            <GitHub style={{ width: 14, height: 14 }} /> Star on GitHub
          </a>
          <a className="btn btn-primary" href="#quickstart">Get started <Arrow /></a>
          <button className="nav-hamburger" aria-label="Toggle menu" onClick={() => setMenuOpen((o) => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="nav-mobile">
          {navLinks.map(({ label, href, external }) => (
            <a key={label} href={href}
               {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
               onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a href="#quickstart" className="btn btn-primary" onClick={() => setMenuOpen(false)} style={{ marginTop: 8 }}>
            Get started <Arrow />
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <header className="hero">
    <div className="hero-grid" aria-hidden="true" />
    <div className="container">
      <span className="eyebrow fade-in"><span className="dot" />Open source · AGPL-3.0 · Self-hosted</span>
      <h1 className="fade-in" style={{ transitionDelay: "80ms" }}>
        Take control of your <span className="accent">SSH&nbsp;infrastructure.</span>
      </h1>
      <p className="lede fade-in" style={{ transitionDelay: "160ms" }}>
        Skiff is a self-hosted SSH connection manager. Store hosts, organize folders, and launch
        terminal sessions — all encrypted, all yours.
      </p>
      <div className="hero-cta fade-in" style={{ transitionDelay: "240ms" }}>
        <a className="btn btn-primary" href="#quickstart">Get started <Arrow /></a>
        <a className="btn btn-secondary" href={REPO_URL} target="_blank" rel="noreferrer">
          <GitHub style={{ width: 14, height: 14 }} /> View on GitHub
        </a>
      </div>
      <div className="hero-trust fade-in" style={{ transitionDelay: "320ms" }}>
        <span>Free forever</span><span className="sep" />
        <span>No telemetry</span><span className="sep" />
        <span>Docker-ready in 60 seconds</span>
      </div>
      <div className="hero-mock-wrap fade-in" style={{ transitionDelay: "420ms" }}>
        <HeroAppMock />
      </div>
    </div>
  </header>
);

const Trusted = () => (
  <section className="trusted" style={{ padding: "56px 0" }}>
    <div className="container fade-in">
      <div className="trusted-label">Built with the tools you trust</div>
      <div className="trusted-row">
        {[[<TechReact />,"React"],[<TechTS />,"TypeScript"],[<TechFastify />,"Fastify"],
          [<TechSqlite />,"SQLite"],[<TechXterm />,"xterm.js"],[<TechDocker />,"Docker"],[<TechNode />,"Node.js"]]
          .map(([icon, name]) => (
          <span key={name} className="logo">{icon} {name}</span>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features">
    <div className="container">
      <div className="section-head fade-in">
        <span className="eyebrow"><span className="dot" />Why Skiff</span>
        <h2>Built for developers who care about security.</h2>
        <p>No cloud sync. No telemetry. No surprises. Just a fast, well-engineered SSH manager you fully control.</p>
      </div>
      <div className="fgrid">
        {[
          { icon:<Lock />, h:"Encryption that's actually serious.", p:"Modern crypto by default — built on libraries auditors recognize.",
            items:["AES-256-GCM at rest","argon2id KDF (OWASP params)","Vault key lives in memory only","SSH host fingerprint pinning"],
            link:[SECURITY_URL,"Read security model",true] },
          { icon:<Terminal />, h:"Made for how you actually work.", p:"A keyboard-first UI tuned for managing dozens of hosts a day.",
            items:["In-browser xterm.js terminal","Import ~/.ssh/config in one click","Keyboard shortcuts (Ctrl+Shift+W)","Dark / light themes"],
            link:[REPO_URL+"#features","View all features",true] },
          { icon:<Rocket />, h:"Self-hosted should be simple.", p:"One container, one volume, zero hand-holding.",
            items:["Single Docker command","SQLite — no DB to set up","WAL mode for performance","Zero configuration needed"],
            link:[DEPLOY_URL,"Quick start guide",true] },
        ].map(({ icon, h, p, items, link }, i) => (
          <article key={h} className="fcard fade-in" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="fcard-icon">{icon}</div>
            <h3>{h}</h3>
            <p>{p}</p>
            <ul>{items.map((it) => <li key={it}><Check /> {it}</li>)}</ul>
            <a className="flink" href={link[0]} {...(link[2] ? { target:"_blank", rel:"noreferrer" } : {})}>
              {link[1]} <Arrow />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Showcase = () => (
  <section>
    <div className="container">
      <div className="show fade-in">
        <TreeMock />
        <div>
          <span className="eyebrow"><span className="dot" />Organization</span>
          <h2>From 10 hosts to 1,000.</h2>
          <p>Nested folders. Starred favorites. Full-text search across labels, hostnames, and usernames.
            Keep production, staging, and client environments cleanly separated — without losing your mind.</p>
          <div className="stats">
            <span>Unlimited folders</span><span>Instant search</span><span>Drag to organize</span>
          </div>
        </div>
      </div>
      <div className="show reverse fade-in">
        <div>
          <span className="eyebrow"><span className="dot" />Terminal</span>
          <h2>Full SSH, in your browser.</h2>
          <p>xterm.js terminal over WebSocket. Real-time output, full color support, copy-paste, resize handling.
            No client to install. No app to update. Just open a tab and connect.</p>
          <div className="stats">
            <span>Native xterm.js</span><span>256-color support</span><span>Ctrl+Shift+W to disconnect</span>
          </div>
        </div>
        <TerminalMock />
      </div>
      <div className="show fade-in">
        <VaultMock />
        <div>
          <span className="eyebrow"><span className="dot" />Privacy</span>
          <h2>Your keys never leave your server.</h2>
          <p>Skiff runs on your infrastructure. Credentials are encrypted at rest with AES-256-GCM.
            Master password is hashed with argon2id and never stored. Vault key lives in memory only —
            zeroed on idle timeout. No telemetry. No phone-home. No cloud sync.</p>
          <div className="stats">
            <span>Zero telemetry</span><span>No external APIs</span><span>100% self-hosted</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Comparison = () => {
  const rows = [
    ["Self-hosted",         ["yes"],["no"],              ["no"],             ["no"]],
    ["Open source",         ["yes"],["no"],              ["no"],             ["no"]],
    ["Free forever",        ["yes"],["partial","Freemium"],["partial","Paid"],["partial","Paid"]],
    ["E2E encryption",      ["yes"],["yes"],             ["yes"],            ["yes"]],
    ["In-browser terminal", ["yes"],["no"],              ["no"],             ["no"]],
    ["No telemetry",        ["yes"],["no"],              ["no"],             ["no"]],
    ["Web-based UI",        ["yes"],["partial","Desktop"],["partial","Desktop"],["partial","Desktop"]],
    ["Docker deployment",   ["yes"],["no"],              ["no"],             ["no"]],
    ["Cloud sync optional", ["yes"],["partial","Required"],["partial","N/A"],["partial","N/A"]],
  ];
  const cell = ([kind, label]) => {
    if (kind === "yes") return <span className="yes"><Check style={{ width:16,height:16 }} /></span>;
    if (kind === "no")  return <span className="no"><X style={{ width:16,height:16 }} /></span>;
    return <span className="partial">{label}</span>;
  };
  return (
    <section id="pricing">
      <div className="container">
        <div className="section-head fade-in">
          <span className="eyebrow"><span className="dot" />Compared</span>
          <h2>Why developers are switching to Skiff.</h2>
          <p>The same encryption guarantees as the paid tools — without the desktop install,
            the subscription, or the cloud sync you didn't ask for.</p>
        </div>
        <div className="cmp-wrap fade-in">
          <table className="cmp">
            <thead>
              <tr>
                <th />
                <th className="col-skiff">
                  <span style={{ display:"inline-flex",alignItems:"center",gap:8,justifyContent:"center" }}>
                    <SkiffLogo size={18} /> Skiff
                  </span>
                </th>
                <th>Termius</th><th>Royal TSX</th><th>SecureCRT</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]}>
                  <td>{r[0]}</td>
                  <td className="col-skiff">{cell(r[1])}</td>
                  <td>{cell(r[2])}</td><td>{cell(r[3])}</td><td>{cell(r[4])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="fade-in" style={{ textAlign:"center",marginTop:16,fontSize:13,color:"var(--text-4)" }}>
          * Based on publicly available information as of 2026. Skiff is AGPL-3.0 — free forever, no catch.
        </p>
      </div>
    </section>
  );
};

const QuickStart = () => {
  const [copied, setCopied] = React.useState(false);
  const cmd = "# Clone and start in under 60 seconds\ngit clone https://github.com/Priyanshu-1622/skiff.git\ncd skiff\ncp .env.example .env\n# Edit .env: set SKIFF_COOKIE_SECRET=$(openssl rand -hex 32)\ndocker compose up -d --build\n\n# Open http://localhost:8080";
  const copy = () => {
    navigator.clipboard?.writeText(cmd).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  const steps = [
    { n:"01", h:"Clone",     p:"Run git clone on any Linux, Mac, or Windows machine.",              icon:<Folder style={{width:22,height:22,color:"var(--text-3)"}} /> },
    { n:"02", h:"Configure", p:"Copy .env.example → .env and set your cookie secret.",              icon:<Settings /> },
    { n:"03", h:"Deploy",    p:"docker compose up -d --build — the whole stack in one command.",    icon:<Container /> },
    { n:"04", h:"Connect",   p:"Open your browser, set a master password, start adding hosts.",     icon:<Globe /> },
  ];
  return (
    <section id="quickstart">
      <div className="container">
        <div className="section-head fade-in">
          <span className="eyebrow"><span className="dot" />Quick start</span>
          <h2>Up and running in 60 seconds.</h2>
          <p>One command brings the whole stack up. SQLite handles storage — no migration scripts,
            no external services, no ops overhead.</p>
        </div>
        <div className="qs fade-in">
          <div className="codeblock">
            <div className="codeblock-bar">
              <div className="tl"><span className="r"/><span className="y"/><span className="g"/></div>
              <span>Terminal — bash</span>
            </div>
            <button className={"copy-btn " + (copied ? "ok" : "")} onClick={copy}>
              {copied ? <><Check style={{width:12,height:12}} /> Copied</> : <><Copy style={{width:12,height:12}} /> Copy</>}
            </button>
            <pre>
<span className="com"># Clone and start in under 60 seconds</span>{"\n"}
<span className="key">git</span> clone <span className="str">https://github.com/Priyanshu-1622/skiff.git</span>{"\n"}
<span className="key">cd</span> skiff{"\n"}
<span className="key">cp</span> .env.example .env{"\n"}
<span className="com"># Edit .env: set SKIFF_COOKIE_SECRET=$(openssl rand -hex 32)</span>{"\n"}
<span className="key">docker</span> compose up -d --build{"\n\n"}
<span className="com"># Open http://localhost:8080</span>
            </pre>
          </div>
          <div className="steps">
            {steps.map(({ n, h, p, icon }) => (
              <div key={n} className="step">
                <div className="step-num">{n}</div>
                <div><h4>{h}</h4><p>{p}</p></div>
                <div className="icon">{icon}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="qs-foot fade-in">
          Not using Docker?{" "}
          <a href={DEPLOY_URL} target="_blank" rel="noreferrer">
            Read the full deployment guide (manual install, nginx, systemd) →
          </a>
        </div>
      </div>
    </section>
  );
};

const Architecture = () => {
  const items = [
    { tag:"React 18 + TS",  icon:<TechReact />,  h:"Type-safe frontend",  p:"React 18 with TanStack Router v7, TanStack Query, and TypeScript end-to-end." },
    { tag:"Fastify",        icon:<TechFastify />, h:"Low-overhead Node API",p:"Fast, schema-validated routes with auth middleware, rate-limiting, and WebSocket." },
    { tag:"better-sqlite3", icon:<TechSqlite />,  h:"Synchronous SQLite",  p:"WAL mode, prepared statements. Tens of thousands of writes per second on a Pi." },
    { tag:"ssh2",           icon:<TechNode />,    h:"Battle-tested SSH",   p:"The de-facto Node.js SSH library — proven across hundreds of open-source projects." },
    { tag:"xterm.js",       icon:<TechXterm />,   h:"VS Code's terminal",  p:"256-color, true-color, copy-paste, resize. The same terminal powering VS Code." },
    { tag:"argon2 + GCM",   icon:<Lock />,        h:"Modern crypto",       p:"OWASP-tuned argon2id KDF feeds AES-256-GCM. Zero homemade crypto primitives." },
    { tag:"TanStack Query", icon:<TechReact />,   h:"Smart server state",  p:"Cache-aware fetching, optimistic updates, instant refocus refetch out of the box." },
    { tag:"Zustand",        icon:<TechReact />,   h:"Tiny client state",   p:"Under 1 KB. No providers, no boilerplate. Vault + theme state cleanly separated." },
  ];
  return (
    <section>
      <div className="container">
        <div className="section-head fade-in">
          <span className="eyebrow"><span className="dot" />Under the hood</span>
          <h2>Built with modern, boring tech.</h2>
          <p>Each piece is something an SRE has already deployed in production. No exotic dependencies,
            no proprietary runtimes, no vendor lock-in.</p>
        </div>
        <div className="arch">
          {items.map((it, i) => (
            <div key={it.h} className="arch-card fade-in" style={{ transitionDelay:`${(i%4)*60}ms` }}>
              <div className="arch-icon">{it.icon}</div>
              <h4>{it.h}</h4>
              <p>{it.p}</p>
              <div style={{ marginTop:14,fontFamily:"var(--mono)",fontSize:11,color:"var(--text-4)",letterSpacing:"0.06em" }}>{it.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Community = () => (
  <section id="community" className="community">
    <div className="container inner">
      <div className="gh-icon"><GitHub style={{ width:28,height:28 }} /></div>
      <span className="eyebrow"><span className="dot" />Open source</span>
      <h2 style={{ marginTop:14 }}>Built in the open. Built by developers, for developers.</h2>
      <div className="stats-row">
        <span className="badge">AGPL-3.0 licensed</span>
        <span className="badge">v0.1.0</span>
        <span className="badge">Public roadmap</span>
        <span className="badge">Self-hostable</span>
      </div>
      <p style={{ maxWidth:560,margin:"0 auto" }}>
        Skiff is open from day one. File issues, request features, or contribute code — the
        project lives on GitHub and welcomes contributors at every experience level.
      </p>
      <div className="ctas">
        <a className="btn btn-primary" href={REPO_URL} target="_blank" rel="noreferrer"><GitHub style={{width:14,height:14}} /> Star on GitHub</a>
        <a className="btn btn-secondary" href={DOCS_URL} target="_blank" rel="noreferrer"><Book /> Read the docs</a>
        <a className="btn btn-ghost" href={DISCUSSIONS_URL} target="_blank" rel="noreferrer"><Chat /> Join discussions</a>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const data = [
    ["Is Skiff really free?",
     "Yes. Skiff is AGPL-3.0 licensed and free forever. No premium tier, no \"pro\" version. If you modify and run it as a network service, you must share your source code under the same license."],
    ["How is this different from SSH-ing directly?",
     "Skiff doesn't replace SSH — it's a manager on top of it. Think of it like 1Password for your SSH connections, plus a built-in xterm.js terminal. Your credentials are encrypted; the connection is a real SSH session."],
    ["Where are my credentials stored?",
     "On your server, encrypted with AES-256-GCM. The key is derived from your master password (never stored anywhere). Nobody can decrypt your credentials without your password — not even you, if you forget it. Download a backup regularly."],
    ["Can I host this on a Raspberry Pi?",
     "Yes. SQLite + a small Node.js process runs comfortably on a Pi 4 with ~100 MB of memory. SSH terminal sessions are the heaviest part but are lightweight per-connection."],
    ["What happens if I forget my master password?",
     "Your credentials are permanently lost — there is no recovery mechanism. That's the security trade-off of not storing the key anywhere. Use Settings → Backup regularly to download an encrypted vault export."],
    ["Can multiple users share a Skiff instance?",
     "Not in v0.1. Multi-user support with role-based access control (RBAC) is on the roadmap. For now it's a single-user vault by design."],
    ["Does Skiff support SSH key authentication?",
     "Yes. When adding a host, select \"Private Key\" and paste your key. It's encrypted at rest with AES-256-GCM and never transmitted to any external service."],
    ["Can I import my hosts from Termius or Royal TSX?",
     "Not yet directly. Export your ~/.ssh/config and import via Settings → Import. Skiff parses Host, HostName, Port, User, and IdentityFile directives. Direct migration tools are planned."],
    ["What browsers are supported?",
     "Chrome 90+, Firefox 88+, Safari 15+, Edge 90+. xterm.js terminal works best in Chrome/Edge. Mobile browsers work for host management; terminal sessions are better on desktop."],
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section>
      <div className="container">
        <div className="section-head fade-in">
          <span className="eyebrow"><span className="dot" />Questions</span>
          <h2>Frequently asked.</h2>
          <p>Still have questions?{" "}
            <a href={DISCUSSIONS_URL} target="_blank" rel="noreferrer" style={{ color:"var(--primary)",fontWeight:600 }}>
              Ask in Discussions →
            </a>
          </p>
        </div>
        <div className="faq fade-in">
          {data.map(([q, a], i) => (
            <div key={i} className={"faq-item " + (open === i ? "open" : "")}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{q}</span>
                <span className="faq-toggle">{open === i ? "−" : "+"}</span>
              </button>
              <div className="faq-body"><div className="faq-body-inner">{a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <div className="final-wrap container fade-in">
    <div className="final">
      <span className="eyebrow" style={{ color:"rgba(255,255,255,0.85)" }}>
        <span className="dot" style={{ background:"#fff",boxShadow:"0 0 12px #fff" }} />Ready when you are
      </span>
      <h2 style={{ marginTop:18 }}>Stop trusting your servers to closed-source apps.</h2>
      <p>Skiff is free, open-source, and ready to deploy. Take 60 seconds and try it.</p>
      <div className="ctas">
        <a className="btn btn-white" href="#quickstart">Get started now <Arrow /></a>
        <a className="btn btn-outline-white" href={REPO_URL} target="_blank" rel="noreferrer">
          <GitHub style={{width:14,height:14}} /> View on GitHub
        </a>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer>
    <div className="container">
      <div className="foot-grid">
        <div>
          <a className="brand" href="#"><span className="brand-mark"><SkiffLogo /></span> Skiff</a>
          <p className="foot-tagline">A self-hosted SSH connection manager.<br />Your servers, your keys, your control.</p>
          <div className="foot-social">
            <a href={REPO_URL}       target="_blank" rel="noreferrer" aria-label="GitHub"><GitHub style={{width:16,height:16}} /></a>
            <a href={DISCUSSIONS_URL} target="_blank" rel="noreferrer" aria-label="Discussions"><Chat /></a>
            <a href={DOCS_URL}       target="_blank" rel="noreferrer" aria-label="Docs"><Book /></a>
          </div>
        </div>
        <div>
          <h5>Product</h5>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href={DOCS_URL}     target="_blank" rel="noreferrer">Documentation</a></li>
            <li><a href={RELEASES_URL} target="_blank" rel="noreferrer">Changelog</a></li>
            <li><a href={REPO_URL+"#known-issues--rough-edges"} target="_blank" rel="noreferrer">Roadmap</a></li>
          </ul>
        </div>
        <div>
          <h5>Resources</h5>
          <ul>
            <li><a href="#quickstart">Quick start</a></li>
            <li><a href={DEPLOY_URL}   target="_blank" rel="noreferrer">Deployment guide</a></li>
            <li><a href={SECURITY_URL} target="_blank" rel="noreferrer">Security model</a></li>
            <li><a href={CONTRIBUTING_URL} target="_blank" rel="noreferrer">Contributing</a></li>
          </ul>
        </div>
        <div>
          <h5>Community</h5>
          <ul>
            <li><a href={ISSUES_URL}       target="_blank" rel="noreferrer">GitHub issues</a></li>
            <li><a href={DISCUSSIONS_URL}  target="_blank" rel="noreferrer">GitHub discussions</a></li>
            <li><a href={CONTRIBUTING_URL} target="_blank" rel="noreferrer">Contributing guide</a></li>
            <li><a href={RELEASES_URL} target="_blank" rel="noreferrer">Changelog</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <div>© 2026 Skiff — AGPL-3.0 Licensed</div>
        <div>Made with ❤️ by <a href="https://github.com/Priyanshu-1622" target="_blank" rel="noreferrer">Priyanshu</a> and contributors.</div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Nav, Hero, Trusted, Features, Showcase, Comparison, QuickStart, Architecture, Community, FAQ, FinalCTA, Footer });
