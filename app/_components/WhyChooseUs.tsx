"use client";
import { motion } from "framer-motion";
import { Leaf, Lightbulb, Users, Award } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    title: "Eco-Friendly & Sustainable",
    desc: "Cutting-edge technology for efficient, durable, and sustainable roofing construction.",
    icon: <Leaf className="text-brand-red" size={24} />,
  },
  {
    title: "Modern Innovative Solutions",
    desc: "Expert consultation and tailored construction solutions for modern Kenyan homes.",
    icon: <Lightbulb className="text-brand-red" size={24} />,
  },
  {
    title: "Technical Support & Expertise",
    desc: "Our technical team provides on-site brandering and installation guidance.",
    icon: <Users className="text-brand-red" size={24} />,
  },
  {
    title: "Strong Industry Reputation",
    desc: "NCA Certified and a trusted leader in quality roofing and material supply.",
    icon: <Award className="text-brand-red" size={24} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-brand-dark mb-2">
            Why Choose Bamburi Group?
          </h2>
          <p className="text-lg text-brand-muted">
            Committed to quality, innovation and sustainability
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-2/3">
            {reasons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-gray-100 rounded-xl bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 flex flex-col gap-4 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-brand-red/5 transition-colors">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-red transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: The Quality Seal Anchor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/3 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* This would be your 'Premium Quality' badge image */}
              <Image
                src="/quality-seal.jpg"
                alt="Premium Quality Seal"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
