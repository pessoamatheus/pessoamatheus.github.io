import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "About",
  description: "Biography, academic background, and contact information for Matheus Pessôa.",
};

export default function AboutPage() {
  return (
    <SiteShell active="About">
      <PageIntro index="05" title="About">
        Physicist, experimentalist, and nanofluidics researcher based in Montréal.
      </PageIntro>

      <section className="about-layout ruled-section">
        <aside className="about-contact">
          <p className="section-kicker">Contact</p>
          <address>
            Department of Physics<br />
            McGill University<br />
            Montréal, Québec, Canada
          </address>
          <a href="mailto:matheus.pessoa@mail.mcgill.ca">matheus.pessoa@mail.mcgill.ca</a>
          <div className="stacked-links">
            <a href="https://drive.google.com/file/d/1yNnpHQnO6-QXI1WoeMcmy_E6zaQ2yhCq/view?usp=sharing" target="_blank" rel="noreferrer">Curriculum vitae <span aria-hidden="true">↗</span></a>
            <a href="https://scholar.google.ca/citations?hl=en&user=o5FQpCsAAAAJ" target="_blank" rel="noreferrer">Google Scholar <span aria-hidden="true">↗</span></a>
            <a href="https://orcid.org/0000-0003-3733-3127" target="_blank" rel="noreferrer">ORCID <span aria-hidden="true">↗</span></a>
          </div>
        </aside>

        <div className="about-bio">
          <p className="bio-lede">
            I am a PhD candidate in Physics at McGill University, working with
            Walter Reisner in the Nanobiophysics Lab.
          </p>
          <p>
            My doctoral research concerns electrokinetic confinement and the
            real-time manipulation of single DNA molecules. I developed RECON,
            a nanofluidic platform that uses localized electric fields to
            capture molecules from bulk solution and place their confinement
            under dynamic control.
          </p>
          <p>
            I approach instrumentation as a way to ask physical questions. My
            work combines nanofabrication, fluorescence microscopy, signal
            analysis, polymer physics, and molecular simulation to connect a
            controlled input at the device level with a measurable molecular
            response.
          </p>
          <p>
            Before moving into nanobiophysics, I completed an MSc in Physics at
            McGill, working on instrumentation for the MIST 21-cm Cosmic Dawn
            experiment. My undergraduate work at the Federal University of ABC
            focused on acoustic scattering and radiation forces.
          </p>
        </div>
      </section>

      <section className="timeline-section ruled-section">
        <div>
          <p className="section-kicker">Academic path</p>
          <h2>Education & research</h2>
        </div>
        <ol className="timeline">
          <li>
            <span>2021—present</span>
            <div>
              <h3>PhD in Physics · McGill University</h3>
              <p>Nanobiophysics and electrokinetic confinement of single DNA molecules. Supervisor: Walter Reisner.</p>
            </div>
          </li>
          <li>
            <span>2019—2021</span>
            <div>
              <h3>MSc in Physics · McGill University</h3>
              <p>Experimental cosmology and instrumentation for the Mapper of the IGM Spin Temperature.</p>
            </div>
          </li>
          <li>
            <span>2015—2019</span>
            <div>
              <h3>BSc in Physics · Federal University of ABC</h3>
              <p>Acoustic scattering, radiation forces, and experimental problem solving.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="outreach-section ruled-section">
        <div>
          <p className="section-kicker">Scientific community</p>
          <h2>International Physicists&apos; Tournament</h2>
        </div>
        <div>
          <p>
            As an undergraduate, I represented UFABC with the Brazilian
            delegation to the International Physicists&apos; Tournament. In 2018,
            our team became the first from outside Europe to reach the final.
            In 2023, I co-founded the first Canadian IPT team at McGill.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
