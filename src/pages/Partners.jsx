import { Link } from "react-router-dom";

const ACTIVE_PARTNERS = [
    {
        id: 1,
        name: "Global Bakery",
        category: "Bakery & Roti",
        location: "Ciwastra, Bandung",
        since: "Mei 2026",
        description:
            "Toko roti lokal yang berkomitmen mendonasikan 100% sisa roti segarnya setiap sore hari. Pionir pertama yang mempercayai visi REMPAH sejak hari pertama.",
        impact: {
            donations: "40+",
            label: "Donasi Dilakukan",
        },
        badge: "🏆 Mitra Pionir",
        badgeColor: "bg-yellow-100 text-yellow-700 border-yellow-200",
        accentColor: "from-orange-500 to-amber-500",
        emoji: "🍞",
        tags: ["Roti Segar"],
        isFeatured: true,
    },
];

const CATEGORIES = ["Semua", "Bakery & Roti", "Restoran", "Katering", "Kafe", "Hotel"];

export default function Partners() {
    return (
        <div className="w-full bg-stone-50 overflow-hidden font-sans">

            {/* HERO */}
            <section className="relative pt-28 pb-24 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-stone-50 to-orange-50"></div>
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 -left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-green-800 px-5 py-2 rounded-full text-sm font-semibold border border-green-100 shadow-sm mb-6">
                        <span>🤝</span>
                        <span>Komunitas Mitra Rempah</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tighter mb-6 leading-tight">
                        Mitra yang{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-green-600">
                            Menggerakkan
                        </span>{" "}
                        Perubahan
                    </h1>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium mb-10">
                        Bisnis-bisnis berani yang memilih untuk tidak membiarkan makanan baik berakhir sia-sia.
                        Bersama mereka, kami membangun ekosistem pangan yang lebih adil.
                    </p>

                    {/* Stat strip */}
                    <div className="inline-grid grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-8">
                        {[
                            { val: "1", label: "Mitra Aktif" },
                            { val: "40+", label: "Donasi Selesai" },
                            { val: "∞", label: "Potensi Terbuka" },
                        ].map((s) => (
                            <div key={s.label} className="bg-white px-8 py-4 text-center">
                                <p className="text-2xl font-extrabold text-gray-900">{s.val}</p>
                                <p className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURED PARTNER */}
            <section className="py-8">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-px flex-1 bg-gray-200"></div>
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Mitra Aktif</span>
                        <div className="h-px flex-1 bg-gray-200"></div>
                    </div>

                    {/* Featured Card — large */}
                    <div className="bg-[#2C4A1B] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-green-900/20 mb-10">
                        <div className="grid md:grid-cols-5">
                            {/* Left visual */}
                            <div className="md:col-span-2 relative min-h-[280px] bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center p-10">
                                <div className="absolute inset-0 bg-black/10"></div>
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center gap-1.5 bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 text-xs font-bold px-3 py-1.5 rounded-full">
                                        🏆 Mitra Pionir #1
                                    </span>
                                </div>
                                <div className="relative z-10 text-center">
                                    <div className="text-8xl mb-4">🍞</div>
                                    <p className="text-white/80 text-sm font-semibold">Bergabung sejak</p>
                                    <p className="text-white font-bold text-lg">Mei 2026</p>
                                </div>
                            </div>

                            {/* Right content */}
                            <div className="md:col-span-3 p-10 text-white">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h2 className="text-3xl font-extrabold mb-1">Toko Roti Global Bakery</h2>
                                        <div className="flex items-center gap-2 text-green-200 text-sm font-medium">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            Ciwastra, Bandung
                                        </div>
                                    </div>
                                </div>

                                <p className="text-green-100 leading-relaxed mb-6 text-base">
                                    Toko roti lokal yang berkomitmen mendonasikan sisa roti segarnya setiap sore hari. 
                                    Mereka adalah bisnis pertama yang percaya dan bergabung bersama REMPAH sejak awal — 
                                    membuktikan bahwa bisnis kecil pun bisa membuat dampak besar.
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {["Roti Segar", "100% Gratis"].map((tag) => (
                                        <span key={tag} className="bg-white/10 border border-white/20 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Impact */}
                                <div className="bg-white/10 border border-white/15 rounded-2xl p-5 flex items-center gap-6">
                                    <div className="text-center flex-shrink-0">
                                        <p className="text-4xl font-extrabold text-orange-300">40+</p>
                                        <p className="text-green-200 text-xs font-semibold mt-0.5">Donasi Selesai</p>
                                    </div>
                                    <div className="h-10 w-px bg-white/20"></div>
                                    <p className="text-green-100 text-sm leading-relaxed">
                                        Setiap donasi yang selesai berarti lebih banyak perut kenyang dan lebih sedikit sampah makanan di kota Bandung.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coming soon slots */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            { emoji: "🍽️", label: "Restoran Berikutnya?" },
                            { emoji: "☕", label: "Kafe Berikutnya?" },
                            { emoji: "🎂", label: "Katering Berikutnya?" },
                        ].map((slot) => (
                            <div key={slot.label} className="bg-white border-2 border-dashed border-gray-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center group hover:border-orange-300 hover:bg-orange-50/50 transition-all duration-300 cursor-pointer min-h-[180px]">
                                <div className="text-4xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                                    {slot.emoji}
                                </div>
                                <p className="font-bold text-gray-400 group-hover:text-orange-600 transition-colors text-sm">
                                    {slot.label}
                                </p>
                                <p className="text-gray-300 text-xs mt-1 group-hover:text-orange-400 transition-colors">
                                    Slot terbuka untuk bisnis Anda
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MENGAPA JADI MITRA */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-green-100 text-green-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-4">
                            Untuk Bisnis Anda
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
                            Mengapa Menjadi{" "}
                            <span className="text-orange-600">Mitra Rempah?</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                            Bergabung bukan hanya tentang donasi — ini tentang menjadi bagian dari gerakan yang lebih besar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {[
                            {
                                icon: "♻️",
                                title: "Kurangi Food Waste",
                                desc: "Makanan sisa yang masih layak tidak lagi berakhir di tempat sampah. Anda berkontribusi langsung pada pengurangan food waste di kota Anda.",
                                color: "bg-green-50 border-green-100",
                                iconBg: "bg-green-100",
                            },
                            {
                                icon: "📣",
                                title: "Eksposur & Citra Positif",
                                desc: "Nama dan kisah bisnis Anda tampil di platform Rempah dan media sosial kami, membangun reputasi sebagai bisnis yang peduli lingkungan.",
                                color: "bg-orange-50 border-orange-100",
                                iconBg: "bg-orange-100",
                            },
                            {
                                icon: "📊",
                                title: "Dashboard Dampak",
                                desc: "Lihat secara real-time berapa banyak makanan yang sudah Anda selamatkan dan siapa yang terbantu.",
                                color: "bg-teal-50 border-teal-100",
                                iconBg: "bg-teal-100",
                            },
                            {
                                icon: "🤝",
                                title: "100% Gratis & Mudah",
                                desc: "Tidak ada biaya apapun. Anda cukup mendaftarkan makanan surplus, dan relawan kami yang akan datang menjemput.",
                                color: "bg-blue-50 border-blue-100",
                                iconBg: "bg-blue-100",
                            }
                        ].map((b) => (
                            <div key={b.title} className={`${b.color} border rounded-3xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
                                <div className={`w-14 h-14 ${b.iconBg} rounded-2xl flex items-center justify-center text-2xl mb-5`}>
                                    {b.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{b.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CARA DAFTAR */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            Cara Bergabung Sangat Mudah
                        </h2>
                        <p className="text-lg text-gray-600 font-medium">Hanya butuh beberapa menit untuk memulai.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { num: "1", title: "Daftar Akun", desc: "Buat akun mitra di halaman registrasi kami. Pilih tipe akun 'Donatur / Mitra'.", icon: "📝" },
                            { num: "2", title: "Lengkapi Profil", desc: "Isi detail bisnis Anda — nama, lokasi, jenis makanan yang biasa didonasikan.", icon: "🏪" },
                            { num: "3", title: "Mulai Donasi", desc: "Unggah donasi pertama Anda. Relawan di sekitar lokasi akan segera mendapatkan notifikasi.", icon: "🚀" },
                        ].map((step) => (
                            <div key={step.num} className="text-center group">
                                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-3xl text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-orange-600 text-white text-xs font-extrabold rounded-full flex items-center justify-center">
                                        {step.num}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/register"
                            className="inline-flex items-center gap-2 bg-orange-600 text-white font-bold px-10 py-4 rounded-2xl shadow-xl shadow-orange-200 hover:bg-orange-700 hover:-translate-y-1 transition-all duration-300 text-lg"
                        >
                            Daftar sebagai Mitra Sekarang
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                        <p className="text-gray-400 text-sm mt-4 font-medium">Gratis · Tanpa biaya · Tanpa komitmen jangka panjang</p>
                    </div>
                </div>
            </section>

            {/* QUOTE / TESTIMONIAL */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-gray-100 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-50 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                        <div className="relative z-10">
                            <div className="text-6xl mb-6">"</div>
                            <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-snug tracking-tight">
                                Awalnya kami tidak tahu mau diapakan sisa roti setiap sore. Sekarang, kami tahu setiap roti yang tersisa pasti sampai ke tangan yang tepat.
                            </blockquote>
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center text-2xl">
                                    🍞
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-gray-900">Global Bakery</p>
                                    <p className="text-gray-500 text-sm font-medium">Mitra Pionir · Ciwastra, Bandung</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
