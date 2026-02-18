"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const previewProducts = [
  {
    name: "Structural Timber",
    price: "From Ksh 85/ft",
    category: "Materials",
    image: "/images/products/timber-blue.jpg",
  },
  {
    name: "Roof Tappers",
    price: "Ksh 1,200",
    category: "Hardware",
    image: "/images/products/tappers.jpg",
  },
  {
    name: "Concrete Mixer",
    price: "Ksh 5,000/day",
    category: "Machine Hire",
    image: "/images/products/mixer.jpg",
  },
];

export default function ProductPreview() {
  return (
    <section className="py-24 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red mb-2">
              Supplies & Equipment
            </h2>
            <p className="text-4xl font-bold tracking-tighter text-brand-dark">
              Quality Materials
            </p>
          </div>
          <Link
            href="/products"
            className="text-sm font-bold border-b-2 border-brand-dark pb-1 hover:text-brand-red hover:border-brand-red transition-all"
          >
            View Full Catalog
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewProducts.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-4 shadow-sm border border-gray-100 flex flex-col group"
            >
              {/* Image Container */}
              <div className="aspect-square relative mb-6 overflow-hidden bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Subtle Brand Tag */}
                <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 text-[8px] font-bold uppercase tracking-widest text-brand-dark">
                  In Stock
                </div>
              </div>

              {/* Product Details */}
              <div className="px-2 pb-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-muted font-bold mb-2 block">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold mb-1 text-brand-dark group-hover:text-brand-red transition-colors">
                  {product.name}
                </h3>
                <p className="text-brand-muted text-sm font-medium mb-6">
                  {product.price}
                </p>

                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/254700000000?text=Hello! I'm interested in ordering ${product.name}.`,
                    )
                  }
                  className="w-full bg-brand-red text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-dark transition-all shadow-lg shadow-brand-red/10 group-hover:shadow-brand-red/20"
                >
                  Order via WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
