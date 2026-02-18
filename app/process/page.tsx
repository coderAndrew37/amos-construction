import { Metadata } from "next";
import SplitSection from "../_components/SplitSection";
import FinalCTA from "../_components/CTA";
import FAQ from "../_components/FAQ";

export const metadata: Metadata = {
  title: "Our Process | Precision Roofing & Construction | Amos & CO.",
  description:
    "Explore the Amos & CO. 5-step engineering process. From initial consultation to final inspection, we ensure quality at every peak.",
};

const processSteps = [
  {
    tagline: "Step 01",
    title: "Consultation & Structural Audit",
    description:
      "Every project begins with a deep dive. Our engineers assess your architectural plans or existing structure to determine the optimal weight load and material compatibility. We don't just quote; we consult.",
    image: "/images/process/consultation.jpg",
  },
  {
    tagline: "Step 02",
    title: "Precision Material Sourcing",
    description:
      "We select treated, high-grade timber and premium roofing sheets that meet NCA standards. For machine hire, we ensure every mixer or hoist is serviced and site-ready before it leaves our yard.",
    image: "/images/process/sourcing.jpg",
  },
  {
    tagline: "Step 03",
    title: "Structural Brandering",
    description:
      "The skeleton of your roof is its most critical part. Our team installs precision brandering and trusses designed to resist East African weather patterns, ensuring a perfectly level base for your finish.",
    image: "/images/process/brandering-step.jpg",
  },
  {
    tagline: "Step 04",
    title: "Expert Installation",
    description:
      "Our certified installers apply the final layers—whether it is decra, iron sheets, or PVC ceilings. We focus on leak-proof joints, seamless gutter integration, and proper heat insulation.",
    image: "/images/process/installation.jpg",
  },
];

export default function ProcessPage() {
  return (
    <main>
      {/* 1. Header Section */}
      <section className="bg-white pt-32 pb-20 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-4">
            The Amos & CO. Standard
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-dark max-w-4xl">
            Engineering safety into <br />
            <span className="font-light italic text-gray-400">
              every square foot.
            </span>
          </h1>
        </div>
      </section>

      {/* 2. Process Steps - Alternating Layout */}
      <section className="bg-white">
        {processSteps.map((step, index) => (
          <SplitSection
            key={index}
            tagline={step.tagline}
            title={step.title}
            description={step.description}
            buttonText="Get a Quote for this Step"
            buttonHref="/contact"
            imageSrc={step.image}
            reverse={index % 2 !== 0} // Alternates image side automatically
          />
        ))}
      </section>

      {/* 3. Quality Assurance Callout */}
      <section className="py-24 bg-brand-light px-6">
        <div className="max-w-5xl mx-auto bg-brand-dark p-12 md:p-20 text-center relative overflow-hidden">
          {/* Subtle Industrial Pattern Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/patterns/grid.svg')] bg-repeat" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Step 05: Final Inspection & Handover
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Our job isn't done until the site is clean and the roof is tested.
              We conduct a 20-point quality check to ensure every screw and
              joint meets our lifetime-durability promise.
            </p>
            <div className="inline-flex items-center gap-4 px-6 py-3 border border-brand-red text-brand-red font-bold uppercase tracking-widest text-xs">
              NCA Level 1 Certified Handover
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* 4. Final CTA */}
      <FinalCTA />
    </main>
  );
}
