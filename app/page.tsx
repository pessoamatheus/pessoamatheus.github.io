import { SiteShell } from "@/components/site-shell";

const selectedWork = [
  {
    year: "2025",
    journal: "Science Advances",
    title:
      "Single-molecule capture, release, and dynamical manipulation via reversible electrokinetic confinement (RECON)",
    href: "https://www.science.org/doi/10.1126/sciadv.adv8863",
  },
  {
    year: "2026",
    journal: "Macromolecules",
    title: "DNA Dynamics in Dual-Nanopore Tug-of-War",
    href: "https://pubs.acs.org/doi/10.1021/acs.macromol.5c02380",
  },
  {
    year: "2024",
    journal: "Nanoscale",
    title: "Tunable nanofluidic device for digital nucleic acid analysis",
    href: "https://pubs.rsc.org/en/content/articlelanding/2024/nr/d3nr05553a",
  },
];

export default function Home() {
  return (
    <SiteShell active="Home">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">Experimental nanobiophysics</p>
          <h1>Controlling single molecules in real time.</h1>
          <p className="hero-deck">
            I develop nanofluidic tools to capture, confine, and dynamically
            manipulate individual DNA molecules using electric fields.
          </p>
          <p className="hero-body">
            My research sits at the intersection of soft matter physics,
            nanofluidics, and single-molecule biophysics. I am a PhD candidate
            in Walter Reisner&apos;s Nanobiophysics Lab at McGill University.
          </p>
          <div className="text-links" aria-label="Profile links">
            <a href="/research">Research overview <span aria-hidden="true">→</span></a>
            <a href="https://scholar.google.ca/citations?hl=en&user=o5FQpCsAAAAJ" target="_blank" rel="noreferrer">
              Google Scholar <span aria-hidden="true">↗</span>
            </a>
            <a href="https://orcid.org/0000-0003-3733-3127" target="_blank" rel="noreferrer">
              ORCID <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <figure className="hero-figure">
          <img
            src="/assets/recon-experiment.jpg"
            alt="RECON device cross-section and fluorescence micrographs of DNA confined in nanocavities"
          />
          <figcaption>
            Parallel-electrode nanofluidic device and fluorescence images of
            DNA under reversible electrokinetic confinement.
            <span>Science Advances, 2025.</span>
          </figcaption>
        </figure>
      </section>

      <section className="home-grid ruled-section">
        <div>
          <p className="section-kicker">Current research</p>
          <h2>Dynamic molecular control on chip</h2>
        </div>
        <div className="prose-column">
          <p>
            The RECON platform replaces fixed geometric confinement with an
            electrically tunable free-energy landscape. By changing the drive
            waveform, we can move a polymer through equilibrium and
            non-equilibrium conformational states while observing it directly.
          </p>
          <ul className="question-list">
            <li>How does a confined polymer respond to periodic and stochastic driving?</li>
            <li>Which relaxation modes govern the observed molecular response?</li>
            <li>How can tunable confinement become a practical molecular-analysis tool?</li>
          </ul>
        </div>
      </section>

      <section className="motion-band ruled-section" aria-labelledby="research-in-motion">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Research in motion</p>
            <h2 id="research-in-motion">Tuning tension molecule by molecule</h2>
          </div>
          <a className="inline-link" href="/media">
            More microscopy <span aria-hidden="true">→</span>
          </a>
        </div>
        <figure className="motion-figure motion-figure-wide">
          <img
            src="/assets/dna-tension-dynamics.gif"
            alt="Animated fluorescence microscopy of T4-DNA confined between pairs of nanocavities under increasing applied tension"
          />
          <figcaption>
            <strong>T4-DNA between two nanocavities.</strong> From left to right,
            increasing current raises the applied tension and suppresses
            fluctuations between the two wells.
          </figcaption>
        </figure>
      </section>

      <section className="ruled-section">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Selected publications</p>
            <h2>Recent work</h2>
          </div>
          <a className="inline-link" href="/publications">
            All publications <span aria-hidden="true">→</span>
          </a>
        </div>
        <ol className="publication-list compact">
          {selectedWork.map((work) => (
            <li key={work.title}>
              <span className="pub-year">{work.year}</span>
              <div>
                <a href={work.href} target="_blank" rel="noreferrer" className="publication-title">
                  {work.title} <span aria-hidden="true">↗</span>
                </a>
                <p>{work.journal}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="note-band" aria-label="Current position">
        <p className="section-kicker">Current</p>
        <p>
          Completing a PhD in Physics at McGill University and exploring
          postdoctoral research opportunities in single-molecule biophysics,
          nanofluidics, and molecular instrumentation.
        </p>
        <a href="mailto:matheus.pessoa@mail.mcgill.ca">Get in touch <span aria-hidden="true">→</span></a>
      </section>
    </SiteShell>
  );
}
