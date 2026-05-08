export default function OurStory() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text */}
                    <div>
                        <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span>Asal Usul Rempah</span>
                        </div>

                        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                            Cerita di Balik{" "}
                            <span className="text-orange-600">Platform Ini</span>
                        </h2>

                        <div className="space-y-5 text-gray-600 leading-relaxed font-medium text-lg">
                            <p>
                                Semuanya bermula dari sebuah pertanyaan sederhana yang mengganggu:
                                <span className="text-gray-900 font-semibold"> "Mengapa makanan bagus harus dibuang, sementara tetangga sebelah masih belum makan?"</span>
                            </p>
                            <p>
                                Kami menyaksikan langsung bagaimana restoran dan kafe setiap hari harus membuang
                                puluhan porsi makanan yang masih layak konsumsi — bukan karena tidak ada yang membutuhkan,
                                tetapi karena tidak ada sistem yang menghubungkan keduanya secara efisien.
                            </p>
                            <p>
                                Dari kegelisahan itulah <span className="text-orange-600 font-bold">Rempah</span> lahir.
                                Sebuah platform digital yang sederhana namun berdampak besar: menghubungkan surplus
                                makanan dari restoran dan individu, kepada mereka yang betul-betul membutuhkan —
                                melalui jaringan relawan yang bergerak dengan hati.
                            </p>
                        </div>
                    </div>

                    {/* Visual Timeline */}
                    <div className="relative">
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-orange-300 via-amber-300 to-green-300"></div>
                        <div className="space-y-8 pl-16">
                            {[
                                {
                                    year: "2024",
                                    color: "bg-orange-500",
                                    title: "Ide Muncul",
                                    desc: "Melihat realita food waste harian di lingkungan sekitar, kami mulai bermimpi tentang solusinya.",
                                    emoji: "💡",
                                },
                                {
                                    year: "2025",
                                    color: "bg-amber-500",
                                    title: "Rempah Dibangun",
                                    desc: "Platform pertama diluncurkan dengan fitur donasi sederhana, menghubungkan donatur dan relawan pertama kami.",
                                    emoji: "🚀",
                                },
                                {
                                    year: "2026",
                                    color: "bg-green-600",
                                    title: "Dampak Nyata",
                                    desc: "Ratusan porsi makanan berhasil diselamatkan, dan jaringan kebaikan terus berkembang setiap harinya.",
                                    emoji: "🌿",
                                },
                            ].map((item, i) => (
                                <div key={i} className="relative flex items-start gap-5">
                                    {/* Dot */}
                                    <div className={`absolute -left-[2.6rem] flex items-center justify-center w-9 h-9 rounded-full ${item.color} shadow-lg text-white text-sm font-bold flex-shrink-0`}>
                                        {item.emoji}
                                    </div>
                                    <div className="bg-stone-50 rounded-2xl p-6 border border-gray-100 shadow-sm w-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.year}</span>
                                        <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">{item.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
