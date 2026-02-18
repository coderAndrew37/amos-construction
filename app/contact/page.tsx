import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Amos & CO | Roofing & Construction Kenya",
  description:
    "Get in touch with Amos & CO for roofing consultations, material orders, or machine hire. Visit our Nairobi headquarters or reach out via WhatsApp.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* 1. Header Section */}
      <section className="bg-brand-dark pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-4">
            Connect With Us
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Let’s build your <br />
            <span className="font-light italic text-gray-400">
              next milestone.
            </span>
          </h1>
        </div>
      </section>

      {/* 2. Contact Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Contact Info & Map (4 Cols) */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-brand-dark mb-8 tracking-tight">
                Direct Channels
              </h3>
              <div className="space-y-6">
                <ContactMethod
                  icon={<Phone size={20} />}
                  label="Call Our Office"
                  value="+254 700 000 000"
                  href="tel:+254700000000"
                />
                <ContactMethod
                  icon={<Mail size={20} />}
                  label="Email Inquiries"
                  value="info@amosandco.co.ke"
                  href="mailto:info@amosandco.co.ke"
                />
                <ContactMethod
                  icon={<MapPin size={20} />}
                  label="Visit Headquarters"
                  value="Bamburi Road, Industrial Area, Nairobi"
                  href="https://maps.google.com"
                />
                <ContactMethod
                  icon={<Clock size={20} />}
                  label="Business Hours"
                  value="Mon — Sat: 8:00 AM - 5:00 PM"
                />
              </div>
            </div>

            {/* Simple Map Placeholder */}
            <div className="aspect-video bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.163353457187!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMzEuNiJTIDM2wrA0OScyOC44IkU!5e0!3m2!1sen!2ske!4v123456789"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right: The Form (7 Cols) */}
          <div className="lg:col-span-7 bg-gray-50 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-brand-dark mb-2 tracking-tight">
              Project Inquiry Form
            </h3>
            <p className="text-brand-muted mb-8 text-sm">
              Fill out the details below and an engineer will contact you within
              24 hours.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-muted">
                  Full Name
                </label>
                <input
                  type="text"
                  className="bg-white border border-gray-200 p-4 outline-none focus:border-brand-red transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-muted">
                  Email Address
                </label>
                <input
                  type="email"
                  className="bg-white border border-gray-200 p-4 outline-none focus:border-brand-red transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-muted">
                  Service Required
                </label>
                <select
                  aria-label="service selector"
                  className="bg-white border border-gray-200 p-4 outline-none focus:border-brand-red transition-colors appearance-none"
                >
                  <option>Roofing Installation</option>
                  <option>PVC Ceiling & Finishing</option>
                  <option>Heat Insulation</option>
                  <option>Material Supply (Timber/Hardware)</option>
                  <option>Machine Hire</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-muted">
                  Message / Project Scope
                </label>
                <textarea
                  rows={5}
                  className="bg-white border border-gray-200 p-4 outline-none focus:border-brand-red transition-colors"
                  placeholder="Briefly describe your project location and size..."
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full bg-brand-dark text-white py-5 font-bold uppercase tracking-widest text-sm hover:bg-brand-red transition-all shadow-xl shadow-black/5"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactMethod({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Content = (
    <div className="flex items-start gap-4 group">
      <div className="text-brand-red mt-1 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-brand-muted mb-1 font-bold">
          {label}
        </p>
        <p className="text-brand-dark font-medium group-hover:text-brand-red transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  return href ? <a href={href}>{Content}</a> : <div>{Content}</div>;
}
