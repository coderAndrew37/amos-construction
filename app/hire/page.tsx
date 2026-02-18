import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Machine Hire | Construction Equipment | Amos & CO.",
  description:
    "Professional construction machinery for hire in Nairobi. High-capacity mixers, hoists, and scaffolding with expert operators.",
};

const machines = [
  {
    name: "Heavy Duty Concrete Mixer",
    rate: "Ksh 5,500 / Day",
    specs: [
      "350L Batch Capacity",
      "Diesel Powered",
      "Operator Included",
      "On-site Maintenance",
    ],
    image: "/images/hire/mixer.jpg",
  },
  {
    name: "Structural Scaffolding",
    rate: "Ksh 150 / Set / Day",
    specs: [
      "H-Frame Design",
      "High-Reach Stability",
      "NCA Safety Verified",
      "Delivery Available",
    ],
    image: "/images/hire/scaffolding.jpg",
  },
  {
    name: "Electric Material Hoist",
    rate: "Ksh 8,000 / Day",
    specs: [
      "500KG Lift Capacity",
      "50M Vertical Reach",
      "Emergency Stop System",
      "Daily Safety Check",
    ],
    image: "/images/hire/hoist.jpg",
  },
];

export default function HirePage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-brand-dark pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-4">
            Equipment Fleet
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Reliable Power <br />{" "}
            <span className="font-light italic text-gray-400">
              for every site.
            </span>
          </h1>
        </div>
      </section>

      {/* Hire Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {machines.map((machine, i) => (
            <div key={i} className="group border border-gray-100 flex flex-col">
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-50">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-brand-dark tracking-tight">
                  {machine.name}
                </h3>
                <div className="bg-gray-50 p-4 border-l-4 border-brand-red">
                  <p className="text-xs uppercase font-bold text-brand-muted tracking-widest mb-1">
                    Daily Rate
                  </p>
                  <p className="text-xl font-bold text-brand-red">
                    {machine.rate}
                  </p>
                </div>
                <div className="space-y-3">
                  {machine.specs.map((spec, s) => (
                    <div
                      key={s}
                      className="flex items-center gap-2 text-sm text-brand-muted font-medium uppercase tracking-tight"
                    >
                      <CheckCircle2 size={16} className="text-brand-red" />{" "}
                      {spec}
                    </div>
                  ))}
                </div>
                <button className="w-full bg-brand-dark text-white py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-brand-red transition-all">
                  Book This Machine
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6 border-y border-gray-100">
        <div className="max-w-3xl mx-auto flex items-start gap-4 text-brand-muted">
          <AlertCircle className="shrink-0 text-brand-red" size={24} />
          <p className="text-sm leading-relaxed">
            <strong>Note:</strong> All machinery hire requires a signed safety
            indemnity form and a refundable security deposit. Logistics costs
            for mobilization and demobilization are calculated based on site
            distance from our Nairobi yard.
          </p>
        </div>
      </section>
    </main>
  );
}
