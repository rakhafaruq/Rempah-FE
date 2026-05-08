import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="w-full bg-stone-50 overflow-hidden font-sans">
            {/* 1. HERO SECTION — 2 Column */}
            <section className="relative pt-28 pb-36 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-full w-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-3xl"></div>
                    <div className="absolute top-20 -left-20 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT: Text */}
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md text-green-800 px-5 py-2 rounded-full text-sm font-semibold border border-green-100 shadow-sm mb-8">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                                </span>
                                <span>Live Rescue Feed Active</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tighter mb-6 leading-[1.1]">
                                Selamatkan Makanan,{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-green-700">
                                    Sebarkan Berkah
                                </span>
                            </h1>

                            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
                                Bergabunglah dengan jaringan penyelamat pangan paling dinamis di Indonesia. Kami menghubungkan makanan surplus dari mitra premium ke komunitas yang membutuhkan, mengubah pemborosan menjadi dampak nyata.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/register" className="relative group overflow-hidden bg-orange-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl shadow-orange-600/30 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 border border-orange-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full duration-700 transition-transform"></div>
                                    <span className="relative flex items-center gap-2">
                                        Start Rescuing
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </span>
                                </Link>
                                <Link to="/register?role=partner" className="text-green-800 font-semibold px-8 py-4 rounded-2xl border border-green-200 hover:border-green-400 hover:bg-green-50 transition-all duration-300 inline-flex items-center gap-2">
                                    Partner with Us
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT: App Card */}
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[340px]">
                                <div className="absolute -inset-4 bg-gradient-to-br from-orange-300/40 to-green-400/20 rounded-[3rem] blur-2xl -z-10"></div>
                                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-[2.5rem] p-7 shadow-2xl shadow-orange-500/30 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                                    <div className="relative z-10 mb-5">
                                        <span className="text-orange-100 text-xs font-semibold uppercase tracking-widest">Dashboard</span>
                                        <h3 className="text-white text-2xl font-extrabold mt-1">REMPAH</h3>
                                        <p className="text-orange-100 text-sm font-medium">Rescue Makanan Penuh Berkah.</p>
                                    </div>
                                    <div className="relative z-10 rounded-2xl overflow-hidden mb-5 aspect-video">
                                        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Fresh vegetables" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="relative z-10 flex gap-3">
                                        <button className="flex-1 bg-white/20 text-white text-sm font-semibold py-2.5 rounded-xl border border-white/30">Klaim</button>
                                        <button className="flex-1 bg-white text-orange-600 text-sm font-semibold py-2.5 rounded-xl">Detail →</button>
                                    </div>
                                </div>
                                {/* Floating badges */}
                                <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100 flex items-center gap-3">
                                    <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Terselamatkan</p>
                                        <p className="text-sm font-extrabold text-gray-900">500+ Meals</p>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100 flex items-center gap-3">
                                    <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Partners</p>
                                        <p className="text-sm font-extrabold text-gray-900">50+ Mitra</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. STATS SECTION (Glassmorphism) */}
            <section className="py-16 -mt-20 relative z-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white/60 backdrop-blur-xl border border-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-green-900/5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200/60">
                            <div className="px-6 flex flex-col items-center group">
                                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 className="text-5xl font-extrabold text-gray-900 mb-2">1/3</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">Makanan di dunia terbuang sia-sia setiap tahunnya.</p>
                            </div>
                            <div className="px-6 flex flex-col items-center group pt-8 md:pt-0">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-5xl font-extrabold text-gray-900 mb-2">Jutaan</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">Orang kesulitan mendapatkan akses makanan layak.</p>
                            </div>
                            <div className="px-6 flex flex-col items-center group pt-8 md:pt-0">
                                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500 mb-2">Rempah</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">Hadir sebagai jembatan teknologi menyelesaikannya.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. TENTANG KAMI */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block bg-orange-100 text-orange-600 font-semibold px-4 py-1.5 rounded-full text-sm mb-6">
                                Tentang Kami
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                                Apa itu <span className="text-orange-600">REMPAH?</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                                REMPAH (Rescue Makanan Penuh Berkah) merupakan proyek sosial yang diinisiasi oleh mahasiswa sebagai bentuk kepedulian terhadap permasalahan <strong className="text-gray-900">pemborosan makanan (food waste)</strong> dan ketimpangan distribusi pangan di masyarakat.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                                Kami hadir sebagai jembatan antara pihak yang memiliki kelebihan makanan utuh layak konsumsi dengan masyarakat jalanan yang membutuhkan, agar sumber daya yang bernilai tidak berakhir di tempat sampah.
                            </p>
                            
                            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-2xl mb-8">
                                <h4 className="font-bold text-green-900 text-lg mb-2">Bukan B2C — Kami adalah B2S (Business-to-Social)</h4>
                                <p className="text-green-800 font-medium">Relawan mengklaim donasi untuk didistribusikan kembali kepada masyarakat. 100% gratis, tanpa pungutan biaya apapun.</p>
                            </div>

                            <Link to="/about" className="inline-flex items-center text-orange-600 font-bold text-lg hover:text-orange-700 transition-colors group">
                                Pelajari Lebih Lanjut 
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tim Mahasiswa" className="w-full h-auto object-cover" />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-orange-600 text-white p-6 rounded-2xl shadow-xl shadow-orange-600/30">
                                <h3 className="text-3xl font-extrabold mb-1">100%</h3>
                                <p className="font-medium text-orange-100">Gratis &amp; Donasi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HOW IT WORKS — Ringkas, link ke halaman detail */}
            <section className="py-28 relative">
                <div className="absolute top-1/2 left-0 w-full h-[400px] -translate-y-1/2 bg-gradient-to-r from-orange-50/50 via-green-50/30 to-teal-50/50 -skew-y-3 -z-10"></div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">How It Works</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                            Tiga langkah sederhana untuk menyelamatkan makanan dan menyebarkan berkah kepada yang membutuhkan.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { num: "1", color: "orange", title: "Partner Surplus", desc: "Restoran dan kafe mendaftarkan makanan layak konsumsi sisa hari ini di platform kami.", bg: "bg-orange-100", text: "text-orange-600" },
                            { num: "2", color: "teal", title: "Quick Rescue", desc: "Relawan mendapat notifikasi dan mengklaim makanan via platform real-time kami.", bg: "bg-teal-100", text: "text-teal-600" },
                            { num: "3", color: "green", title: "Distribusi Berkah", desc: "Makanan diantarkan ke komunitas yang membutuhkan, mengurangi pemborosan.", bg: "bg-green-100", text: "text-green-700" },
                        ].map((s) => (
                            <div key={s.num} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                                <div className={`w-16 h-16 ${s.bg} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                                    <span className={`text-3xl font-extrabold ${s.text}`}>{s.num}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link to="/how-it-works" className="inline-flex items-center gap-2 text-green-800 font-bold text-lg hover:text-orange-600 transition-colors group border border-green-200 px-8 py-4 rounded-2xl hover:border-orange-300 hover:bg-orange-50 transition-all duration-300">
                            Lihat Panduan Lengkap
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. MITRA PIONIR */}
            <section className="py-24 bg-stone-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-[#2C4A1B] rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-green-900/20 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
                        <div className="grid md:grid-cols-2 gap-12 relative z-10">
                            <div className="text-white">
                                <div className="inline-flex items-center space-x-2 bg-yellow-900/50 text-yellow-500 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-yellow-700/50">
                                    <span>🏆</span><span>Mitra Pionir Pertama</span>
                                </div>
                                <h2 className="text-4xl font-extrabold mb-4">Toko Roti Global Bakery</h2>
                                <div className="flex items-center text-green-200 mb-6 font-medium">
                                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    Ciwastra, Bandung
                                </div>
                                <p className="text-green-50 text-lg leading-relaxed mb-8">
                                    Toko roti lokal dengan produk roti segar harian. Sisa roti didonasikan 100% gratis kepada relawan untuk diklaim via web, lalu didistribusikan kepada yang membutuhkan.
                                </p>
                                <div className="inline-flex items-center space-x-2 bg-[#3A5C28] text-orange-400 px-5 py-3 rounded-xl font-medium border border-[#486E35]">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>Donasi tersedia setiap sore hari</span>
                                </div>
                            </div>
                            <div className="bg-[#3A5C28] rounded-3xl p-8 border border-[#486E35] shadow-inner">
                                <h3 className="text-white font-bold text-xl mb-6 flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Skema Kerjasama
                                </h3>
                                <ul className="space-y-4 text-green-100 font-medium">
                                    {["Roti segar sisa hari yang masih layak konsumsi","Donasi dilakukan 100% secara gratis","Relawan datang untuk penjemputan setelah klaim di web","Foto distribusi diunggah sebagai bukti transparansi","Donatur melihat dampak nyata lewat dashboard"].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg className="w-5 h-5 mr-3 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
