import { Link } from "react-router-dom";

export default function HowItWorks() {
    return (
        <div className="w-full bg-stone-50 overflow-hidden font-sans">
            {/* PAGE HEADER */}
            <section className="relative pt-28 pb-20 overflow-hidden">
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-50 via-stone-50 to-green-50"></div>
                    <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 -left-10 w-64 h-64 bg-green-300/20 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-green-800 px-5 py-2 rounded-full text-sm font-semibold border border-green-100 shadow-sm mb-6">
                        <span>Panduan Lengkap Platform</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tighter mb-6 leading-tight">
                        Bagaimana{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-green-600">
                            Rempah
                        </span>{" "}
                        Bekerja?
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
                        Sistem kami dirancang agar proses donasi dan distribusi makanan berjalan sangat
                        cepat, transparan, dan tepat sasaran — dari restoran ke meja makan mereka yang membutuhkan.
                    </p>
                </div>
            </section>

            {/* OVERVIEW STEPS */}
            <section className="py-12 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {[
                            {
                                num: "1",
                                color: "orange",
                                title: "Mitra Donasi",
                                desc: "Restoran dan kafe mendaftarkan makanan layak konsumsi sisa hari ini.",
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                ),
                            },
                            {
                                num: "2",
                                color: "teal",
                                title: "Relawan Pangan",
                                desc: "Relawan dan pahlawan pangan mendapat notifikasi dan mengklaim makanan via platform real-time kami.",
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                ),
                            },
                            {
                                num: "3",
                                color: "green",
                                title: "Distribusi Berkah",
                                desc: "Makanan diantarkan ke komunitas yang membutuhkan, menyebarkan kehangatan dan mengurangi pemborosan.",
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                ),
                            },
                        ].map((step) => (
                            <div key={step.num} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                                    step.color === "orange" ? "bg-orange-100" : step.color === "teal" ? "bg-teal-100" : "bg-green-100"
                                }`}>
                                    <span className={`text-3xl font-extrabold ${
                                        step.color === "orange" ? "text-orange-600" : step.color === "teal" ? "text-teal-600" : "text-green-600"
                                    }`}>{step.num}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ALUR DONATUR */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Alur Donatur</span>
                            </div>
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                                Sebagai <span className="text-orange-600">Donatur</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                                Anda memiliki makanan sisa yang masih layak konsumsi? Ikuti 3 langkah mudah ini untuk menyelamatkan makanan berharga tersebut.
                            </p>
                            <ul className="space-y-8">
                                {[
                                    {
                                        num: "1",
                                        title: "Foto Makanan",
                                        desc: "Ambil foto makanan layak konsumsi Anda dan sertakan detail tanggal kedaluwarsa atau batas waktu penjemputan.",
                                    },
                                    {
                                        num: "2",
                                        title: "Unggah ke Rempah",
                                        desc: "Sistem kami akan langsung menyiarkan (broadcast) donasi Anda kepada relawan yang berada di sekitar lokasi Anda.",
                                    },
                                    {
                                        num: "3",
                                        title: "Serahkan",
                                        desc: "Tunggu relawan datang menjemput. Anda telah berhasil menyelamatkan makanan hari ini!",
                                    },
                                ].map((item) => (
                                    <li key={item.num} className="flex items-start group/item">
                                        <span className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-2xl bg-orange-100 text-orange-600 font-bold text-lg mr-5 mt-0.5 group-hover/item:bg-orange-500 group-hover/item:text-white transition-colors duration-300">
                                            {item.num}
                                        </span>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-xl mb-1 group-hover/item:text-orange-600 transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to="/register"
                                className="mt-10 inline-flex items-center gap-2 bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-orange-200 hover:bg-orange-700 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Daftar sebagai Donatur
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-[2.5rem] p-10 border border-orange-100">
                            <div className="space-y-6">
                                {[
                                    { icon: "📸", label: "Foto & Upload", desc: "Foto makanan, isi detail & lokasi penjemputan" },
                                    { icon: "✅", label: "Konfirmasi Klaim", desc: "Relawan klaim — Anda mendapat notifikasi" },
                                    { icon: "🤝", label: "Serahkan & Selesai", desc: "Makanan diserahkan, dampak tercatat di dashboard" },
                                ].map((step, i) => (
                                    <div key={i} className="flex items-center gap-5 bg-white rounded-2xl p-5 shadow-sm border border-orange-100">
                                        <div className="text-3xl w-14 h-14 flex items-center justify-center bg-orange-100 rounded-xl flex-shrink-0">
                                            {step.icon}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">{step.label}</p>
                                            <p className="text-sm text-gray-500">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIVIDER */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            </div>

            {/* ALUR RELAWAN */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 bg-gradient-to-br from-green-50 to-green-100/50 rounded-[2.5rem] p-10 border border-green-100">
                            <div className="space-y-6">
                                {[
                                    { icon: "📋", label: "Klaim Donasi", desc: "Booking makanan agar donatur tahu Anda menuju lokasi" },
                                    { icon: "🛵", label: "Jemput Makanan", desc: "Datang ke lokasi donatur sesuai waktu yang disepakati" },
                                    { icon: "🏠", label: "Distribusikan", desc: "Salurkan ke yayasan atau warga membutuhkan & upload bukti" },
                                ].map((step, i) => (
                                    <div key={i} className="flex items-center gap-5 bg-white rounded-2xl p-5 shadow-sm border border-green-100">
                                        <div className="text-3xl w-14 h-14 flex items-center justify-center bg-green-100 rounded-xl flex-shrink-0">
                                            {step.icon}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">{step.label}</p>
                                            <p className="text-sm text-gray-500">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                <span>Alur Relawan</span>
                            </div>
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                                Sebagai <span className="text-green-600">Relawan</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                                Anda ingin menjadi pahlawan pangan? Ikuti alur sederhana ini untuk berkontribusi nyata di komunitas Anda.
                            </p>
                            <ul className="space-y-8">
                                {[
                                    {
                                        num: "1",
                                        title: "Cari Donasi",
                                        desc: "Buka aplikasi dan temukan notifikasi makanan berlebih yang tersedia di sekitar wilayah Anda.",
                                    },
                                    {
                                        num: "2",
                                        title: "Klaim (Booking)",
                                        desc: "Klaim makanan tersebut di sistem agar donatur tahu bahwa Anda sedang dalam perjalanan.",
                                    },
                                    {
                                        num: "3",
                                        title: "Jemput & Salurkan",
                                        desc: "Ambil makanan dari donatur, dan salurkan ke yayasan atau warga yang membutuhkan.",
                                    },
                                ].map((item) => (
                                    <li key={item.num} className="flex items-start group/item">
                                        <span className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-2xl bg-green-100 text-green-600 font-bold text-lg mr-5 mt-0.5 group-hover/item:bg-green-600 group-hover/item:text-white transition-colors duration-300">
                                            {item.num}
                                        </span>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-xl mb-1 group-hover/item:text-green-600 transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to="/register?role=volunteer"
                                className="mt-10 inline-flex items-center gap-2 bg-green-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-green-200 hover:bg-green-800 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Daftar sebagai Relawan
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ / NOTES */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">Pertanyaan Umum</h2>
                        <p className="text-lg text-gray-600 font-medium">Hal-hal yang sering ditanyakan tentang cara kerja platform kami.</p>
                    </div>
                    <div className="space-y-4">
                        {[
                            {
                                q: "Apakah ada biaya untuk bergabung?",
                                a: "Tidak sama sekali. Platform Rempah 100% gratis baik untuk donatur maupun relawan. Kami bergerak atas dasar misi sosial, bukan komersil.",
                            },
                            {
                                q: "Jenis makanan apa saja yang bisa didonasikan?",
                                a: "Makanan yang masih layak konsumsi, belum kadaluwarsa, dan dalam kondisi baik. Bisa berupa nasi, lauk, roti, snack, buah-buahan, dan lain sebagainya.",
                            },
                            {
                                q: "Bagaimana cara memastikan makanan aman untuk dikonsumsi?",
                                a: "Donatur bertanggung jawab atas kelayakan makanan yang didonasikan. Kami menyediakan panduan standar keamanan pangan yang wajib dipatuhi oleh setiap donatur.",
                            },
                            {
                                q: "Berapa lama proses dari upload hingga makanan diklaim?",
                                a: "Sangat cepat! Begitu donatur mengunggah makanan, notifikasi langsung dikirim ke relawan terdekat. Rata-rata waktu klaim kurang dari 15 menit.",
                            },
                        ].map((faq, i) => (
                            <details key={i} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-gray-900 hover:text-orange-600 transition-colors list-none">
                                    <span>{faq.q}</span>
                                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="px-6 pb-6 text-gray-600 leading-relaxed font-medium -mt-2">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
