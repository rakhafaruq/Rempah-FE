import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

export default function DashboardRelawan() {
    const { user } = useAuth();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/volunteer/dashboard")
            .then((res) => setData(res.data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    const stats = [
        { label: "Total Klaim", value: data?.total_klaim ?? 0, color: "green", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /> },
        { label: "Klaim Aktif", value: data?.klaim_aktif?.length ?? 0, color: "orange", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> },
        { label: "Selesai Distribusi", value: data?.riwayat?.length ?? 0, color: "teal", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /> },
    ];

    const colorMap = {
        green: "bg-green-100 text-green-600",
        orange: "bg-orange-100 text-orange-600",
        teal: "bg-teal-100 text-teal-600"
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Halo, {user?.name?.split(" ")[0]}! 🚴</h1>
                <p className="text-gray-500 mt-1 font-medium text-sm sm:text-base">Selamat datang, Pahlawan Pangan!</p>
            </div>

            {loading ? (
                <div className="flex items-center gap-3 text-gray-500">
                    <div className="w-6 h-6 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
                    Memuat data...
                </div>
            ) : (
                <>
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
                        {stats.map((s) => (
                            <div key={s.label} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md shadow-gray-100 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 ${colorMap[s.color]}`}>
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">{s.icon}</svg>
                                </div>
                                <p className="text-gray-500 text-[10px] sm:text-sm font-medium mb-0.5 sm:mb-1 leading-tight">{s.label}</p>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{s.value}</h3>
                            </div>
                        ))}
                    </div>

                    {/* CTA Cari Donasi */}
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <h3 className="font-bold text-gray-900 text-base sm:text-lg">Ada donasi baru yang menunggu!</h3>
                            <p className="text-gray-600 text-xs sm:text-sm font-medium mt-0.5">Temukan makanan di sekitar Anda dan bantu distribusikan.</p>
                        </div>
                        <Link to="/donations" className="w-full sm:w-auto bg-green-700 text-white font-bold px-5 py-3 rounded-xl sm:rounded-2xl hover:bg-green-800 transition-colors whitespace-nowrap shadow-md shadow-green-500/20 flex items-center justify-center gap-2 text-sm">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            Cari Donasi
                        </Link>
                    </div>

                    {/* Klaim Aktif */}
                    <div className="mb-6 sm:mb-8">
                        <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-3 sm:mb-4">Klaim Aktif Saya</h2>
                        {data?.klaim_aktif?.length > 0 ? (
                            <div className="space-y-3">
                                {data.klaim_aktif.map((klaim) => (
                                    <div key={klaim.id} className="bg-white rounded-2xl p-4 sm:p-5 border border-orange-100 shadow-sm">
                                        {/* Title row */}
                                        <div className="flex items-start justify-between gap-2 mb-3">
                                            <h4 className="font-bold text-gray-900 text-base sm:text-lg leading-tight">{klaim.donation?.title ?? "Makanan"}</h4>
                                            <span className="bg-orange-100 text-orange-700 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                                                Berlangsung
                                            </span>
                                        </div>

                                        {/* Info grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                                            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                <span className="truncate">{klaim.donation?.location ?? "-"}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                <span className="font-bold">{klaim.donation?.total_portion ?? 0} Porsi</span>
                                            </div>
                                            {klaim.donation?.donor?.user && (
                                                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
                                                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                                    <span>Donatur: {klaim.donation.donor.user.name}</span>
                                                </div>
                                            )}
                                            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>Diklaim: {new Date(klaim.created_at).toLocaleString("id-ID", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" })}</span>
                                            </div>
                                        </div>

                                        {/* Action button */}
                                        <Link
                                            to={`/distribusi/baru/${klaim.id}`}
                                            className="w-full flex items-center justify-center gap-2 text-sm bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-xl font-bold transition-colors shadow-sm"
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            Selesaikan Distribusi
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
                                <p className="text-gray-500 font-medium">Tidak ada klaim aktif saat ini.</p>
                            </div>
                        )}
                    </div>

                    {/* Riwayat */}
                    <div>
                        <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-3 sm:mb-4">Riwayat Distribusi</h2>
                        {data?.riwayat?.length > 0 ? (
                            <div className="space-y-3">
                                {data.riwayat.map((item) => (
                                    <div key={item.id} className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm">
                                        {/* Title + badge */}
                                        <div className="flex items-start justify-between gap-2 mb-3">
                                            <h4 className="font-bold text-gray-900 text-base sm:text-lg leading-tight">{item.donation?.title ?? "Makanan"}</h4>
                                            <span className="bg-green-100 text-green-700 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">Selesai ✓</span>
                                        </div>

                                        {/* Info grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                <span className="truncate">{item.donation?.location ?? "-"}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                <span className="font-bold">{item.donation?.total_portion ?? 0} Porsi</span>
                                            </div>
                                            {item.donation?.donor?.user && (
                                                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
                                                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                                    <span>Donatur: {item.donation.donor.user.name}</span>
                                                </div>
                                            )}
                                            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>Selesai: {new Date(item.created_at).toLocaleString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
                                <p className="text-gray-500 font-medium">Belum ada riwayat distribusi.</p>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
