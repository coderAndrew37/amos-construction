"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Animated Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="absolute inset-0 border-t-2 border-brand-red rounded-full"
        />
        {/* Logo Mark */}
        <span className="text-xs font-bold uppercase tracking-tighter">
          B<span className="text-brand-red">G</span>
        </span>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-6 text-[10px] uppercase font-bold tracking-[0.3em] text-brand-muted"
      >
        Initializing Structural Data
      </motion.p>
    </div>
  );
}
