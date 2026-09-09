import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Research",
  description: "Research by Matheus Pessôa in nanofluidics, electrokinetic confinement, and driven single-molecule dynamics.",
};

export default function ResearchPage() {
  return (
    <SiteShell active="Research">
      <PageIntro index="01" title="Research">
        Nanofluidic tools for observing and controlling the conformation,
        position, and dynamics of individual biomolecules.
      </PageIntro>

      <article className="research-feature ruled-section">
        <div className="research-number">01</div>
        <div className="research-copy">
          <p className="section-kicker">Platform development</p>
          <h2>Reversible electrokinetic confinement</h2>
          <p className="research-lede">
            RECON uses patterned dielectric nanowells between parallel
            electrodes to create localized, electrically tunable free-energy
            landscapes.
          </p>
          <p>
            DNA begins in bulk solution. When an alternating field is applied,
            the nanowells act as attractive potential wells that capture and
            confine the molecule. Removing the field releases it. Changing the
            frequency and amplitude of the drive changes the strength and
            dynamics of confinement without mechanically closing the device.
          </p>
          <dl className="research-facts">
            <div><dt>Systems</dt><dd>λ-DNA, T4-DNA, liposomes, DNA nanotubes</dd></div>
            <div><dt>Control</dt><dd>Frequency, amplitude, waveform, time</dd></div>
            <div><dt>Readout</dt><dd>Single-molecule fluorescence microscopy</dd></div>
          </dl>
        </div>
        <figure className="research-image wide-figure">
          <img src="/assets/recon-device.jpg" alt="Three-stage schematic of free, confined, and released DNA in the RECON nanofluidic device" />
          <figcaption>Capture, confinement, and release in the RECON device.</figcaption>
        </figure>
      </article>

      <article className="research-feature ruled-section reverse">
        <div className="research-number">02</div>
        <div className="research-copy">
          <p className="section-kicker">Non-equilibrium biophysics</p>
          <h2>Driven polymer conformations</h2>
          <p className="research-lede">
            A time-dependent confinement landscape turns a single DNA molecule
            into a directly observable non-equilibrium system.
          </p>
          <p>
            We apply periodic and stochastic waveforms and quantify the response
            through the radius-of-gyration tensor, shape anisotropy, relaxation,
            phase lag, and hysteresis. Experiments are compared with molecular
            simulations to identify which modes of the polymer are being driven
            and where simplified descriptions break down.
          </p>
          <ul className="plain-list">
            <li>Frequency-dependent conformational response</li>
            <li>Hysteresis in major- and minor-axis dynamics</li>
            <li>Experiment–simulation comparisons</li>
            <li>Stochastic transitions between nanocavities</li>
          </ul>
        </div>
        <figure className="research-image motion-figure">
          <img
            src="/assets/stochastic-dna-transitions.gif"
            alt="Animated fluorescence microscopy and plots showing DNA transitions between nanocavities under a stochastic voltage waveform"
          />
          <figcaption>
            Stochastic driving produces transitions between neighboring
            cavities while the DNA executes Brownian motion.
          </figcaption>
        </figure>
      </article>

      <article className="research-feature ruled-section text-only">
        <div className="research-number">03</div>
        <div className="research-copy">
          <p className="section-kicker">Broader applications</p>
          <h2>Nanofluidic analysis across molecular systems</h2>
          <p className="research-lede">
            Tunable fields and nanoscale structures provide a common language
            for studying polymers, membranes, and molecular assemblies.
          </p>
          <p>
            Related work includes digital nucleic-acid analysis, dual-nanopore
            DNA dynamics, electrokinetic liposome confinement, and plasmonic
            nanocavities for Raman-based characterization. The unifying goal is
            to build physical tools that preserve single-particle information
            while making molecular states measurable and controllable.
          </p>
        </div>
        <blockquote>
          <span>Research aim</span>
          Build experimental systems in which molecular dynamics are not only
          observed, but deliberately programmed.
        </blockquote>
      </article>
    </SiteShell>
  );
}
