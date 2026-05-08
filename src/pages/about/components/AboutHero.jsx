export default function AboutHero() {
    return (
        <section className="relative pt-28 pb-20 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-50 via-stone-50 to-green-50"></div>
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 -left-10 w-80 h-80 bg-green-300/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-green-800 px-5 py-2 rounded-full text-sm font-semibold border border-green-100 shadow-sm mb-6">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                    </span>
                    <span>Tentang Kami</span>
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tighter mb-6 leading-tight">
                    Kami Ada Karena{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-green-600">
                        Makanan Layak
                    </span>{" "}
                    Tak Boleh Terbuang
                </h1>

                {/* Subtitle */}
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
                    Rempah lahir dari kegelisahan melihat makanan layak konsumsi terbuang sia-sia
                    sementara saudara-saudara kita masih kelaparan. Kami hadir untuk menjembatani keduanya.
                </p>

                {/* Stats row */}
                <div className="mt-14 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                    {[
                        { number: "2.4T+", label: "Nilai Makanan Terbuang/Tahun di Indonesia", color: "text-orange-600" },
                        { number: "21M+", label: "Penduduk Indonesia Rawan Pangan", color: "text-green-700" },
                        { number: "100%", label: "Gratis & Berbasis Misi Sosial", color: "text-amber-600" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-gray-100 shadow-sm">
                            <p className={`text-2xl md:text-3xl font-extrabold ${stat.color}`}>{stat.number}</p>
                            <p className="text-xs text-gray-500 mt-1 font-medium leading-snug">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
