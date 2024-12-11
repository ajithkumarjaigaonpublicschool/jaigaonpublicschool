const stats = [
  { label: "Years of Excellence", value: "38+" },
  { label: "Students Enrolled", value: "2500+" },
  { label: "Qualified Teachers", value: "150+" },
  { label: "Success Rate", value: "98%" }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}