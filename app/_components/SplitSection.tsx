"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Next.js Image optimization

interface SplitSectionProps {
  title: string;
  tagline: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string; // Ensure these paths are in your /public folder
  reverse?: boolean;
}

export default function SplitSection({
  title,
  tagline,
  description,
  buttonText,
  buttonHref,
  imageSrc,
  reverse,
}: SplitSectionProps) {
  return (
    <section className="py-24 px-6 overflow-hidden bg-white">
      <div
        className={`max-w-7xl mx-auto flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-16`}
      >
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 aspect-[4/3] relative group"
        >
          {/* Decorative Border for Minimalism */}
          <div className="absolute -inset-4 border border-gray-100 -z-10 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />

          <div className="relative w-full h-full overflow-hidden shadow-2xl">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
            {/* Subtle Overlay to match brand depth */}
            <div className="absolute inset-0 bg-brand-dark/5 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-brand-red" />
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              {tagline}
            </h4>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-dark leading-tight">
            {title}
          </h2>

          <p className="text-brand-muted leading-relaxed text-lg max-w-xl">
            {description}
          </p>

          <div className="pt-4">
            <Link
              href={buttonHref}
              className="group inline-flex items-center gap-3 font-bold text-sm uppercase tracking-widest text-brand-dark hover:text-brand-red transition-all"
            >
              <span className="border-b-2 border-brand-red pb-1">
                {buttonText}
              </span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-brand-red"
              >
                →
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
