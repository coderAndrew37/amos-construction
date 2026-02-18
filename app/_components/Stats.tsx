export default function Stats() {
  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Projects Completed", value: "250+" },
    { label: "Materials Supplied", value: "10k Tons" },
    { label: "NCA Certified", value: "Level 1" },
  ];

  return (
    <div className="bg-brand-dark py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-center md:border-r last:border-0 border-gray-700"
          >
            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-xs uppercase tracking-widest text-brand-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
