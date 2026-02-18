"use client";
import { whatsappNumber } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FinalCTA() {
  const message = encodeURIComponent(
    "Hello Amos, I am interested in a free consultation for my upcoming project. Could you please provide more details?",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="relative py-32 text-center overflow-hidden bg-brand-dark">
      {/* Background Image with heavy overlay */}
      <Image
        src="/images/cta-background.jpg"
        alt="Construction background"
        fill
        className="object-cover opacity-20 grayscale"
        priority
      />

      {/* Vignette Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-transparent to-brand-dark/50" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-8 leading-tight">
            Ready to secure your structure with the best in the industry?
          </h2>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-brand-red text-white px-12 py-5 font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-red-700 transition-all active:ring-2"
          >
            Get Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
