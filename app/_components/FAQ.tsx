"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "Do you offer countrywide delivery for materials?",
    answer:
      "Yes, we have a dedicated logistics fleet that delivers timber, tappers, and hired machinery across East Africa, ensuring your project stays on schedule regardless of location.",
  },
  {
    question: "Are your roofing materials NCA certified?",
    answer:
      "Absolutely. All our roofing products and installation processes comply with the National Construction Authority (NCA) standards, ensuring structural integrity and safety.",
  },
  {
    question: "What is the typical timeline for a roof renovation?",
    answer:
      "Most residential renovations take between 5 to 10 working days, depending on the complexity and size of the structure. We provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you provide on-site technical support for brandering?",
    answer:
      "Yes, our technical team is available to visit your site to provide guidance on structural brandering and PVC installation to ensure the best finish.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Image (Hidden on Mobile, or top-aligned) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] hidden lg:block overflow-hidden"
          >
            <Image
              src="/images/faq-support.jpg" // Image of a consultant or technical detail
              alt="Technical Support"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply" />
          </motion.div>

          {/* Right Column: Content & Accordion */}
          <div className="w-full">
            <div className="mb-12">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red mb-4">
                Got Questions?
              </h2>
              <h3 className="text-4xl font-bold tracking-tighter text-brand-dark mb-6">
                Frequently Asked Questions
              </h3>
              <p className="text-brand-muted max-w-lg">
                Everything you need to know about our roofing services, material
                supply, and equipment hire.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100">
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className="w-full py-6 flex justify-between items-center text-left group"
                  >
                    <span
                      className={`text-lg font-bold transition-colors ${activeIndex === index ? "text-brand-red" : "text-brand-dark group-hover:text-brand-red"}`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`p-1 rounded-full border transition-all ${activeIndex === index ? "bg-brand-red border-brand-red text-white rotate-180" : "border-gray-200 text-brand-dark"}`}
                    >
                      {activeIndex === index ? (
                        <Minus size={16} />
                      ) : (
                        <Plus size={16} />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-brand-muted leading-relaxed max-w-xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="bg-brand-red text-white px-12 py-5 font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-red-700 transition-all"
              >
                Still not answered? Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
