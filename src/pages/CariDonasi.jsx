import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

export default function CariDonasi() {
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // State untuk Pencarian dan Debounce
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    
    // State untuk Modal Konfirmasi
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDonation, setSelectedDonation] = useState(null);
    const [isClaiming, setIsClaiming] = useState(false);
    
    const navigate = useNavigate();

    // 1. EFEK DEBOUNCE
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchQuery);
        }, 500);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    // 2. FETCH DATA
    useEffect(() => {
        fetchDonations(debouncedSearch);
    }, [debouncedSearch]);

    const fetchDonations = (keyword = "") => {
        setLoading(true);
        const url = keyword 
            ? `/donations?status=tersedia&search=${keyword}` 
            : `/donations?status=tersedia`;

        api.get(url)
            .then((res) => setDonations(res.data))
            .catch((err) => {
                console.error(err);
                toast.error("Gagal memuat daftar donasi");
            })
            .finally(() => setLoading(false));
    };

    const handleOpenModal = (donasi) => {
        setSelectedDonation(donasi);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedDonation(null);
    };

    const executeClaim = async () => {
        if (!selectedDonation) return;
        
        setIsClaiming(true);
        toast.promise(
            api.post(`/claim/${selectedDonation.id}`),
            {
                loading: 'Memproses klaim donasi...',
                success: () => {
                    navigate("/dashboard/relawan");
                    return 'Donasi berhasil diklaim! Silakan jemput makanan.';
                },
                error: (err) => {
                    const errData = err?.response?.data;
                    return errData?.message || 'Gagal mengklaim donasi.';
                },
            }
        ).finally(() => {
            setIsClaiming(false);
            handleCloseModal();
        });
    };

    return (
        <div className="p-8 relative">
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900">Cari Donasi Makanan</h1>
                <p className="text-gray-500 mt-1 font-medium">Temukan makanan berlebih di sekitar Anda yang siap untuk didistribusikan.</p>
            </div>

            <div className="mb-8 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input 
                    type="text" 
                    placeholder="Ketik lalu tunggu sesaat untuk mencari nama atau lokasi..." 
                    className="w-full bg-transparent border-none outline-none font-medium text-gray-700 placeholder-gray-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* SKELETON LOADING (Pengganti Spinner) */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Kita buat array palsu berisi 6 elemen untuk menampilkan 6 skeleton */}
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                        <div key={n} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col animate-pulse">
                            {/* Gambar Skeleton */}
                            <div className="w-full h-48 bg-gray-200"></div>
                            
                            {/* Konten Skeleton */}
                            <div className="p-5 flex-1 flex flex-col">
                                {/* Judul Skeleton */}
                                <div className="h-6 bg-gray-200 rounded-full w-3/4 mb-4"></div>
                                {/* Deskripsi Skeleton */}
                                <div className="h-4 bg-gray-200 rounded-full w-full mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded-full w-5/6 mb-6"></div>
                                
                                {/* Info Detail Skeleton */}
                                <div className="space-y-3 mb-6 mt-auto">
                                    <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
                                    <div className="h-4 bg-gray-200 rounded-full w-2/3"></div>
                                    <div className="h-4 bg-gray-200 rounded-full w-1/3"></div>
                                </div>

                                {/* Tombol Skeleton */}
                                <div className="pt-4 border-t border-gray-100">
                                    <div className="h-12 bg-gray-200 rounded-xl w-full"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : donations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* ... (KODE KARTU DONASI ASLI TETAP SAMA SEPERTI SEBELUMNYA) ... */}
                    {donations.map((donasi) => (
                        <div key={donasi.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group relative">
                            {donasi.photo_url ? (
                                <img src={donasi.photo_url} alt={donasi.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                            ) : (
                                <div className="w-full h-48 bg-green-50 flex items-center justify-center text-green-300">
                                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                            )}
                            
                            <div className="p-5 flex-1 flex flex-col bg-white relative z-10">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-gray-900 text-lg line-clamp-1">{donasi.title}</h3>
                                </div>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{donasi.description || "Tidak ada deskripsi."}</p>
                                
                                <div className="space-y-2 mb-6 mt-auto">
                                    <div className="flex items-start gap-2 text-sm text-gray-600">
                                        <svg className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        <span className="line-clamp-2">{donasi.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>Diambil sblm: <span className="font-semibold text-red-500">{new Date(donasi.pickup_deadline).toLocaleString("id-ID", { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short' })}</span></span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        <span className="font-bold">{donasi.total_portion} Porsi</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <button 
                                        onClick={() => handleOpenModal(donasi)}
                                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-green-500/30 flex items-center justify-center gap-2 hover:-translate-y-1"
                                    >
                                        Ambil & Salurkan
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Tidak ditemukan</h3>
                    <p className="text-gray-500 mb-6 max-w-md mx-auto">
                        {searchQuery ? `Tidak ada donasi makanan yang cocok dengan pencarian "${searchQuery}".` : "Saat ini belum ada donasi makanan yang tersedia untuk didistribusikan."}
                    </p>
                </div>
            )}

            {/* CUSTOM MODAL KONFIRMASI */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <div 
                        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" 
                        onClick={!isClaiming ? handleCloseModal : undefined}
                    ></div>
                    
                    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-md w-full relative z-10 transform transition-all scale-100 opacity-100">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl mb-5 mx-auto">
                            🤝
                        </div>
                        <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Klaim Donasi Ini?</h3>
                        <p className="text-center text-gray-600 mb-6 leading-relaxed">
                            Anda akan mengklaim <span className="font-bold text-green-700">{selectedDonation?.title}</span>. Dengan melakukan klaim, Anda berkomitmen untuk menjemput dan menyalurkan makanan ini tepat waktu.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3 mt-4">
                            <button 
                                onClick={handleCloseModal}
                                disabled={isClaiming}
                                className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50"
                            >
                                Batal
                            </button>
                            <button 
                                onClick={executeClaim}
                                disabled={isClaiming}
                                className="flex-1 py-3 px-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200 flex justify-center items-center gap-2 disabled:opacity-70"
                            >
                                {isClaiming ? (
                                    <><div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div> Memproses...</>
                                ) : "Ya, Saya Komitmen"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}