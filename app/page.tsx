import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const selectedWork = [
  {
    year: "2025",
    journal: "Science Advances",
    featured: true,
    title:
      "Single-molecule capture, release, and dynamical manipulation via reversible electrokinetic confinement (RECON)",
    href: "https://www.science.org/doi/10.1126/sciadv.adv8863",
  },
  {
    year: "2026",
    journal: "Macromolecules",
    featured: false,
    title: "DNA Dynamics in Dual-Nanopore Tug-of-War",
    href: "https://pubs.acs.org/doi/10.1021/acs.macromol.5c02380",
  },
  {
    year: "2024",
    journal: "Nanoscale",
    featured: false,
    title: "Tunable nanofluidic device for digital nucleic acid analysis",
    href: "https://pubs.rsc.org/en/content/articlelanding/2024/nr/d3nr05553a",
  },
];

export default function Home() {
  return (
    <SiteShell active="Home">
      <section className="welcome-section" id="profile">
        <div className="welcome-copy">
          <p className="section-kicker">Welcome</p>
          <h2>Matheus Pessôa</h2>
          <p className="welcome-lede">
            I&apos;m currently a PhD candidate at McGill University, where my
            research combines nanofluidic devices, electric fields, and
            single-molecule fluorescence microscopy to study and control DNA
            dynamics. I developed Reversible Electrokinetic Confinement
            (RECON), an on-chip technique that uses electrically tunable
            nanocavities to capture, confine, release, and dynamically
            manipulate individual DNA molecules. This work was recently
            published in <em>Science Advances</em>.
          </p>
          <div className="welcome-links" aria-label="Biography links">
            <a
              href="/assets/fullcv-matheuspessoa.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Complete CV <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://scholar.google.ca/citations?user=o5FQpCsAAAAJ&hl=pt-BR&oi=sra"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar <span aria-hidden="true">↗</span>
            </a>
            <a href="mailto:matheus.pessoa@mail.mcgill.ca">
              matheus.pessoa@mail.mcgill.ca
            </a>
          </div>
        </div>
        <figure className="welcome-portrait">
          <img
            src="/assets/matheus-pessoa-portrait.jpg"
            alt="Portrait of Matheus Pessôa"
          />
        </figure>
      </section>

      <section className="ruled-section home-cv" aria-labelledby="short-cv-heading">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Curriculum vitae</p>
            <h2 id="short-cv-heading">Selected background</h2>
          </div>
          <a
            className="inline-link"
            href="/assets/fullcv-matheuspessoa.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Complete CV <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="home-cv-grid">
          <article className="home-cv-column">
            <h3>Education</h3>
            <ol className="home-cv-list">
              <li>
                <span>2021–Present</span>
                <div>
                  <strong>Ph.D. in Physics</strong>
                  <small>McGill University · Nanobiophysics Laboratory</small>
                </div>
              </li>
              <li>
                <span>2019–2021</span>
                <div>
                  <strong>M.Sc. in Physics</strong>
                  <small>McGill University · Experimental Cosmology Laboratory</small>
                </div>
              </li>
              <li>
                <span>2015–2019</span>
                <div>
                  <strong>B.Sc. in Physics</strong>
                  <small>Federal University of ABC</small>
                </div>
              </li>
            </ol>
          </article>

          <article className="home-cv-column">
            <h3>Teaching &amp; leadership</h3>
            <ol className="home-cv-list">
              <li>
                <span>2020–2026</span>
                <div>
                  <strong>Teaching Assistant Training in Physics</strong>
                  <small>Developer and lead facilitator</small>
                </div>
              </li>
              <li>
                <span>2020–2026</span>
                <div>
                  <strong>Physics Education Research Group</strong>
                  <small>Leader</small>
                </div>
              </li>
              <li>
                <span>2021–2026</span>
                <div>
                  <strong>Undergraduate Research Showcase</strong>
                  <small>Organizer</small>
                </div>
              </li>
              <li>
                <span>2021–Present</span>
                <div>
                  <strong>Canadian International Physicists&apos; Tournament</strong>
                  <small>Founder and national representative</small>
                </div>
              </li>
            </ol>
          </article>

          <article className="home-cv-column">
            <h3>Selected highlights</h3>
            <ul className="home-cv-highlights">
              <li>FRQNT Doctoral Scholarship, 2022–2026</li>
              <li>Best Poster Award, Methods and Applications in Fluorescence, 2025</li>
              <li>Lead author of the RECON study in <em>Science Advances</em>, 2025</li>
              <li>Patent application for electrokinetic manipulation of macromolecules</li>
            </ul>
          </article>
        </div>
      </section>

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
            <Link href="/research">Research overview <span aria-hidden="true">→</span></Link>
            <a href="https://scholar.google.ca/citations?hl=en&user=o5FQpCsAAAAJ" target="_blank" rel="noreferrer">
              Google Scholar <span aria-hidden="true">↗</span>
            </a>
            <a href="https://orcid.org/0000-0003-3733-3127" target="_blank" rel="noreferrer">
              ORCID <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <figure className="hero-figure schematic-figure">
          <img
            src="/assets/recon-schematic.png"
            alt="Schematic of the RECON device with parallel electrodes, patterned nanocavities, and an applied electric field"
          />
          <figcaption>
            RECON device geometry. An applied AC bias localizes the electric
            field at patterned cavities in the lower electrode.
          </figcaption>
        </figure>
      </section>

      <section className="home-grid ruled-section">
        <div>
          <p className="section-kicker">Current research</p>
          <h2>Dynamic molecular control on chip</h2>
          <div className="home-research-video">
            <video autoPlay loop muted playsInline preload="metadata">
              <source src="/assets/microscopy/tension-increasing-voltage.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
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

      <section className="ruled-section">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Selected publications</p>
            <h2>Recent work</h2>
          </div>
          <Link className="inline-link" href="/publications">
            All publications <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ol className="publication-list compact">
          {selectedWork.map((work) => (
            <li key={work.title}>
              <span className="pub-year">{work.year}</span>
              <div>
                {work.featured && <span className="feature-label">Featured</span>}
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
