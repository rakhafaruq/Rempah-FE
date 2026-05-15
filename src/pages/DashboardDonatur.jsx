import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

export default function DashboardDonatur() {
    const { user } = useAuth();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/donor/dashboard")
            .then((res) => setData(res.data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    const stats = [
        { label: "Total Donasi", value: data?.total_donasi ?? 0, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />, color: "orange" },
        { label: "Total Distribusi", value: data?.total_distribusi ?? 0, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />, color: "green" },
        {
            label: "Dampak Nyata",
            value: `${data?.total_distribusi ?? 0} Porsi`,
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
            color: "teal",
        },
    ];

    const colorClasses = {
        orange: "bg-orange-100 text-orange-600",
        green: "bg-green-100 text-green-600",
        teal: "bg-teal-100 text-teal-600",
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Halo, {user?.name}! 👋</h1>
                <p className="text-gray-500 mt-1 font-medium text-sm sm:text-base">Selamat datang di dashboard donatur Anda.</p>
            </div>

            {loading ? (
                <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
                    {[1, 2, 3].map((n) => (
                        <div key={n} className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm animate-pulse">
                            <div className="w-9 h-9 sm:w-12 sm:h-12 bg-stone-200 rounded-xl sm:rounded-2xl mb-3 sm:mb-4"></div>
                            <div className="h-3 bg-stone-200 rounded-full w-3/4 mb-2"></div>
                            <div className="h-6 bg-stone-200 rounded-full w-1/2"></div>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
                        {stats.map((s) => (
                            <div key={s.label} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md shadow-gray-100 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 ${colorClasses[s.color]}`}>
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {s.icon}
                                    </svg>
                                </div>
                                <p className="text-gray-500 text-[10px] sm:text-sm font-medium mb-0.5 sm:mb-1 leading-tight">{s.label}</p>
                                <h3 className="text-xl sm:text-3xl font-extrabold text-gray-900 truncate">{s.value}</h3>
                            </div>
                        ))}
                    </div>

                    {/* CTA Tambah Donasi */}
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <h3 className="font-bold text-gray-900 text-base sm:text-lg">Punya makanan berlebih hari ini?</h3>
                            <p className="text-gray-600 text-xs sm:text-sm font-medium mt-0.5">Unggah donasi sekarang dan relawan akan segera mengklaim.</p>
                        </div>
                        <Link to="/donasi/baru" className="w-full sm:w-auto bg-orange-600 text-white font-bold px-5 py-3 rounded-xl sm:rounded-2xl hover:bg-orange-700 transition-colors whitespace-nowrap shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 text-sm">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Tambah Donasi
                        </Link>
                    </div>

                    {/* Galeri Distribusi */}
                    <div>
                        <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-3 sm:mb-4">Bukti Distribusi Terbaru</h2>
                        {data?.gallery?.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                                {data.gallery.map((item, i) => (
                                    <div key={i} className="bg-white rounded-2xl sm:rounded-[2rem] p-3 sm:p-4 border border-gray-100 shadow-md shadow-gray-200/40 hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">

                                        <div className="relative rounded-xl sm:rounded-[1.5rem] overflow-hidden mb-3 sm:mb-5 bg-gray-100">
                                            {item.photo_path ? (
                                                <img
                                                    src={item.photo_path}
                                                    alt="Bukti distribusi"
                                                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                                />
                                            ) : (
                                                <div className="w-full aspect-[4/5] flex items-center justify-center text-gray-400">
                                                    <svg className="w-8 h-8 sm:w-12 sm:h-12 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                </div>
                                            )}
                                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm text-[9px] sm:text-[10px] font-bold text-gray-700 flex items-center gap-1">
                                                <svg className="w-2.5 h-2.5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                {new Date(item.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "short" })}
                                            </div>
                                        </div>

                                        <div className="flex-1 px-0.5 sm:px-1 flex flex-col">
                                            <p className="text-gray-900 text-xs sm:text-sm font-semibold leading-relaxed mb-3 sm:mb-4 italic line-clamp-3 relative">
                                                <span className="text-2xl sm:text-3xl text-orange-200 absolute -top-1 sm:-top-2 -left-0.5 sm:-left-1 font-serif leading-none">"</span>
                                                <span className="relative z-10 pl-2">{item.story ?? "Distribusi berhasil dilakukan dengan lancar."}</span>
                                            </p>

                                            <div className="space-y-2 mt-auto bg-stone-50/80 border border-stone-100 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5">
                                                <div className="flex gap-2 text-xs">
                                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                                    </div>
                                                    <div className="flex flex-col min-w-0">
                                                        <span className="text-gray-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">Diterima Oleh</span>
                                                        <span className="text-gray-800 font-medium leading-snug text-[10px] sm:text-xs truncate">{item.receiver_name} <span className="text-gray-500 font-normal">({item.receiver_type})</span></span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 text-xs">
                                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                                    </div>
                                                    <div className="flex flex-col min-w-0">
                                                        <span className="text-gray-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">Relawan</span>
                                                        <span className="text-gray-800 font-medium leading-snug text-[10px] sm:text-xs truncate">{item.claim?.volunteer?.name ?? 'Anonim'}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl p-10 border border-gray-100 text-center">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="text-gray-500 font-medium">Belum ada bukti distribusi.</p>
                                <p className="text-gray-400 text-sm mt-1">Tambah donasi pertama Anda untuk mulai!</p>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
