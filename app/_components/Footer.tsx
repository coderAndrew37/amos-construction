// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-light border-t border-gray-200 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-tighter">
              Bamburi<span className="text-brand-red">Group</span>
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              Leading roofing solutions and construction materials provider in
              Kenya. Quality you can build on.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-dark">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li>
                <Link href="/services/roofing" className="hover:text-brand-red">
                  Roofing & Renovation
                </Link>
              </li>
              <li>
                <Link href="/services/pvc" className="hover:text-brand-red">
                  PVC Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/insulation"
                  className="hover:text-brand-red"
                >
                  Heat Insulation
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-dark">
              Materials
            </h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li>
                <Link href="/products/timber" className="hover:text-brand-red">
                  Timber Supply
                </Link>
              </li>
              <li>
                <Link href="/products/tappers" className="hover:text-brand-red">
                  Tappers
                </Link>
              </li>
              <li>
                <Link href="/hire" className="hover:text-brand-red">
                  Machine Hire
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-dark">
              Contact
            </h4>
            <p className="text-sm text-brand-muted">Nairobi, Kenya</p>
            <p className="mt-2 text-sm font-bold text-brand-red">
              WhatsApp: +254 XXX XXX XXX
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8 text-center text-xs text-brand-muted">
          <p>© {currentYear} Bamburi Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
