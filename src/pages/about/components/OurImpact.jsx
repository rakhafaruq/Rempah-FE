export default function OurImpact() {
    const impactStats = [
        {
            icon: "🍱",
            number: "3.200+",
            unit: "Porsi",
            label: "Makanan Berhasil Diselamatkan",
            color: "from-orange-500 to-amber-500",
            bgLight: "bg-orange-50",
        },
        {
            icon: "🤝",
            number: "140+",
            unit: "Relawan",
            label: "Aktif Bergerak di Lapangan",
            color: "from-green-600 to-teal-500",
            bgLight: "bg-green-50",
        },
        {
            icon: "🏪",
            number: "58+",
            unit: "Mitra",
            label: "Restoran & Kafe Donatur",
            color: "from-amber-500 to-orange-400",
            bgLight: "bg-amber-50",
        },
        {
            icon: "📍",
            number: "7",
            unit: "Kota",
            label: "Titik Distribusi Aktif",
            color: "from-teal-600 to-green-500",
            bgLight: "bg-teal-50",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span>Dampak Nyata</span>
                    </div>
                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                        Angka yang Bicara
                    </h2>
                    <p className="text-lg text-gray-500 font-medium max-w-xl mx-auto">
                        Bukan sekadar janji — ini adalah hasil nyata dari setiap kebaikan kecil yang terhimpun menjadi gerakan besar.
                    </p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {impactStats.map((stat, i) => (
                        <div
                            key={i}
                            className={`${stat.bgLight} rounded-3xl p-8 text-center border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                        >
                            <div className="text-4xl mb-4">{stat.icon}</div>
                            <div className={`text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                                {stat.number}
                            </div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mt-1">{stat.unit}</div>
                            <p className="text-gray-600 text-sm font-medium mt-3 leading-snug">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Quote */}
                <div className="mt-16 bg-gradient-to-r from-orange-50 to-green-50 rounded-3xl p-10 border border-orange-100 text-center">
                    <svg className="w-10 h-10 text-orange-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-2xl font-bold text-gray-800 max-w-3xl mx-auto leading-relaxed italic">
                        "Setiap porsi makanan yang diselamatkan adalah doa yang terwujud — untuk yang memberi, maupun yang menerima."
                    </p>
                    <p className="text-gray-400 font-semibold mt-4 text-sm">— Tim Rempah</p>
                </div>
            </div>
        </section>
    );
}
