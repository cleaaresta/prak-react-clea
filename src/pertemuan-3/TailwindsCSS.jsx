export default function TailwindCSS() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <FlexboxGrid />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-950 mb-4">
            Belajar Tailwind <span className="text-orange-400">CSS 4</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto mb-8">
            Eksplorasi komponen modern dengan perpaduan warna deep blue dan aksen orange yang hangat.
          </p>
          <button className="bg-blue-950 hover:bg-blue-900 text-orange-300 px-8 py-3 rounded-full font-medium shadow-xl shadow-blue-950/20 transition-all hover:-translate-y-1 active:scale-95">
            Mulai Belajar
          </button>
        </header>

        {/* Grid Layout for Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Spacing />
          <Typography />
          <div className="space-y-8">
            <BorderRadius />
            <ShadowEffects />
          </div>
          <div className="lg:col-span-2">
            <BackgroundColors />
          </div>
        </div>
      </main>
    </div>
  );
}

function FlexboxGrid() {
  return (
    <nav className="sticky top-0 z-50 bg-blue-950/95 backdrop-blur-md px-6 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-black tracking-tighter text-orange-300 uppercase">
          Design<span className="text-white">Lab</span>
        </h1>
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <li><a href="#" className="hover:text-orange-300 transition">Home</a></li>
          <li><a href="#" className="hover:text-orange-300 transition">Showcase</a></li>
          <li><a href="#" className="hover:text-orange-300 transition">Docs</a></li>
        </ul>
        <button className="text-sm font-semibold text-red-400 hover:text-red-300 transition">
          Logout
        </button>
      </div>
    </nav>
  );
}

function Spacing() {
  return (
    <div className="group bg-blue-950 p-8 rounded-3xl shadow-2xl shadow-blue-950/20 border border-blue-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-24 h-24 bg-orange-300/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
      <h2 className="text-white text-xl font-bold mb-3">Premium Card</h2>
      <p className="text-slate-400 leading-relaxed">
        Penggunaan <span className="text-orange-300">padding</span> dan <span className="text-orange-300">margin</span> yang tepat menciptakan hirarki visual yang nyaman dipandang.
      </p>
    </div>
  );
}

function Typography() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
      <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 block">Typography</span>
      <h2 className="text-3xl font-bold text-blue-950 mb-3 leading-tight">Seni Mengolah Kata</h2>
      <p className="text-slate-600 leading-relaxed">
        Tailwind mempermudah pengaturan <span className="italic">line-height</span> dan <span className="font-semibold">letter-spacing</span> untuk kenyamanan membaca yang maksimal.
      </p>
    </div>
  );
}

function BorderRadius() {
  return (
    <div className="flex gap-4">
      <button className="flex-1 border-2 border-blue-950 text-blue-950 px-4 py-3 rounded-2xl font-bold hover:bg-blue-950 hover:text-white transition-colors">
        Soft Edge
      </button>
      <button className="flex-1 bg-orange-300 text-blue-950 px-4 py-3 rounded-tr-3xl rounded-bl-3xl font-bold hover:shadow-lg hover:shadow-orange-300/30 transition-all">
        Custom Shape
      </button>
    </div>
  );
}

function BackgroundColors() {
  return (
    <div className="bg-orange-300 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 shadow-inner">
      <div className="bg-blue-950 text-white p-6 rounded-2xl shadow-xl">
        <p className="text-sm font-mono opacity-70">#172554</p>
      </div>
      <div>
        <h3 className="text-2xl font-black text-blue-950 uppercase">Contrast Power</h3>
        <p className="text-blue-900/80 mt-1 font-medium">
          Perpaduan warna gelap dan terang memberikan kesan yang tegas namun tetap hangat dan profesional.
        </p>
      </div>
    </div>
  );
}

function ShadowEffects() {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 cursor-pointer group">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-blue-950 group-hover:text-orange-500 transition-colors">Smooth Interaction</h3>
        <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:rotate-12 transition-transform flex items-center justify-center text-blue-950">
          →
        </div>
      </div>
      <p className="text-slate-500 mt-2 text-sm">Arahkan kursor untuk melihat perubahan bayangan yang halus.</p>
    </div>
  );
}