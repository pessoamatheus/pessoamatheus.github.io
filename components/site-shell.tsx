import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Latest news", href: "/#news" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Experiments", href: "/experiments" },
  { label: "Media", href: "/media" },
  { label: "About", href: "/about" },
];

export function SiteShell({
  active,
  children,
  tone = "light",
}: {
  active: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div className={`site-frame${tone === "dark" ? " site-frame-dark" : ""}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="institution-bar">
          <span>McGill University</span>
          <span>Department of Physics</span>
        </div>
        <div className="masthead">
          <Link className="wordmark" href="/" aria-label="Matheus Pessôa, Ph.D., home">
            <span className="monogram" aria-hidden="true">MP</span>
            <span>
              <strong>Matheus Pessôa, Ph.D.</strong>
              <small>Nanofluidics · Single-molecule biophysics</small>
            </span>
          </Link>
          <nav aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active === item.label ? "page" : undefined}
                className={active === item.label ? "active" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content" className="site-main">{children}</main>

      <footer className="site-footer">
        <div>
          <strong>Matheus Pessôa, Ph.D.</strong>
          <span>Experimental physicist · Nanofluidics and single-molecule biophysics</span>
        </div>
        <div className="footer-links">
          <a href="mailto:matheus.pessoa@mail.mcgill.ca">Email</a>
          <a href="https://scholar.google.com/citations?user=o5FQpCsAAAAJ&hl=pt-BR" target="_blank" rel="noreferrer">Scholar</a>
          <a href="https://orcid.org/0000-0003-3733-3127" target="_blank" rel="noreferrer">ORCID</a>
        </div>
      </footer>
    </div>
  );
}
