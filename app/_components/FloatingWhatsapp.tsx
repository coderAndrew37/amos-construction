"use client";
import { whatsappNumber } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const STEPS = [
  {
    id: "service",
    question: "What do you need help with?",
    options: [
      "Roofing Installation",
      "Timber Supply",
      "Machine Hire",
      "General Inquiry",
    ],
  },
  {
    id: "location",
    question: "Where is the site located?",
    placeholder: "e.g. Karen, Nairobi",
  },
];

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSent, setIsSent] = useState(false);
  const [answers, setAnswers] = useState({
    service: "",
    location: "",
    honeypot: "",
  });
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const lastSent = localStorage.getItem("wa_last_sent");
    if (lastSent && Date.now() - parseInt(lastSent) < 30000) {
      setIsLocked(true);
    }
  }, []);

  const handleNext = (val?: string) => {
    if (val) setAnswers({ ...answers, [STEPS[currentStep].id]: val });

    // Validation for Step 1 (Location)
    if (currentStep === 1 && !answers.location.trim() && !val) {
      return; // Stay on page if empty
    }

    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      submitToWhatsApp();
    }
  };

  const submitToWhatsApp = () => {
    if (answers.honeypot) return;
    if (isLocked) {
      alert("Please wait 30 seconds before sending another request.");
      return;
    }

    const message = encodeURIComponent(
      `Hello Amos! 👋\n\n*Inquiry Details:*\n- Service: ${answers.service}\n- Location: ${answers.location}\n\nCould I get a quote or more information?`,
    );

    localStorage.setItem("wa_last_sent", Date.now().toString());
    setIsLocked(true);
    setIsSent(true); // Trigger "Thank You" state

    // Small delay before redirecting for better UX
    setTimeout(() => {
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
      // Reset after redirect
      setTimeout(() => {
        setIsOpen(false);
        setIsSent(false);
        setCurrentStep(0);
        setAnswers({ service: "", location: "", honeypot: "" });
      }, 1000);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[340px] overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="font-bold text-sm tracking-tight">
                  Amos & Co. Support
                </span>
              </div>
              <button
                aria-label="close"
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1"
              >
                <X size={18} />
              </button>
            </div>

            {/* Form Body */}
            <div className="p-6 bg-[#F0F2F5] min-h-[250px] flex flex-col justify-center">
              <input
                aria-label="required input"
                type="text"
                className="hidden"
                value={answers.honeypot}
                onChange={(e) =>
                  setAnswers({ ...answers, honeypot: e.target.value })
                }
              />

              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.div
                    key={currentStep}
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    className="space-y-4"
                  >
                    <p className="text-xs uppercase font-bold text-gray-400 tracking-widest">
                      Question {currentStep + 1} of 2
                    </p>
                    <h3 className="text-brand-dark font-bold leading-tight">
                      {STEPS[currentStep].question}
                    </h3>

                    {STEPS[currentStep].options ? (
                      <div className="grid grid-cols-1 gap-2">
                        {STEPS[currentStep].options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleNext(opt)}
                            className="text-left p-3 text-sm bg-white border border-gray-200 rounded-lg hover:border-brand-red hover:text-brand-red transition-all shadow-sm"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <input
                          autoFocus
                          required
                          type="text"
                          placeholder={STEPS[currentStep].placeholder}
                          className="w-full p-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-brand-red shadow-inner"
                          onKeyDown={(e) => e.key === "Enter" && handleNext()}
                          onChange={(e) =>
                            setAnswers({ ...answers, location: e.target.value })
                          }
                        />
                        <button
                          disabled={!answers.location.trim()}
                          onClick={() => handleNext()}
                          className="w-full bg-brand-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                        >
                          Finish & Send <Send size={14} />
                        </button>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center space-y-4"
                  >
                    <div className="flex justify-center">
                      <CheckCircle2 size={48} className="text-[#25D366]" />
                    </div>
                    <h3 className="text-brand-dark font-bold text-xl">
                      Details Saved!
                    </h3>
                    <p className="text-sm text-gray-600">
                      Opening WhatsApp to complete your inquiry...
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${isOpen ? "bg-brand-dark" : "bg-[#25D366]"} text-white p-4 rounded-full shadow-2xl transition-all flex items-center gap-2 group`}
      >
        {!isOpen && (
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold text-sm whitespace-nowrap pl-2">
            Chat with Amos
          </span>
        )}
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
}
