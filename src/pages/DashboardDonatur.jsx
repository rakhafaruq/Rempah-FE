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
        { label: "Dampak Nyata", value: `${data?.total_distribusi ?? 0} Porsi`, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />, color: "teal" },
    ];

    return (
        <div className="p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900">Halo, {user?.name?.split(" ")[0]}! 👋</h1>
                <p className="text-gray-500 mt-1 font-medium">Selamat datang di dashboard donatur Anda.</p>
            </div>

            {loading ? (
                <div className="flex items-center gap-3 text-gray-500"><div className="w-6 h-6 border-2 border-orange-400 border-t-transparent rounded-full animate-spin"></div>Memuat data...</div>
            ) : (
                <>
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {stats.map((s) => (
                            <div key={s.label} className="bg-white rounded-3xl p-6 shadow-md shadow-gray-100 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${s.color === "orange" ? "bg-orange-100 text-orange-600" : s.color === "green" ? "bg-green-100 text-green-600" : "bg-teal-100 text-teal-600"}`}>
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">{s.icon}</svg>
                                </div>
                                <p className="text-gray-500 text-sm font-medium mb-1">{s.label}</p>
                                <h3 className="text-3xl font-extrabold text-gray-900">{s.value}</h3>
                            </div>
                        ))}
                    </div>

                    {/* Aksi Cepat */}
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200 rounded-3xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Punya makanan berlebih hari ini?</h3>
                            <p className="text-gray-600 text-sm font-medium">Unggah donasi sekarang dan relawan akan segera mengklaim.</p>
                        </div>
                        <Link to="/donasi/baru" className="bg-orange-600 text-white font-bold px-6 py-3 rounded-2xl hover:bg-orange-700 transition-colors whitespace-nowrap shadow-md shadow-orange-500/20 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            Tambah Donasi
                        </Link>
                    </div>

                    {/* Galeri Distribusi */}
                    <div>
                        <h2 className="text-xl font-extrabold text-gray-900 mb-4">Bukti Distribusi Terbaru</h2>
                        {data?.gallery?.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {data.gallery.map((item, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        {item.photo && <img src={item.photo} alt="Bukti distribusi" className="w-full h-40 object-cover rounded-xl mb-3" />}
                                        <p className="text-gray-600 text-sm font-medium">{item.catatan ?? "Distribusi berhasil dilakukan."}</p>
                                        <p className="text-gray-400 text-xs mt-2">{new Date(item.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl p-10 border border-gray-100 text-center">
                                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
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
