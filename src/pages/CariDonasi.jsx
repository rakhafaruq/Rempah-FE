import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function CariDonasi() {
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [claimingId, setClaimingId] = useState(null);
    const navigate = useNavigate();

    const fetchDonations = () => {
        setLoading(true);
        api.get("/donations?status=tersedia")
            .then((res) => setDonations(res.data))
            .catch(console.error)
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchDonations();
    }, []);

    const handleClaim = async (id) => {
        if (!window.confirm("Apakah Anda yakin ingin mengklaim donasi ini? Anda harus mengambil dan mendistribusikannya.")) return;

        setClaimingId(id);
        try {
            await api.post(`/claim/${id}`);
            alert("Donasi berhasil diklaim!");
            navigate("/dashboard/relawan");
        } catch (error) {
            const errData = error?.response?.data;
            alert(errData?.message || "Gagal mengklaim donasi.");
            console.error("Gagal klaim:", error);
        } finally {
            setClaimingId(null);
        }
    };

    const filteredDonations = donations.filter(d => 
        d.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        d.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900">Cari Donasi Makanan</h1>
                <p className="text-gray-500 mt-1 font-medium">Temukan makanan berlebih di sekitar Anda yang siap untuk didistribusikan.</p>
            </div>

            <div className="mb-8 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input 
                    type="text" 
                    placeholder="Cari berdasarkan nama makanan atau lokasi..." 
                    className="w-full bg-transparent border-none outline-none font-medium text-gray-700 placeholder-gray-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {loading ? (
                <div className="flex items-center justify-center gap-3 text-gray-500 py-12"><div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>Memuat donasi...</div>
            ) : filteredDonations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDonations.map((donasi) => (
                        <div key={donasi.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col">
                            {donasi.photo_url ? (
                                <img src={donasi.photo_url} alt={donasi.title} className="w-full h-48 object-cover" />
                            ) : (
                                <div className="w-full h-48 bg-green-50 flex items-center justify-center text-green-300">
                                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                            )}
                            
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-gray-900 text-lg line-clamp-1">{donasi.title}</h3>
                                </div>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{donasi.description || "Tidak ada deskripsi."}</p>
                                
                                <div className="space-y-2 mb-6 mt-auto">
                                    <div className="flex items-start gap-2 text-sm text-gray-600">
                                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        <span className="line-clamp-2">{donasi.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>Diambil sblm: <span className="font-semibold text-red-500">{new Date(donasi.pickup_deadline).toLocaleString("id-ID", { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short' })}</span></span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        <span className="font-bold">{donasi.total_portion} Porsi</span>
                                    </div>
                                    {donasi.donor?.user && (
                                        <div className="flex items-center gap-2 text-sm text-gray-600 pt-1">
                                            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                            <span>Oleh: {donasi.donor.user.name}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <button 
                                        onClick={() => handleClaim(donasi.id)}
                                        disabled={claimingId === donasi.id}
                                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors shadow-md shadow-green-500/30 flex items-center justify-center gap-2 disabled:opacity-70"
                                    >
                                        {claimingId === donasi.id ? (
                                            <><div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div> Memproses...</>
                                        ) : "Klaim Donasi"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-3xl p-12 border border-gray-100 text-center shadow-sm">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Belum ada donasi baru</h3>
                    <p className="text-gray-500 mb-6 max-w-md mx-auto">Saat ini belum ada donasi makanan yang tersedia untuk didistribusikan. Silakan cek lagi nanti.</p>
                </div>
            )}
        </div>
    );
}
