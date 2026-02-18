"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white text-center">
      <div className="max-w-md">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[120px] font-bold tracking-tighter text-gray-100 leading-none"
        >
          404
        </motion.h1>
        <div className="relative -mt-10">
          <h2 className="text-3xl font-bold text-brand-dark mb-4 tracking-tight">
            Structure Not Found
          </h2>
          <p className="text-brand-muted mb-8 leading-relaxed">
            The page you are looking for has been moved or hasn't been built
            yet. Let's get you back to solid ground.
          </p>
          <Link
            href="/"
            className="inline-block bg-brand-red text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-brand-dark transition-all shadow-xl shadow-brand-red/20"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
