"use client"; // Note: Metadata must be moved to a separate layout or handled via a wrapper for 'use client' pages
import { Droplets, Home, Layers, Ruler, Wind } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { whatsappNumber } from "@/lib/constants";
import FinalCTA from "../_components/CTA";

const detailedServices = [
  {
    title: "Roofing & Renovation",
    icon: <Home size={32} />,
    desc: "From new builds to complete overhauls, we specialize in Decra, Iron Sheets, and Shingle installations with a focus on structural longevity.",
    features: [
      "Structural Assessment",
      "Truss Fabrication",
      "Leak Proofing",
      "Refurbishment",
    ],
    image: "/images/services/roofing-detail.jpg",
  },
  {
    title: "PVC Ceiling Installation",
    icon: <Layers size={32} />,
    desc: "Premium interior finishing using high-durability PVC panels. We offer diverse patterns that provide aesthetic value and moisture resistance.",
    features: [
      "Custom Patterning",
      "Moisture Resistance",
      "Brandering Support",
      "Clean Finishing",
    ],
    image: "/images/services/pvc-detail.jpg",
  },
  {
    title: "Heat Insulation",
    icon: <Wind size={32} />,
    desc: "Optimize your building's climate. We install high-grade glass wool and reflective foil to reduce interior temperatures by up to 10°C.",
    features: [
      "Glass Wool Lining",
      "Reflective Foil",
      "Energy Efficiency",
      "Acoustic Dampening",
    ],
    image: "/images/services/insulation-detail.jpg",
  },
  {
    title: "Gutter & Drainage",
    icon: <Droplets size={32} />,
    desc: "Engineered water management systems to protect your foundation and walls from rainwater damage using seamless PVC or galvanized steel.",
    features: [
      "Seamless Design",
      "High Capacity",
      "Leaf Guards",
      "Precision Slope",
    ],
    image: "/images/services/gutter-detail.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* 1. Page Header */}
      <section className="bg-brand-dark pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/patterns/topography.svg')] bg-cover" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-4">
            Our Expertise
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white max-w-4xl">
            Total Building <br />
            <span className="font-light italic text-gray-400">
              Protection Solutions.
            </span>
          </h1>
        </div>
      </section>

      {/* 2. Detailed Service Sections */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {detailedServices.map((service, index) => {
            // Dynamic message for each specific service
            const msg = encodeURIComponent(
              `Hello Amos, I'm interested in a consultation for ${service.title}. I saw this on your website.`,
            );
            const waUrl = `https://wa.me/${whatsappNumber}?text=${msg}`;

            return (
              <div
                key={index}
                id={service.title.toLowerCase().replace(/\s+/g, "-")}
                className={`flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 lg:gap-20 items-center scroll-mt-32`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 relative aspect-video md:aspect-[4/3] group overflow-hidden bg-gray-100 shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="text-brand-red mb-4 inline-block p-3 bg-gray-50 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">
                    {service.title}
                  </h3>
                  <p className="text-brand-muted text-lg leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand-red rounded-full" />
                        <span className="text-sm font-bold text-brand-dark uppercase tracking-wider">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8">
                    <motion.a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 10 }}
                      className="inline-flex items-center gap-3 border-b-2 border-brand-red pb-1 font-bold text-sm uppercase tracking-widest text-brand-dark hover:text-brand-red transition-all cursor-pointer"
                    >
                      Inquire About {service.title}
                    </motion.a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Technical Specs Banner */}
      <section className="py-16 bg-gray-50 border-y border-gray-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <Ruler size={48} className="text-gray-300" />
            <div>
              <p className="text-xl font-bold text-brand-dark tracking-tight">
                Need a custom technical drawing?
              </p>
              <p className="text-brand-muted">
                Our engineers can assist with your structural layouts.
              </p>
            </div>
          </div>
          <motion.a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I need technical support/drawings for my construction project.")}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-dark text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-colors"
          >
            Request Technical Support
          </motion.a>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
