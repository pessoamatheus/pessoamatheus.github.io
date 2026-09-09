import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Publications",
  description: "Selected publications and theses by Matheus Pessôa.",
};

const publications = [
  {
    year: "2026",
    entries: [
      {
        title: "DNA Dynamics in Dual-Nanopore Tug-of-War",
        authors: "Z. Liu, W. Dong, T. St-Denis, M. A. S. Pessôa, et al.",
        venue: "Macromolecules 59 (7), 4268–4278",
        href: "https://pubs.acs.org/doi/10.1021/acs.macromol.5c02380",
      },
      {
        title: "Electrokinetic active grooves for liposome capture, confinement, trajectory analysis and controlled release",
        authors: "P. Ravikumar, M. A. S. Pessôa, et al.",
        venue: "Manuscript under review",
      },
    ],
  },
  {
    year: "2025",
    entries: [
      {
        title: "Single-molecule capture, release, and dynamical manipulation via reversible electrokinetic confinement (RECON)",
        authors: "M. A. S. Pessôa, P. Jakuc, C. Martins e Queiroz, N. Duggan, R. Liu, S. Kautz, et al.",
        venue: "Science Advances 11 (38), eadv8863",
        href: "https://www.science.org/doi/10.1126/sciadv.adv8863",
        featured: true,
      },
      {
        title: "Proteoliposomes on 2D-MoS₂ plasmonic nanocavities for enhanced Raman spectroscopy with machine learning-based identification and classification",
        authors: "S. Shiekh, Y. Zhou, et al., M. A. S. Pessôa, et al.",
        venue: "npj 2D Materials and Applications 9",
        href: "https://www.nature.com/articles/s41699-025-00636-3",
      },
    ],
  },
  {
    year: "2024",
    entries: [
      {
        title: "Assessing Students’ Understanding of Uncertainty in Undergraduate Physics Laboratory Courses at a Major Canadian University",
        authors: "M. A. S. Pessôa, R. Brosseau, B. J. Dringoli, A. Yazdani, J. Sankey, T. Brunner, et al.",
        venue: "arXiv:2412.15382",
        href: "https://arxiv.org/abs/2412.15382",
      },
      {
        title: "Mapper of the IGM Spin Temperature: Instrument Overview",
        authors: "R. A. Monsalve, C. Altamirano, V. Bidula, R. Bustos, C. H. Bye, H. C. Chiang, M. A. S. Pessôa, et al.",
        venue: "Monthly Notices of the Royal Astronomical Society 530 (4), 4125–4147",
        href: "https://academic.oup.com/mnras/article/530/4/4125/7659372",
      },
      {
        title: "Experimental Validation of the Brachistochrone Curve",
        authors: "M. A. S. Pessôa, J. Kljunak, E. Zhivaljevikj, M. Smilevska",
        venue: "Physics Education 59 (3), 035008",
        href: "https://doi.org/10.1088/1361-6552/ad2cf3",
      },
      {
        title: "Tunable Nanofluidic Device for Digital Nucleic Acid Analysis",
        authors: "I. I. Hosseini, S. V. Hamidi, X. Capaldi, Z. Liu, M. A. S. Pessôa, S. Mahshid, et al.",
        venue: "Nanoscale 16 (19), 9583–9592",
        href: "https://pubs.rsc.org/en/content/articlelanding/2024/nr/d3nr05553a",
      },
    ],
  },
  {
    year: "2022–2018",
    entries: [
      {
        title: "3-D Acoustic Trapping with Standing Waves",
        authors: "M. A. S. Pessôa, A. A. R. Neves",
        venue: "arXiv:2204.08093 (2022)",
        href: "https://arxiv.org/abs/2204.08093",
      },
      {
        title: "The Physics of a Disinfector With UV–C Radiation",
        authors: "M. A. S. Pessôa, F. M. Silva, M. P. Lima Jr, G. Galhardo, P. H. M. Olyntho, et al.",
        venue: "Revista Brasileira de Ensino de Física 43, e20210217 (2021)",
      },
      {
        title: "Acoustic Scattering and Forces on an Arbitrarily Sized Fluid Sphere by a General Acoustic Field",
        authors: "M. A. S. Pessôa, A. A. R. Neves",
        venue: "Journal of Sound and Vibration 479, 115373 (2020)",
        href: "https://doi.org/10.1016/j.jsv.2020.115373",
      },
      {
        title: "The Screaming Balloon: Predicting the Sound Produced by a Hex Nut Inside a Balloon",
        authors: "H. Ferreira, M. Pessôa, R. R. Gitti, A. J. Ferreira-Martins, G. de Souza, et al.",
        venue: "Emergent Scientist 3, 7 (2019)",
      },
      {
        title: "Method to Mix Tea With Honey and Use of Transient Light Attenuation as an Indicator of Homogeneity",
        authors: "H. Ferreira, R. R. Gitti, A. J. Ferreira-Martins, M. Pessôa, P. R. Sardelich, et al.",
        venue: "Emergent Scientist 2 (2) (2018)",
      },
    ],
  },
];

export default function PublicationsPage() {
  return (
    <SiteShell active="Publications">
      <PageIntro index="02" title="Publications">
        Work spanning nanofluidics, single-molecule biophysics, instrumentation,
        acoustics, and physics education.
      </PageIntro>

      <div className="profile-link-bar">
        <a href="https://scholar.google.ca/citations?hl=en&user=o5FQpCsAAAAJ" target="_blank" rel="noreferrer">Google Scholar <span aria-hidden="true">↗</span></a>
        <a href="https://orcid.org/0000-0003-3733-3127" target="_blank" rel="noreferrer">ORCID <span aria-hidden="true">↗</span></a>
        <a href="https://drive.google.com/file/d/1yNnpHQnO6-QXI1WoeMcmy_E6zaQ2yhCq/view?usp=sharing" target="_blank" rel="noreferrer">Curriculum vitae <span aria-hidden="true">↗</span></a>
      </div>

      <div className="publication-years ruled-section">
        {publications.map((group) => (
          <section className="publication-year-group" key={group.year}>
            <h2>{group.year}</h2>
            <ol>
              {group.entries.map((entry) => (
                <li key={entry.title} className={("featured" in entry && entry.featured) ? "featured-publication" : undefined}>
                  {("featured" in entry && entry.featured) && <span className="feature-label">Featured</span>}
                  {entry.href ? (
                    <a href={entry.href} target="_blank" rel="noreferrer" className="publication-title">
                      {entry.title} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="publication-title">{entry.title}</span>
                  )}
                  <p className="publication-authors">{entry.authors}</p>
                  <p className="publication-venue">{entry.venue}</p>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <section className="theses ruled-section">
        <p className="section-kicker">Theses</p>
        <div className="thesis-grid">
          <div>
            <span>Master&apos;s thesis</span>
            <h3>Development and testing of antenna and subsystems for MIST</h3>
            <p>A 21-cm global-signal experiment to study the Cosmic Dawn epoch of the Universe.</p>
            <a href="https://www.proquest.com/docview/2653277945" target="_blank" rel="noreferrer">View thesis <span aria-hidden="true">↗</span></a>
          </div>
          <div>
            <span>Undergraduate thesis</span>
            <h3>Acoustic scattering and forces on an arbitrarily sized fluid sphere</h3>
            <p>A theoretical and experimental treatment of acoustic radiation forces.</p>
            <a href="https://doi.org/10.1016/j.jsv.2020.115373" target="_blank" rel="noreferrer">View publication <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
