"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Roofing & Renovation",
    description:
      "Expert roofing solutions for residential and commercial projects.",
    size: "md:col-span-2 md:row-span-2",
    image: "/images/services/roofing-main.jpg",
    textColor: "text-white",
  },
  {
    title: "PVC Installation",
    description: "Durable and aesthetic PVC ceiling solutions.",
    size: "md:col-span-1 md:row-span-1",
    image: "/images/services/pvc.jpg",
    textColor: "text-white",
  },
  {
    title: "Heat Insulation",
    description: "Energy-efficient cooling for your interior.",
    size: "md:col-span-1 md:row-span-1",
    image: "/images/services/insulation.jpg",
    textColor: "text-white",
  },
  {
    title: "Gutter Systems",
    description: "Precision-fit drainage to protect your foundation.",
    size: "md:col-span-1 md:row-span-1",
    image: "/images/services/gutters.jpg",
    textColor: "text-white",
  },
  {
    title: "Brandering",
    description: "Strong structural support for your ceilings.",
    size: "md:col-span-2 md:row-span-1",
    image: "/images/services/brandering.jpg",
    textColor: "text-white",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-2">
            Our Expertise
          </h2>
          <p className="text-4xl font-bold tracking-tighter text-brand-dark">
            Comprehensive Roofing & Construction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`${service.size} group relative overflow-hidden cursor-pointer flex flex-col justify-end p-8`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                />
                {/* Minimalist Overlay: 
                   Black gradient ensures text is always readable regardless of image brightness.
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              </div>

              {/* Content */}
              <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className={`text-xl font-bold mb-2 ${service.textColor}`}>
                  {service.title}
                </h3>
                <p
                  className={`text-sm opacity-80 max-w-[280px] leading-relaxed ${service.textColor}`}
                >
                  {service.description}
                </p>
              </div>

              {/* Red Accent Bar (Bottom) */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-red translate-y-full transition-transform duration-300 group-hover:translate-y-0" />

              {/* Subtle Red Edge Accent (Top-Left) */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-brand-red transition-all duration-300 group-hover:h-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
