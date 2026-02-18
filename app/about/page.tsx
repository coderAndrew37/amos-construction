import { Metadata } from "next";
import Image from "next/image";
import FinalCTA from "../_components/CTA";
import FAQ from "../_components/FAQ";
import SplitSection from "../_components/SplitSection";
import Stats from "../_components/Stats";
import WhyChooseUs from "../_components/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us | Amos & CO. | Roofing & Construction Kenya",
  description:
    "Learn about Amos & CO.'s legacy in providing top-tier roofing solutions and construction materials across East Africa.",
};

export default function AboutPage() {
  return (
    <main>
      {/* 1. Page Header */}
      <section className="bg-brand-dark pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            Building the Future <br />
            <span className="font-light italic text-gray-400">
              on a Foundation of Integrity.
            </span>
          </h1>
          <div className="h-1 w-24 bg-brand-red mx-auto" />
        </div>
      </section>

      {/* 2. Detailed Mission - Split Section */}
      <SplitSection
        tagline="Our Vision"
        title="To be the standard-bearer of quality in East Africa."
        description="For over 70 years, we have evolved from a local material supplier to a regional leader in roofing and construction technology. We believe that every roof we install and every piece of timber we supply is a commitment to the family or business sheltered beneath it."
        buttonText="View Our Services"
        buttonHref="/services"
        imageSrc="/images/about-construction.jpg"
        reverse={false}
      />

      {/* 3. Legacy & Impact Stats */}
      <section className="bg-brand-light">
        <Stats />
      </section>

      {/* 4. Core Values - Why Choose Us */}
      <WhyChooseUs />

      {/* 5. The "Legacy" Section - Full Width Image with Text */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/legacy-roof.jpg"
          alt="Legacy Construction"
          fill
          className="object-cover grayscale opacity-30"
        />
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-dark mb-6">
            Part of you. From the start.
          </h2>
          <p className="text-lg text-brand-muted leading-relaxed">
            Our materials aren't just components; they are the skeletons of the
            schools, hospitals, and homes that drive our economy forward. We
            take that responsibility seriously, ensuring every batch is tested
            and every installation is verified.
          </p>
        </div>
      </section>
      <FAQ />
      <FinalCTA />
    </main>
  );
}
