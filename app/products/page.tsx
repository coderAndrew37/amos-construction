"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import { ShoppingCart, Search, Filter } from "lucide-react";

const categories = [
  "All",
  "Timber",
  "Roofing Sheets",
  "Hardware",
  "Machine Hire",
];

const products = [
  {
    id: 1,
    name: "Treated Cypress 2x2",
    price: "Ksh 95/ft",
    category: "Timber",
    image: "/images/products/timber-1.jpg",
    specs: ["Pressure Treated", "Grade A", "Moisture Resistance"],
  },
  {
    id: 2,
    name: "Decra Classic Tiles",
    price: "Ksh 1,450/pc",
    category: "Roofing Sheets",
    image: "/images/products/decra.jpg",
    specs: ["Steel Core", "Stone Coated", "50yr Warranty"],
  },
  {
    id: 3,
    name: "Concrete Mixer (Diesel)",
    price: "Ksh 4,500/day",
    category: "Machine Hire",
    image: "/images/products/mixer.jpg",
    specs: ["350L Capacity", "Fuel Efficient", "Operator Included"],
  },
  {
    id: 4,
    name: "Galvanized Gutter 4m",
    price: "Ksh 2,200",
    category: "Hardware",
    image: "/images/products/gutters.jpg",
    specs: ["Anti-Rust", "Seamless", "Heavy Duty"],
  },
  // Add more items here
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesCat =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleOrder = (productName: string) => {
    const msg = encodeURIComponent(
      `Hello Amos, I'd like to order: ${productName}. Please provide a quote.`,
    );
    window.open(`https://wa.me/254700000000?text=${msg}`, "_blank");
  };

  return (
    <main className="bg-[#FBFBFB] min-h-screen">
      {/* 1. Shop Header */}
      <section className="pt-32 pb-12 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-4">
              Inventory
            </h2>
            <h1 className="text-5xl font-bold tracking-tighter text-brand-dark">
              Materials & <br />
              <span className="italic font-light text-gray-400">
                Equipment.
              </span>
            </h1>
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search catalog..."
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none outline-none focus:ring-1 ring-brand-red transition-all"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* 2. Category & Grid Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto no-scrollbar gap-4 mb-12 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 whitespace-now700 text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? "bg-brand-dark text-white"
                    : "bg-white text-brand-muted border border-gray-100 hover:border-brand-red"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white group border border-gray-100 flex flex-col"
                >
                  <div className="aspect-square relative overflow-hidden bg-gray-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest mb-2">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-bold text-brand-dark mb-1">
                      {product.name}
                    </h3>
                    <p className="text-brand-muted font-bold text-sm mb-4">
                      {product.price}
                    </p>

                    <div className="space-y-2 mb-8 flex-grow">
                      {product.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-[11px] text-gray-500 uppercase font-medium"
                        >
                          <div className="w-1 h-1 bg-gray-300 rounded-full" />
                          {spec}
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => handleOrder(product.name)}
                      className="w-full py-4 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-red transition-colors"
                    >
                      <ShoppingCart size={14} />
                      Order via WhatsApp
                    </button>
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
