"use client";
import { useEffect } from "react";
import { RefreshCcw, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="max-w-md text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-50 rounded-full text-brand-red">
            <AlertTriangle size={48} />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-brand-dark mb-4 tracking-tight">
          System Interruption
        </h2>
        <p className="text-brand-muted mb-8 leading-relaxed">
          A technical error occurred while rendering this section. Our team has
          been notified.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-brand-red transition-all"
        >
          <RefreshCcw size={16} />
          Try Again
        </button>
      </div>
    </div>
  );
}
