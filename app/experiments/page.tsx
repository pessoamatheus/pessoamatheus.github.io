import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Experiments",
  description:
    "Fluorescence microscopy experiments, driven confinement protocols, and nanofabrication images from Matheus Pessôa's single-molecule nanofluidics research.",
};

const driveProtocols = [
  {
    title: "Constant voltage",
    src: "/assets/experiments/constant-voltage.mp4",
    description: "DNA confinement under a fixed applied-voltage amplitude.",
  },
  {
    title: "Noise",
    src: "/assets/experiments/noise-driven-confinement.mp4",
    description: "Molecular response to a randomly varying drive signal.",
  },
  {
    title: "Amplitude modulation",
    src: "/assets/experiments/amplitude-modulation.mp4",
    description: "Periodic modulation drives repeatable conformational changes.",
  },
  {
    title: "Stochastic landscape",
    src: "/assets/experiments/stochastic-potential-landscape.mp4",
    description: "DNA explores a stochastically driven potential landscape.",
  },
];

export default function ExperimentsPage() {
  return (
    <SiteShell active="Experiments" tone="dark">
      <section className="microscopy-intro">
        <p className="microscopy-index">03 / Experiments</p>
        <h1>Experiments in view</h1>
        <p>
          Fluorescence recordings show how individual DNA molecules respond to
          constant, periodic, and stochastic electrical drives, alongside the
          nanofluidic structures used to confine them.
        </p>
      </section>

      <article className="microscopy-entry">
        <div className="microscopy-copy">
          <p className="microscopy-number">01</p>
          <div>
            <p className="microscopy-kind">Dynamic confinement</p>
            <h2>Electrical drive protocols</h2>
            <p>
              The same nanocavity platform can impose fixed, periodic, or
              stochastic confinement. These recordings compare the molecular
              response under four representative drive protocols.
            </p>
          </div>
        </div>
        <div className="drive-gallery">
          {driveProtocols.map((protocol) => (
            <figure className="drive-card" key={protocol.title}>
              <video
                autoPlay
                controls
                loop
                muted
                playsInline
                preload="metadata"
                aria-label={`${protocol.title} DNA confinement experiment`}
              >
                <source src={protocol.src} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              <figcaption>
                <strong>{protocol.title}</strong>
                <span>{protocol.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </article>

      <article className="microscopy-entry">
        <div className="microscopy-copy">
          <p className="microscopy-number">02</p>
          <div>
            <p className="microscopy-kind">Voltage-dependent response</p>
            <h2>Increasing molecular tension</h2>
            <p>
              T4-DNA molecules span pairs of cavities. Increasing the applied
              voltage increases the electrokinetic tension and suppresses the
              fluctuations of the molecular contour between the wells.
            </p>
          </div>
        </div>
        <figure className="microscopy-figure microscopy-video-figure">
          <video
            autoPlay
            controls
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="T4-DNA tension experiment at increasing voltage"
          >
            <source
              src="/assets/microscopy/tension-increasing-voltage.mp4"
              type="video/mp4"
            />
            Your browser does not support embedded video.
          </video>
          <figcaption>
            Three molecules recorded at increasing voltage amplitude. The
            applied waveforms are shown beneath the fluorescence recordings.
          </figcaption>
        </figure>
      </article>

      <article className="microscopy-entry">
        <div className="microscopy-copy">
          <p className="microscopy-number">03</p>
          <div>
            <p className="microscopy-kind">Electron microscopy</p>
            <h2>Nanofabricated cavity arrays</h2>
            <p>
              Scanning electron micrographs show the patterned cavity arrays
              and a close view of a single cavity, where the insulating layer
              is opened to expose the ITO cavity electrode.
            </p>
          </div>
        </div>
        <figure className="microscopy-figure fabrication-figure">
          <img
            src="/assets/microscopy/nanofabrication.png"
            alt="Scanning electron micrographs of nanofabricated circular cavity arrays and a close-up of a single cavity"
          />
          <figcaption>
            Nanocavity arrays at multiple magnifications, from a single cavity
            to the extended patterned surface.
          </figcaption>
        </figure>
      </article>

      <article className="microscopy-entry microscopy-entry-last">
        <div className="microscopy-copy">
          <p className="microscopy-number">04</p>
          <div>
            <p className="microscopy-kind">Conformation library</p>
            <h2>Confined λ-DNA shapes</h2>
            <p>
              Individual λ-DNA molecules adopt a broad range of compact and
              anisotropic conformations under cavity confinement. This montage
              shows representative single-molecule observations.
            </p>
          </div>
        </div>
        <figure className="microscopy-figure conformation-figure">
          <img
            src="/assets/microscopy/lambda-dna-conformations.png"
            alt="Montage of many fluorescence microscopy images showing different confined lambda-DNA conformations"
          />
          <figcaption>
            Representative λ-DNA conformations measured in nanocavities.
          </figcaption>
        </figure>
      </article>
    </SiteShell>
  );
}
