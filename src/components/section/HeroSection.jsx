export default function HeroSection({ title, subtitle, cta }) {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-green-500 to-emerald-500 p-10 text-white shadow-xl">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-white/90">{subtitle}</p>
      {cta && <div className="mt-6">{cta}</div>}
    </section>
  );
}
