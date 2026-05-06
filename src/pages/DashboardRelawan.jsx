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

    const colorMap = { green: "bg-green-100 text-green-600", orange: "bg-orange-100 text-orange-600", teal: "bg-teal-100 text-teal-600" };

    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900">Halo, {user?.name?.split(" ")[0]}! 🚴</h1>
                <p className="text-gray-500 mt-1 font-medium">Selamat datang, Pahlawan Pangan!</p>
            </div>

            {loading ? (
                <div className="flex items-center gap-3 text-gray-500"><div className="w-6 h-6 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>Memuat data...</div>
            ) : (
                <>
                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {stats.map((s) => (
                            <div key={s.label} className="bg-white rounded-3xl p-6 shadow-md shadow-gray-100 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${colorMap[s.color]}`}>
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">{s.icon}</svg>
                                </div>
                                <p className="text-gray-500 text-sm font-medium mb-1">{s.label}</p>
                                <h3 className="text-3xl font-extrabold text-gray-900">{s.value}</h3>
                            </div>
                        ))}
                    </div>

                    {/* CTA Cari Donasi */}
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-3xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Ada donasi baru yang menunggu!</h3>
                            <p className="text-gray-600 text-sm font-medium">Temukan makanan di sekitar Anda dan bantu distribusikan.</p>
                        </div>
                        <Link to="/donations" className="bg-green-700 text-white font-bold px-6 py-3 rounded-2xl hover:bg-green-800 transition-colors whitespace-nowrap shadow-md shadow-green-500/20 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            Cari Donasi
                        </Link>
                    </div>

                    {/* Klaim Aktif */}
                    <div className="mb-8">
                        <h2 className="text-xl font-extrabold text-gray-900 mb-4">Klaim Aktif Saya</h2>
                        {data?.klaim_aktif?.length > 0 ? (
                            <div className="space-y-3">
                                {data.klaim_aktif.map((klaim) => (
                                    <div key={klaim.id} className="bg-white rounded-2xl p-5 border border-orange-100 shadow-sm flex items-center justify-between">
                                        <div>
                                            <h4 className="font-bold text-gray-900">{klaim.donation?.nama_makanan ?? "Makanan"}</h4>
                                            <p className="text-gray-500 text-sm font-medium">Diklaim pada {new Date(klaim.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "long" })}</p>
                                        </div>
                                        <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full">Sedang Berlangsung</span>
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
                        <h2 className="text-xl font-extrabold text-gray-900 mb-4">Riwayat Distribusi</h2>
                        {data?.riwayat?.length > 0 ? (
                            <div className="space-y-3">
                                {data.riwayat.map((item) => (
                                    <div key={item.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.donation?.nama_makanan ?? "Makanan"}</h4>
                                            <p className="text-gray-500 text-sm font-medium">{new Date(item.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</p>
                                        </div>
                                        <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full">Selesai ✓</span>
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
