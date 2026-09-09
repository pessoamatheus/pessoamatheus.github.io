import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Media",
  description: "Research images, explanations, and media coverage of Matheus Pessôa's work.",
};

const coverage = [
  {
    outlet: "Phys.org / McGill University",
    date: "October 2025",
    title: "Physicists maneuver DNA molecules using electrical fields, offering real-time control",
    href: "https://phys.org/news/2025-10-physicists-maneuver-dna-molecules-electrical.html",
  },
  {
    outlet: "GenomeWeb",
    date: "2025",
    title: "Researchers develop technology for precision control of single molecules",
    href: "https://www.genomeweb.com/drug-discovery-development/researchers-develop-tech-precision-control-single-molecules-form-startup",
  },
  {
    outlet: "SciAdvances Brasil",
    date: "2025 · Português",
    title: "Pesquisa liderada por brasileiro consegue manipular moléculas de DNA usando campos elétricos",
    href: "https://sciadvances.com.br/n/pesquisa-liderada-brasileiro-consegue-manipular-moleculas-dna-usando-campos-eletricos/",
  },
];

export default function MediaPage() {
  return (
    <SiteShell active="Media">
      <PageIntro index="04" title="Media">
        Research images and reporting on reversible control of DNA in
        nanofluidic devices.
      </PageIntro>

      <section className="coverage-section ruled-section coverage-first">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Selected coverage</p>
            <h2>Research in the press</h2>
          </div>
        </div>
        <ol className="coverage-list">
          {coverage.map((item) => (
            <li key={item.title}>
              <div>
                <span>{item.outlet}</span>
                <span>{item.date}</span>
              </div>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.title} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="media-explainer ruled-section">
        <div>
          <p className="section-kicker">RECON in brief</p>
          <h2>A switchable landscape for DNA</h2>
        </div>
        <div>
          <p>
            A DNA molecule normally wanders through solution by Brownian motion.
            In RECON, an applied AC field concentrates the molecule inside a
            patterned nanowell. The field can be tuned continuously or turned
            off entirely, allowing the same molecule to be captured, reshaped,
            observed, and released.
          </p>
          <p>
            The central idea is simple: confinement becomes a time-dependent
            experimental variable rather than a permanent piece of geometry.
          </p>
        </div>
      </section>

      <section className="media-contact">
        <p className="section-kicker">Media enquiries</p>
        <h2>For research background, images, or interviews</h2>
        <a href="mailto:matheus.pessoa@mail.mcgill.ca">matheus.pessoa@mail.mcgill.ca</a>
      </section>
    </SiteShell>
  );
}
