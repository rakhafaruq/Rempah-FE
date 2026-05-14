export default function OurMission() {
    return (
        <section className="py-20 bg-gradient-to-br from-green-900 to-green-800 relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-white/10 text-green-200 px-4 py-1.5 rounded-full text-sm font-bold mb-5 border border-white/10">
                        <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <span>Misi & Visi</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Apa yang Kami{" "}
                        <span className="text-orange-400">Perjuangkan</span>
                    </h2>
                </div>

                {/* Mission & Vision cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:bg-white/15 transition-all duration-300">
                        <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-7 h-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                            </svg>
                        </div>
                        <span className="text-orange-400 font-bold text-sm uppercase tracking-widest">Misi Kami</span>
                        <h3 className="text-2xl font-extrabold text-white mt-2 mb-4">Selamatkan Makanan, Selamatkan Manusia</h3>
                        <p className="text-green-200 leading-relaxed text-lg">
                            Membangun ekosistem digital yang memungkinkan siapa saja — restoran, individu, maupun komunitas —
                            untuk berpartisipasi dalam gerakan penyelamatan makanan secara mudah, cepat, dan terpercaya.
                            Setiap porsi yang diselamatkan adalah kemenangan bersama.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:bg-white/15 transition-all duration-300">
                        <div className="w-14 h-14 bg-green-400/20 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-7 h-7 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <span className="text-green-300 font-bold text-sm uppercase tracking-widest">Visi Kami</span>
                        <h3 className="text-2xl font-extrabold text-white mt-2 mb-4">Indonesia Bebas Food Waste</h3>
                        <p className="text-green-200 leading-relaxed text-lg">
                            Menjadi platform penyelamatan makanan nomor satu di Indonesia dengan jaringan donatur dan
                            relawan aktif di setiap kota, sehingga tidak ada lagi makanan layak konsumsi yang
                            berakhir di tempat sampah sementara ada yang kelaparan.
                        </p>
                    </div>
                </div>

                {/* Core values pills */}
                <div className="text-center">
                    <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-5">Nilai yang Kami Pegang</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["Empati", "Transparansi", "Kecepatan", "Kolaborasi", "Dampak Nyata", "Inklusif"].map((val) => (
                            <span key={val} className="bg-white/10 text-green-100 border border-white/10 px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-500/20 hover:text-orange-200 hover:border-orange-400/30 transition-all duration-300 cursor-default">
                                {val}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
