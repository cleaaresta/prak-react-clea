export default function TailwindCSS() {
    return (
        // Wrapper utama diberi background abu-abu muda agar card warna-warni lebih menonjol
        <div className="min-h-screen bg-slate-50 pb-12 font-sans">
            <FlexboxGrid />
            
            {/* Main container dengan max-width agar tidak terlalu melebar di layar PC */}
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                
                {/* Hero Section (Judul & Tombol Utama) */}
                <div className="flex flex-col items-center text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-6 tracking-tight">
                        Belajar Tailwind CSS 4
                    </h1>
                    <button className="bg-blue-950 text-orange-300 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-900 hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95">
                        Mulai Belajar
                    </button>
                </div>

                {/* Grid Container untuk Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Typography />
                    <Spacing />
                    <BackgroundColors />
                    <ShadowEffects />
                </div>

                {/* Bagian Bawah untuk Button Group */}
                <div className="mt-10 flex flex-col items-center">
                    <p className="text-gray-500 text-sm mb-4">Contoh Custom Border Radius</p>
                    <BorderRadius />
                </div>
            </main>
        </div>
    );
}

function FlexboxGrid() {
    return (
        // Navbar dibuat sticky dan ditambah shadow
        <nav className="sticky top-0 z-50 flex items-center justify-between bg-blue-950 px-6 py-4 text-orange-300 shadow-md">
            <div className="flex items-center gap-3">
                <span className="bg-orange-300 text-blue-950 font-bold px-2 py-1 rounded text-sm">TW</span>
                <h1 className="text-xl font-bold tracking-wide">MyWebsite</h1>
            </div>
            
            <ul className="hidden md:flex space-x-8 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
            
            {/* Tombol logout dibuat agak transparan dengan warna merah */}
            <button className="text-sm px-4 py-2 bg-red-500/10 text-red-400 font-bold rounded-lg hover:bg-red-500 hover:text-white transition-all">
                Logout
            </button>
        </nav>
    );
}

function Spacing() {
    return (
        <div className="bg-blue-950 shadow-xl shadow-blue-900/10 p-8 rounded-3xl relative overflow-hidden group">
            {/* Aksen dekoratif tipis di pojok kanan atas */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-white/10 transition-all duration-500"></div>
            
            <h2 className="text-white text-xl font-bold relative z-10">Spacing & Layout</h2>
            <p className="mt-3 text-orange-300 relative z-10 leading-relaxed">
                Ini adalah contoh penggunaan padding (p-8) dan margin. Terlihat lebih lega dan modern!
            </p>
        </div>
    );
}

function Typography() {
    return (
        // Menambah aksen garis border di sebelah kiri
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 border-l-8 border-l-blue-950 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-blue-950 mb-2">Tailwind Typography</h2>
            <p className="text-gray-600 leading-relaxed mt-2">
                Belajar Tailwind sangat menyenangkan dan cepat! Tipografi lebih rapi dan mudah diatur.
            </p>
        </div>
    );
}

function BackgroundColors() {
    return (
        <div className="bg-orange-300 text-blue-950 p-8 rounded-3xl shadow-md hover:bg-orange-400 transition-colors flex flex-col justify-center">
            <h3 className="text-xl font-extrabold mb-2">Color Contrast</h3>
            <p className="font-medium opacity-90 leading-relaxed">
                Warna <i>base</i> yang kamu pilih keren. Kombinasi <b>bg-orange-300</b> dan teks gelap membuat desain terasa fresh dan mudah dibaca.
            </p>
        </div>
    );
}

function ShadowEffects() {
    return (
        // Efek rotate diubah menjadi hover card-lift yang lebih profesional
        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer border border-gray-100 group">
            <h3 className="text-xl font-bold text-blue-950 group-hover:text-orange-500 transition-colors">
                Hover Me!
            </h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
                Efek bayangan (shadow-2xl) dan translasi terangkat (translate-y) saat di-hover memberikan kesan interaktif yang mulus.
            </p>
        </div>
    );
}

function BorderRadius() {
    return (
        // Dua tombol digabung menjadi seperti segmented control
        <div className="inline-flex bg-blue-950 rounded-full p-1 shadow-md">
            <button className="px-6 py-2.5 rounded-full text-orange-300 font-medium hover:bg-white/10 transition-colors focus:bg-orange-300 focus:text-blue-950 outline-none">
                Klik Kiri
            </button>
            <button className="px-6 py-2.5 rounded-full text-orange-300 font-medium hover:bg-white/10 transition-colors focus:bg-orange-300 focus:text-blue-950 outline-none">
                Klik Kanan
            </button>
        </div>
    );
}