"use client";
import { whatsappNumber } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const message = encodeURIComponent(
    "Hello Amos, I am interested in a free consultation for my upcoming project. Could you please provide more details?",
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* 1. Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: "url('/hero-roofing.jpg')", // High-res roofing project
        }}
      />
      {/* Dark Overlay - Gradient ensures the bottom "Stats Card" has contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-brand-dark" />

      {/* 2. Content Container */}
      <div className="relative z-20 max-w-5xl px-6 pt-20 pb-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-4">
            Part of you. From the start.
          </h2>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-white mb-6">
            Building the Peak <br />
            <span className="font-light italic text-gray-300">
              of East African Infrastructure.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed mb-10">
            Decades of cutting-edge roofing and construction manufacturing that
            has built the region’s infrastructure, households, and structures
            pivotal to economic development and quality of life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href={whatsappUrl}
            className="bg-brand-red text-white px-10 py-4 font-bold text-sm uppercase tracking-widest hover:bg-red-700 transition-all"
          >
            Start Your Project
          </a>
          <Link
            href="/products"
            className="border border-white text-white px-10 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all"
          >
            View Materials
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="p-8 border-r last:border-0 border-gray-100 hover:bg-gray-50 transition-colors group">
      <div className="text-brand-red mb-3 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <p className="text-[10px] uppercase tracking-widest text-brand-muted mb-1">
        {label}
      </p>
      <p className="text-sm font-bold text-brand-dark">{value}</p>
    </div>
  );
}
