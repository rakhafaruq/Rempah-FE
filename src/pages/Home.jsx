import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="w-full bg-stone-50 overflow-hidden font-sans">
            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-40 overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 inset-x-0 h-full w-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl animate-pulse mix-blend-multiply"></div>
                    <div className="absolute top-20 -left-20 w-72 h-72 bg-green-300/30 rounded-full blur-3xl animate-pulse mix-blend-multiply" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-orange-50/50 to-transparent blur-3xl rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    {/* Animated Badge */}
                    <div className="group relative cursor-pointer mb-8">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-green-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md text-green-800 px-5 py-2 rounded-full text-sm font-semibold border border-green-100 shadow-sm">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                            </span>
                            <span>Platform Penyelamat Makanan #1 di Indonesia</span>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tighter mb-8 leading-[1.1] max-w-5xl">
                        Selamatkan Berlebihnya, <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-green-600 to-teal-600 animate-gradient-x">
                            Sebarkan Berkahnya.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed font-medium">
                        Rempah menghubungkan restoran, katering, dan individu yang memiliki surplus pangan layak konsumsi dengan relawan untuk didistribusikan kepada yang membutuhkan.
                    </p>

                    {/* Premium CTA Buttons */}
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto justify-center items-center">
                        <Link to="/register" className="relative group overflow-hidden bg-orange-600 text-white text-lg font-semibold px-10 py-4 rounded-2xl shadow-xl shadow-orange-600/30 hover:-translate-y-1 hover:shadow-orange-600/50 transition-all duration-300 w-full sm:w-auto text-center border border-orange-500">
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full duration-700 transition-transform"></div>
                            <span className="relative flex items-center justify-center gap-2">
                                Saya Ingin Berdonasi
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </Link>
                        
                        <Link to="/register?role=volunteer" className="bg-white/80 backdrop-blur-sm text-green-800 text-lg font-semibold px-10 py-4 rounded-2xl shadow-lg shadow-gray-100 border border-green-100 hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:border-green-300 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2 group">
                            Menjadi Relawan
                            <svg className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </Link>
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

            {/* 2.5 TENTANG KAMI */}
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
                                <p className="font-medium text-orange-100">Gratis & Donasi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HOW IT WORKS SECTION */}
            <section className="py-32 relative">
                {/* Decorative background element */}
                <div className="absolute top-1/2 left-0 w-full h-[500px] -translate-y-1/2 bg-gradient-to-r from-orange-50/50 via-green-50/30 to-teal-50/50 -skew-y-3 -z-10"></div>
                
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Bagaimana Rempah Bekerja?</h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                            Sistem kami dirancang agar proses donasi dan distribusi makanan berjalan sangat cepat, transparan, dan tepat sasaran.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 relative">
                        {/* Connecting Line for desktop */}
                        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-3/4 bg-gradient-to-b from-orange-200 via-green-200 to-teal-200 rounded-full"></div>

                        {/* Alur Donatur */}
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500 group transform hover:-translate-y-2 md:mt-12">
                            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl flex items-center justify-center mb-8 shadow-inner border border-orange-100 group-hover:scale-110 transition-transform duration-500">
                                <svg className="w-10 h-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">Sebagai Donatur</h3>
                            <ul className="space-y-8">
                                <li className="flex items-start group/item">
                                    <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 font-bold text-lg mr-5 mt-0.5 group-hover/item:bg-orange-500 group-hover/item:text-white transition-colors duration-300">1</span>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-xl mb-1 group-hover/item:text-orange-600 transition-colors">Foto Makanan</h4>
                                        <p className="text-gray-500 leading-relaxed font-medium">Ambil foto makanan layak konsumsi Anda dan sertakan detail tanggal kedaluwarsa atau batas waktu penjemputan.</p>
                                    </div>
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 font-bold text-lg mr-5 mt-0.5 group-hover/item:bg-orange-500 group-hover/item:text-white transition-colors duration-300">2</span>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-xl mb-1 group-hover/item:text-orange-600 transition-colors">Unggah ke Rempah</h4>
                                        <p className="text-gray-500 leading-relaxed font-medium">Sistem kami akan langsung menyiarkan (broadcast) donasi Anda kepada relawan yang berada di sekitar lokasi Anda.</p>
                                    </div>
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 font-bold text-lg mr-5 mt-0.5 group-hover/item:bg-orange-500 group-hover/item:text-white transition-colors duration-300">3</span>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-xl mb-1 group-hover/item:text-orange-600 transition-colors">Serahkan</h4>
                                        <p className="text-gray-500 leading-relaxed font-medium">Tunggu relawan datang menjemput. Anda telah berhasil menyelamatkan makanan hari ini!</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Alur Relawan */}
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 group transform hover:-translate-y-2 md:mt-12">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-3xl flex items-center justify-center mb-8 shadow-inner border border-green-100 group-hover:scale-110 transition-transform duration-500">
                                <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">Sebagai Relawan</h3>
                            <ul className="space-y-8">
                                <li className="flex items-start group/item">
                                    <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-2xl bg-green-100 text-green-600 font-bold text-lg mr-5 mt-0.5 group-hover/item:bg-green-600 group-hover/item:text-white transition-colors duration-300">1</span>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-xl mb-1 group-hover/item:text-green-600 transition-colors">Cari Donasi</h4>
                                        <p className="text-gray-500 leading-relaxed font-medium">Buka aplikasi dan temukan notifikasi makanan berlebih yang tersedia di sekitar wilayah Anda.</p>
                                    </div>
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-2xl bg-green-100 text-green-600 font-bold text-lg mr-5 mt-0.5 group-hover/item:bg-green-600 group-hover/item:text-white transition-colors duration-300">2</span>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-xl mb-1 group-hover/item:text-green-600 transition-colors">Klaim (Booking)</h4>
                                        <p className="text-gray-500 leading-relaxed font-medium">Klaim makanan tersebut di sistem agar donatur tahu bahwa Anda sedang dalam perjalanan.</p>
                                    </div>
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-2xl bg-green-100 text-green-600 font-bold text-lg mr-5 mt-0.5 group-hover/item:bg-green-600 group-hover/item:text-white transition-colors duration-300">3</span>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-xl mb-1 group-hover/item:text-green-600 transition-colors">Jemput & Salurkan</h4>
                                        <p className="text-gray-500 leading-relaxed font-medium">Ambil makanan dari donatur, dan salurkan ke yayasan atau warga yang membutuhkan.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3.5 MITRA PIONIR PERTAMA */}
            <section className="py-24 bg-stone-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-[#2C4A1B] rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-green-900/20 overflow-hidden relative">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
                        
                        <div className="grid md:grid-cols-2 gap-12 relative z-10">
                            <div className="text-white">
                                <div className="inline-flex items-center space-x-2 bg-yellow-900/50 text-yellow-500 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-yellow-700/50">
                                    <span>🏆</span>
                                    <span>Mitra Pionir Pertama</span>
                                </div>
                                <h2 className="text-4xl font-extrabold mb-4">Toko Roti Global Bakery</h2>
                                <div className="flex items-center text-green-200 mb-6 font-medium">
                                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Ciwastra, Bandung
                                </div>
                                <p className="text-green-50 text-lg leading-relaxed mb-8">
                                    Toko roti lokal yang memiliki produk roti segar harian yang terkadang tidak habis terjual. Melalui sistem REMPAH, sisa roti didonasikan 100% gratis kepada tim relawan untuk diklaim via web, lalu didistribusikan kepada yang membutuhkan.
                                </p>
                                <div className="inline-flex items-center space-x-2 bg-[#3A5C28] text-orange-400 px-5 py-3 rounded-xl font-medium border border-[#486E35]">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Donasi tersedia setiap sore hari</span>
                                </div>
                            </div>
                            
                            <div className="bg-[#3A5C28] rounded-3xl p-8 border border-[#486E35] shadow-inner">
                                <h3 className="text-white font-bold text-xl mb-6 flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Skema Kerjasama
                                </h3>
                                <ul className="space-y-4 text-green-100 font-medium">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-3 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Roti segar sisa hari yang masih layak konsumsi
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-3 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Donasi dilakukan 100% secara gratis
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-3 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Relawan datang untuk penjemputan setelah klaim di web
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-3 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Foto distribusi diunggah sebagai bukti transparansi
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-3 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Donatur melihat dampak nyata lewat dashboard
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CALL TO ACTION BAWAH */}
            <section className="relative py-28 overflow-hidden">
                <div className="absolute inset-0 bg-green-900">
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-950 via-green-900 to-green-800 opacity-90"></div>
                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-green-700/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
                </div>
                
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">Siap Membuat Perubahan Hari Ini?</h2>
                    <p className="text-green-100 text-xl mb-10 font-medium leading-relaxed max-w-2xl mx-auto">
                        Bergabunglah dengan ratusan pahlawan pangan lainnya. Setiap porsi makanan yang terselamatkan sangat berarti bagi mereka yang membutuhkan.
                    </p>
                    <Link to="/register" className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-12 py-5 rounded-2xl shadow-xl shadow-orange-900/50 hover:shadow-orange-500/40 hover:-translate-y-1 hover:from-orange-400 hover:to-orange-500 transition-all duration-300 text-lg border border-orange-400/50">
                        Mulai Gunakan Rempah Sekarang
                        <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    );
}
