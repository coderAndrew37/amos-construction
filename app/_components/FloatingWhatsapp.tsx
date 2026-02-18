"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "254700000000"; // Client's Kenyan number
  const prefilledMessage = encodeURIComponent(
    "Hello! I'm interested in your roofing services. Could I get more information?",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`;

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[320px] overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <MessageCircle size={20} />
                <span className="font-bold text-sm tracking-tight">
                  WhatsApp
                </span>
              </div>
              <button
                aria-label="close"
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="bg-[#F0F2F5] p-6">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative bg-white p-4 rounded-xl rounded-tl-none shadow-sm text-sm text-gray-700"
              >
                {/* Speech Bubble Arrow */}
                <div className="absolute top-0 -left-2 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent" />
                <p className="font-medium">Hello Friend 👋</p>
                <p>How can we help you today?</p>
              </motion.div>
            </div>

            {/* Footer / CTA */}
            <div className="p-4 bg-white flex justify-end">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-full flex items-center gap-3 font-bold text-sm hover:bg-[#128C7E] transition-all group"
              >
                Open chat
                <Send
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`${isOpen ? "bg-brand-dark" : "bg-[#25D366]"} text-white p-4 rounded-full shadow-2xl transition-colors duration-300`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
}
