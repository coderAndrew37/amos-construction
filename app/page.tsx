import { Metadata } from "next";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Stats from "./_components/Stats";
import ServicesGrid from "./_components/ServicesGrid";
import ProductPreview from "./_components/ProductPreview";
import SplitSection from "./_components/SplitSection";
import WhyChooseUs from "./_components/WhyChooseUs";
import GallerySlider from "./_components/GallerySlider";
import Footer from "./_components/Footer";
import FinalCTA from "./_components/CTA";
import FAQ from "./_components/FAQ";

// SEO Implementation
export const metadata: Metadata = {
  title: "Bamburi Group | Premium Roofing & Construction Materials Kenya",
  description:
    "Kenya's leading provider of professional roofing services, PVC installation, heat insulation, and construction materials including timber and machine hire.",
  keywords: [
    "Roofing Kenya",
    "Timber Supply Nairobi",
    "Construction Machine Hire",
    "PVC Installation",
    "Bamburi Group",
  ],
  openGraph: {
    title: "Bamburi Group | Excellence in Construction",
    description:
      "Professional roofing and high-quality construction materials in Kenya.",
    images: ["/og-image.jpg"], // Ensure you have this in your public folder
  },
};

export default function Home() {
  return (
    <main className="relative">
      {/* 1. Hero - The "Hook" */}
      <Hero />

      {/* 2. Stats - Immediate Trust Signals */}
      <Stats />

      {/* 3. About Us - Split Section (Image Left) */}
      <SplitSection
        tagline="Who We Are"
        title="Decades of Integrity in Kenyan Construction"
        description="Bamburi Group is dedicated to providing superior roofing solutions and high-quality building materials. Our commitment to precision ensures that every structure we touch stands the test of time and weather."
        buttonText="Learn Our Story"
        buttonHref="/about"
        imageSrc="/images/about-construction.jpg"
        reverse={false}
      />

      {/* 4. Services - Bento Grid */}
      <ServicesGrid />

      {/* 5. Why Choose Us - The Dark Minimalist Contrast */}
      <WhyChooseUs />

      {/* 6. The Process - Split Section (Image Right) */}
      <SplitSection
        tagline="Our Method"
        title="Seamless Execution From Plan to Peak"
        description="We follow a rigorous five-step process: Consultation, Material Selection, Structural Brandering, Precision Installation, and Final Inspection. We don't just build roofs; we engineer safety."
        buttonText="View Our Process"
        buttonHref="/process"
        imageSrc="/images/roofing-process.jpg"
        reverse={true}
      />

      <FinalCTA />

      {/* 7. Product Preview - Materials & Machine Hire */}
      <ProductPreview />

      {/* 8. Recent Work - Gallery Slider */}
      <GallerySlider />

      <FAQ />

      {/* 9. Final Call to Action */}
      <FinalCTA />
      {/* <section className="py-24 text-center bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Ready to secure your structure with the best in the industry?
          </h2>
          <button className="bg-brand-red text-white px-12 py-4 font-bold uppercase tracking-widest text-sm hover:bg-red-700 transition-colors">
            Get Free Consultation
          </button>
        </div>
      </section> */}
    </main>
  );
}
