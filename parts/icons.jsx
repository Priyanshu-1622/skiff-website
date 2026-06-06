// Icon library — all inline SVGs, no external deps.
// Original Skiff logo: a sail + hull shape, simple geometric form.

// Skiff mark — flat-hulled boat with an angled sail, matching the brand logo.
// The hull uses currentColor so it adapts to light/dark contexts; the sail
// is always the brand blue.
const SkiffLogo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    {/* sail — right triangle leaning right */}
    <path d="M11 17 L22 8 L22 17 Z" fill="#3295FB" />
    {/* hull — flat-bottomed trapezoid */}
    <path d="M4 19 L28 19 L24.5 25 L7.5 25 Z" fill="currentColor" />
  </svg>
);

const Arrow = (p) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
);

const GitHub = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 .5C5.4.5 0 5.9 0 12.5c0 5.3 3.4 9.7 8.2 11.3.6.1.8-.3.8-.6v-2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6 8.2-11.3C24 5.9 18.6.5 12 .5z" />
  </svg>
);

const Star = (p) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...p}>
    <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.8L10 14.9l-5.3 2.7 1.1-5.8L1.5 7.7l5.9-.8L10 1.5z" />
  </svg>
);

const Lock = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="4.5" y="10.5" width="15" height="11" rx="2" />
    <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
    <circle cx="12" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const Terminal = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
    <path d="M7 10l3 2.5-3 2.5M12 15.5h5" />
  </svg>
);

const Rocket = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M14.5 3c3.5 0 5.5 2 5.5 5.5 0 4.5-3 8.5-7 11 0-2-1.5-3.5-3.5-3.5C12 12 16 9 14.5 3z" />
    <path d="M9 15c-2 .5-3 2-3 5 3 0 4.5-1 5-3" />
    <circle cx="15" cy="9" r="1.2" />
  </svg>
);

const Check = (p) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 10.5l3.5 3.5L16 5.5" />
  </svg>
);

const X = (p) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
    <path d="M5 5l10 10M15 5L5 15" />
  </svg>
);

const Search = (p) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}>
    <circle cx="9" cy="9" r="5.5" />
    <path d="M17 17l-3.7-3.7" />
  </svg>
);

const Folder = (p) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...p}>
    <path d="M2.5 5.5A1.5 1.5 0 0 1 4 4h3.4c.4 0 .8.2 1.1.4l1 1c.3.2.7.4 1.1.4H16a1.5 1.5 0 0 1 1.5 1.5V15A1.5 1.5 0 0 1 16 16.5H4A1.5 1.5 0 0 1 2.5 15V5.5z" opacity="0.85" />
  </svg>
);

const Chevron = (p) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M7 5l5 5-5 5" />
  </svg>
);

const Copy = (p) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <path d="M13 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
  </svg>
);

const Book = (p) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 4.5h5.5a2 2 0 0 1 2 2v10a1.5 1.5 0 0 0-1.5-1.5H4z" />
    <path d="M16 4.5h-5.5a2 2 0 0 0-2 2v10a1.5 1.5 0 0 1 1.5-1.5H16z" />
  </svg>
);

const Chat = (p) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 9.5a6 6 0 0 1 12 0c0 3.3-2.7 6-6 6-1 0-1.9-.2-2.7-.6L3 16l1-3a6 6 0 0 1-1-3.5z" />
  </svg>
);

const Container = (p) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="6" width="14" height="9" rx="1.5" />
    <path d="M7 6v9M10 6v9M13 6v9" />
  </svg>
);

const Settings = (p) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="10" cy="10" r="2.5" />
    <path d="M10 3v2M10 15v2M3 10h2M15 10h2M5.2 5.2l1.4 1.4M13.4 13.4l1.4 1.4M5.2 14.8l1.4-1.4M13.4 6.6l1.4-1.4" />
  </svg>
);

const Globe = (p) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="10" cy="10" r="7" />
    <path d="M3 10h14M10 3c2.5 2.5 2.5 11.5 0 14M10 3c-2.5 2.5-2.5 11.5 0 14" />
  </svg>
);

// Tech logos — simplified monochrome marks (original/generic, not exact brand assets)
const TechReact = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
    <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)" />
  </svg>
);
const TechTS = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <text x="12" y="16" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="currentColor">TS</text>
  </svg>
);
const TechNode = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
    <path d="M12 2.5 L21 7.5 V16.5 L12 21.5 L3 16.5 V7.5 Z" />
  </svg>
);
const TechSqlite = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
    <ellipse cx="12" cy="6" rx="8" ry="2.4" />
    <path d="M4 6v12c0 1.3 3.6 2.4 8 2.4s8-1.1 8-2.4V6" />
    <path d="M4 12c0 1.3 3.6 2.4 8 2.4s8-1.1 8-2.4" />
  </svg>
);
const TechDocker = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <rect x="3" y="11" width="2.6" height="2.6" /><rect x="6" y="11" width="2.6" height="2.6" /><rect x="9" y="11" width="2.6" height="2.6" /><rect x="12" y="11" width="2.6" height="2.6" /><rect x="6" y="8" width="2.6" height="2.6" /><rect x="9" y="8" width="2.6" height="2.6" /><rect x="12" y="8" width="2.6" height="2.6" /><rect x="9" y="5" width="2.6" height="2.6" />
    <path d="M15 11.5c4 0 5 2.5 5 2.5 1-1 2-1 2-1-1 2-3 4-7 4H4c-2 0-3-2-3-4 2 0 2 1 4 1" fill="none" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);
const TechFastify = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" {...p}>
    <path d="M3 8 L21 4 L18 11 L21 11 L9 21 L12 13 L8 13 Z" />
  </svg>
);
const TechXterm = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <rect x="2.5" y="4" width="19" height="16" rx="2" />
    <path d="M6 10l3 2-3 2M12 14h5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Object.assign(window, {
  SkiffLogo, Arrow, GitHub, Star, Lock, Terminal, Rocket, Check, X, Search,
  Folder, Chevron, Copy, Book, Chat, Container, Settings, Globe,
  TechReact, TechTS, TechNode, TechSqlite, TechDocker, TechFastify, TechXterm
});
