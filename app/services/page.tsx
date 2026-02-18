import { Droplets, Home, Layers, Ruler, Wind } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import FinalCTA from "../_components/CTA";

export const metadata: Metadata = {
  title: "Professional Services | Roofing, PVC & Insulation | Amos & CO.",
  description:
    "Explore our NCA-certified services including professional roofing, PVC ceiling installation, heat insulation, and gutter systems across Kenya.",
};

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
        {/* Subtle geometric overlay */}
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
          {detailedServices.map((service, index) => (
            <div
              key={index}
              id={service.title.toLowerCase().replace(/\s+/g, "-")}
              className={`flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative aspect-video md:aspect-[4/3] group overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
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

                {/* Feature Tags */}
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
                  <button className="border-b-2 border-brand-red pb-1 font-bold text-sm uppercase tracking-widest hover:text-brand-red transition-all">
                    Inquire About {service.title}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The "Technical Specs" Banner */}
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
          <button className="bg-brand-dark text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-colors">
            Request Technical Support
          </button>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
