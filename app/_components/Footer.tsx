import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-16">
          {/* Brand Column (4 Cols) */}
          <div className="md:col-span-4 space-y-6">
            <Link
              href="/"
              className="text-xl font-bold uppercase tracking-tighter"
            >
              Amos<span className="text-brand-red">& Co.</span>
            </Link>
            <p className="text-sm text-brand-muted leading-relaxed max-w-sm">
              Leading roofing solutions and construction materials provider in
              Kenya. Engineering structural integrity with premium timber and
              modern roofing technology.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders - minimalist style */}
              {["FB", "IG", "LI", "WA"].map((social) => (
                <span
                  key={social}
                  className="text-[10px] font-bold text-gray-400 hover:text-brand-red cursor-pointer transition-colors"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links Grid (8 Cols) */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark">
                Services
              </h4>
              <ul className="space-y-4 text-sm text-brand-muted">
                <li>
                  <Link
                    href="/services#roofing"
                    className="hover:text-brand-red transition-colors"
                  >
                    Roofing Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#pvc"
                    className="hover:text-brand-red transition-colors"
                  >
                    PVC Ceilings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#insulation"
                    className="hover:text-brand-red transition-colors"
                  >
                    Heat Insulation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/process"
                    className="hover:text-brand-red transition-colors"
                  >
                    Our Process
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark">
                Materials
              </h4>
              <ul className="space-y-4 text-sm text-brand-muted">
                <li>
                  <Link
                    href="/products?cat=Timber"
                    className="hover:text-brand-red transition-colors"
                  >
                    Structural Timber
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?cat=Hardware"
                    className="hover:text-brand-red transition-colors"
                  >
                    Roofing Tappers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hire"
                    className="hover:text-brand-red transition-colors"
                  >
                    Machine Hire
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-brand-red transition-colors"
                  >
                    Work Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark">
                Headquarters
              </h4>
              <p className="text-sm text-brand-muted leading-loose">
                Industrial Area, Nairobi
                <br />
                <span className="font-bold text-brand-dark">
                  +254 700 000 000
                </span>
                <br />
                <Link
                  href="mailto:info@amosandco.co.ke"
                  className="underline decoration-brand-red/30 hover:decoration-brand-red transition-all"
                >
                  Email Inquiry
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium uppercase tracking-widest text-brand-muted">
          <p>© {currentYear} Amos & Co. Kenya.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-brand-dark">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-dark">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
