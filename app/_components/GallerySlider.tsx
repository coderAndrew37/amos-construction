"use client";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: 1,
    src: "/images/projects/roof-1.jpg",
    title: "Residential Estate, Karen",
  },
  {
    id: 2,
    src: "/images/projects/roof-2.jpg",
    title: "Warehouse Facility, Mombasa",
  },
  {
    id: 3,
    src: "/images/projects/roof-3.jpg",
    title: "Commercial Hub, Westlands",
  },
  {
    id: 4,
    src: "/images/projects/roof-4.jpg",
    title: "Luxury Villa, Muthaiga",
  },
  {
    id: 5,
    src: "/images/projects/roof-5.jpg",
    title: "Industrial Park, Thika",
  },
];

export default function GallerySlider() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollX = useMotionValue(0);

  // Create a seamless loop by doubling the array
  const duplicatedProjects = [...projects, ...projects];

  // Auto-scroll logic using Framer Motion's useAnimationFrame
  useAnimationFrame((t, delta) => {
    if (isHovered) return;

    // Slow, professional crawl (adjust -0.5 to change speed)
    const moveBy = -0.5;
    let newValue = scrollX.get() + moveBy;

    // Reset when half the list has passed to create the infinite loop
    // Assumes each card is roughly 450px + 16px gap
    if (newValue <= -((450 + 16) * projects.length)) {
      newValue = 0;
    }

    scrollX.set(newValue);
  });

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red mb-2">
            Portfolio
          </h2>
          <p className="text-4xl font-bold tracking-tighter text-brand-dark">
            Recent Projects
          </p>
        </div>
        <Link
          href="/gallery"
          className="group flex items-center gap-2 text-sm font-bold border-b-2 border-brand-dark pb-1 hover:text-brand-red hover:border-brand-red transition-all"
        >
          View Full Gallery
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </div>

      {/* Auto-Scrolling Container */}
      <motion.div
        className="flex gap-4 cursor-grab active:cursor-grabbing"
        style={{ x: scrollX }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {duplicatedProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="min-w-[300px] md:min-w-[450px] aspect-[16/10] relative group overflow-hidden bg-gray-100 shadow-sm"
          >
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 300px, 450px"
            />

            {/* Minimalist Caption Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white text-sm font-medium tracking-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {project.title}
              </p>
            </div>

            {/* Subtle Red Corner Accent */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[15px] border-r-[15px] border-t-transparent border-r-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
