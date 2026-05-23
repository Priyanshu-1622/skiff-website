// Mockup components — used in hero + showcase sections.

const HeroAppMock = () => (
  <div className="browser">
    <div className="browser-bar">
      <div className="tl"><span className="r"></span><span className="y"></span><span className="g"></span></div>
      <div className="url">
        <Lock className="lock" />
        <span>skiff.local</span>
      </div>
      <div style={{ width: 50 }}></div>
    </div>
    <div className="skiff-app">
      <div className="skiff-top">
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: 14 }}>
          <SkiffLogo size={20} /> Skiff
        </div>
        <div className="skiff-search">
          <Search style={{ width: 14, height: 14 }} />
          <span>Search hosts, folders…</span>
          <span className="kbd">/</span>
        </div>
        <div className="skiff-user">
          <span>admin</span>
          <div className="avatar">A</div>
        </div>
      </div>
      <div className="skiff-side">
        <div className="side-item active"><Globe style={{ width: 14, height: 14 }} /> All hosts <span className="ct">24</span></div>
        <div className="side-item"><Star style={{ width: 14, height: 14 }} /> Favorites <span className="ct">5</span></div>
        <div className="side-item"><Settings style={{ width: 14, height: 14 }} /> Settings</div>
        <div className="side-section">Folders</div>
        <div className="side-item"><span className="arrow">▾</span><Folder style={{ width: 14, height: 14, color: "var(--text-3)" }} /> Production <span className="ct">8</span></div>
        <div className="side-folder"><span className="arrow">▸</span>Web servers</div>
        <div className="side-folder"><span className="arrow">▸</span>Databases</div>
        <div className="side-item"><span className="arrow">▸</span><Folder style={{ width: 14, height: 14, color: "var(--text-3)" }} /> Staging <span className="ct">5</span></div>
        <div className="side-item"><span className="arrow">▸</span><Folder style={{ width: 14, height: 14, color: "var(--text-3)" }} /> Clients <span className="ct">11</span></div>
      </div>
      <div className="skiff-main">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div style={{ fontSize: 13, color: "var(--text-3)", fontFamily: "var(--mono)" }}>24 hosts · sorted by recent</div>
          <div style={{ display: "inline-flex", gap: 6 }}>
            <div style={{ fontSize: 12, color: "var(--text-3)", padding: "5px 10px", border: "1px solid var(--line)", borderRadius: 7 }}>+ Add host</div>
          </div>
        </div>
        {[
          { name: "prod-web-01", meta: "deploy@10.0.0.5:22", time: "2h ago", dot: "g" },
          { name: "prod-db-master", meta: "admin@db.example.com:22", time: "5m ago", dot: "g" },
          { name: "staging-api", meta: "ubuntu@staging.example.com:22", time: "1d ago", dot: "d" },
          { name: "ci-runner-eu", meta: "ci@build.eu.skiff.dev:22", time: "3d ago", dot: "a" },
        ].map((h) => (
          <div className="host-row" key={h.name}>
            <div className="host-name"><span className={"dot-g dot-" + h.dot}></span>{h.name}</div>
            <div className="host-meta">{h.meta}</div>
            <div className="host-time">{h.time}</div>
            <button className="host-cta">Connect ↗</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TreeMock = () => (
  <div className="frame">
    <div className="browser-bar" style={{ background: "transparent" }}>
      <div className="tl"><span className="r"></span><span className="y"></span><span className="g"></span></div>
      <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--text-3)" }}>Sidebar — folders</div>
    </div>
    <div className="tree">
      <div className="tree-item"><Chevron style={{ width: 12, height: 12, color: "var(--text-3)", transform: "rotate(90deg)" }} /><Folder style={{ color: "var(--primary)" }} /> Production <span className="ct">8</span></div>
      <div className="tree-item depth-1"><Chevron style={{ width: 12, height: 12, color: "var(--text-3)" }} /><Folder /> Web Servers <span className="ct">4</span></div>
      <div className="tree-item depth-1"><Chevron style={{ width: 12, height: 12, color: "var(--text-3)" }} /><Folder /> Database <span className="ct">2</span></div>
      <div className="tree-item depth-1 active"><Chevron style={{ width: 12, height: 12 }} /><Folder /> Cache <span className="ct">2</span></div>
      <div className="tree-item"><Chevron style={{ width: 12, height: 12, color: "var(--text-3)" }} /><Folder /> Staging <span className="ct">5</span></div>
      <div className="tree-item"><Chevron style={{ width: 12, height: 12, color: "var(--text-3)" }} /><Folder /> Development <span className="ct">11</span></div>
      <div className="tree-item"><Chevron style={{ width: 12, height: 12, color: "var(--text-3)" }} /><Folder /> Clients <span className="ct">6</span></div>
      <div className="tree-item"><Star style={{ width: 14, height: 14, color: "var(--amber)" }} /> Favorites <span className="ct">3</span></div>
    </div>
  </div>
);

const TerminalMock = () => (
  <div className="frame">
    <div className="term-bar">
      <div className="tl"><span className="r"></span><span className="y"></span><span className="g"></span></div>
      <div style={{ fontSize: 12, color: "var(--text-2)", fontFamily: "var(--mono)" }}>deploy@prod-web-01:22</div>
      <div className="term-status"><span className="pulse"></span>Connected · 47d uptime</div>
    </div>
    <div className="term">
      <div><span className="user">deploy</span><span className="at">@</span><span className="host">prod-web-01</span><span className="at">:</span><span className="prompt">~</span><span className="at">$</span> <span className="cmd">uptime</span></div>
      <div className="out"> 14:32:18 up 47 days, 3:21, 2 users, load average: 0.42, 0.38, 0.41</div>
      <div style={{ height: 6 }}></div>
      <div><span className="user">deploy</span><span className="at">@</span><span className="host">prod-web-01</span><span className="at">:</span><span className="prompt">~</span><span className="at">$</span> <span className="cmd">docker ps --format "table {`{{.Names}}`}\t{`{{.Status}}`}"</span></div>
      <div className="out">NAMES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STATUS</div>
      <div className="out">nginx-edge&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Up 14 days</div>
      <div className="out">api-gateway&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Up 14 days&nbsp;(healthy)</div>
      <div className="out">postgres-pgbouncer&nbsp;Up 47 days</div>
      <div className="out">redis-primary&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Up 47 days</div>
      <div style={{ height: 6 }}></div>
      <div><span className="user">deploy</span><span className="at">@</span><span className="host">prod-web-01</span><span className="at">:</span><span className="prompt">~</span><span className="at">$</span> <span className="cmd">tail -f /var/log/nginx/access.log</span><span className="cursor"></span></div>
    </div>
  </div>
);

const VaultMock = () => (
  <div className="frame">
    <div className="browser-bar" style={{ background: "transparent" }}>
      <div className="tl"><span className="r"></span><span className="y"></span><span className="g"></span></div>
      <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--text-3)" }}>Vault — encryption flow</div>
    </div>
    <div className="vault">
      <div className="vault-input">
        <Lock className="lock" style={{ width: 16, height: 16 }} />
        <span style={{ color: "var(--text-3)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>Master password</span>
        <span className="dots" style={{ marginLeft: "auto" }}>•••••••••••</span>
      </div>
      <div className="vault-arrow"><div className="line"></div><span>argon2id</span></div>
      <div className="vault-block primary">
        <span className="lbl">Vault key</span>
        <span>0x7a4f…e29c · memory only</span>
      </div>
      <div className="vault-arrow"><div className="line"></div><span>AES-256-GCM</span></div>
      <div className="vault-block">
        <span className="lbl">Encrypted credentials → SQLite</span>
        <span style={{ color: "var(--text-3)" }}>vault.db · zeroed on idle</span>
      </div>
    </div>
  </div>
);

Object.assign(window, { HeroAppMock, TreeMock, TerminalMock, VaultMock });
