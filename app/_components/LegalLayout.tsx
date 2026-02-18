export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="bg-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <h2 className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-4">
              Documentation
            </h2>
            <h1 className="text-5xl font-bold tracking-tighter text-brand-dark mb-6">
              {title}
            </h1>
            <p className="text-brand-muted text-sm uppercase tracking-widest font-medium">
              Last Updated: {lastUpdated}
            </p>
            <div className="h-1 w-12 bg-brand-red mt-8" />
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-8 prose prose-gray max-w-none">
            <div className="space-y-12 text-brand-muted leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
