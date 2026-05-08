import { Link } from "react-router-dom";

export default function AboutCTA() {
    return (
        <section className="py-20 bg-stone-50">
            <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-orange-200">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
                    Jadilah Bagian dari{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-green-600">
                        Gerakan Ini
                    </span>
                </h2>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium mb-10">
                    Bergabunglah bersama ratusan donatur dan relawan yang sudah membuktikan bahwa
                    kebaikan kecil, jika dilakukan bersama, bisa mengubah dunia.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/register"
                        className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white font-bold px-9 py-4 rounded-2xl shadow-lg shadow-orange-200 hover:bg-orange-700 hover:-translate-y-0.5 transition-all duration-300 text-lg"
                    >
                        Mulai Berdonasi
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                    <Link
                        to="/register?role=volunteer"
                        className="inline-flex items-center justify-center gap-2 bg-white text-green-800 border-2 border-green-700 font-bold px-9 py-4 rounded-2xl hover:bg-green-50 hover:-translate-y-0.5 transition-all duration-300 text-lg"
                    >
                        Daftar sebagai Relawan
                    </Link>
                </div>

                {/* Separator */}
                <div className="mt-16 flex items-center gap-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200"></div>
                    <p className="text-gray-400 text-sm font-medium flex-shrink-0">Atau pelajari lebih lanjut</p>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200"></div>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <Link to="/how-it-works" className="text-gray-600 hover:text-orange-600 font-semibold text-sm transition-colors flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Cara Kerja Platform
                    </Link>
                    <span className="text-gray-200">|</span>
                    <Link to="/partners" className="text-gray-600 hover:text-green-700 font-semibold text-sm transition-colors flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Mitra Kami
                    </Link>
                </div>
            </div>
        </section>
    );
}
