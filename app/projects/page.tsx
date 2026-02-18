"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const categories = ["All", "Residential", "Commercial", "PVC & Interiors"];

const projects = [
  {
    id: 1,
    title: "Modern Villa Roofing",
    category: "Residential",
    src: "/images/gallery/res-1.jpg",
  },
  {
    id: 2,
    title: "Residential Roofing Revovation, Moi's Bridge",
    category: "Commercial",
    src: "/images/gallery/res-4.jpg",
  },
  {
    id: 3,
    title: "Premium PVC Ceiling",
    category: "PVC & Interiors",
    src: "/images/gallery/pvc-1.jpg",
  },
  {
    id: 4,
    title: "Residential Development",
    category: "Residential",
    src: "/images/gallery/res-2.jpg",
  },
  {
    id: 5,
    title: "Tuala Rongai tng Ceiling",
    category: "Commercial",
    src: "/images/gallery/com-2.jpg",
  },
  {
    id: 6,
    title: "Residential Roofing Finish",
    category: "Residential",
    src: "/images/gallery/res-5.jpg",
  },
  {
    id: 7,
    title: "Residential Roofing Githura, Nyeri county ",
    category: "Residential",
    src: "/images/gallery/res-3.jpg",
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="bg-white min-h-screen">
      {/* 1. Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto border-b border-gray-100 pb-12">
          <h2 className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-4">
            Our Portfolio
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-dark mb-8">
            Built to{" "}
            <span className="font-light italic text-gray-400">last.</span>
          </h1>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-6 md:gap-12 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm font-bold uppercase tracking-widest pb-2 transition-all border-b-2 ${
                  filter === cat
                    ? "border-brand-red text-brand-dark"
                    : "border-transparent text-gray-400 hover:text-brand-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Gallery Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-[4/5] bg-gray-100 overflow-hidden"
                >
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />

                  {/* Overlay Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <p className="text-brand-red text-[10px] font-bold uppercase tracking-widest mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-white text-xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
