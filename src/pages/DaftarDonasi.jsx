import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

export default function DaftarDonasi() {
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [donationToDelete, setDonationToDelete] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const fetchDonations = () => {
        setLoading(true);
        api.get("/donor/donations")
            .then((res) => setDonations(res.data))
            .catch(console.error)
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchDonations();
    }, []);

    const handleOpenModal = (donasi) => {
        setDonationToDelete(donasi);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setDonationToDelete(null);
    };

    const executeDelete = async () => {
        if (!donationToDelete) return;

        setIsDeleting(true);

        toast
            .promise(api.delete(`/donations/${donationToDelete.id}`), {
                loading: "Menghapus donasi...",
                success: () => {
                    fetchDonations();
                    return "Donasi berhasil dihapus!";
                },
                error: "Gagal menghapus donasi.",
            })
            .finally(() => {
                setIsDeleting(false);
                handleCloseModal();
            });
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case "tersedia":
                return <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Tersedia</span>;
            case "diklaim":
                return <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">Diklaim</span>;
            case "selesai":
                return <span className="bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full">Selesai</span>;
            default:
                return <span className="bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1 rounded-full capitalize">{status}</span>;
        }
    };

    return (
        <div className="p-8 relative">
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900">Donasi Saya</h1>
                    <p className="text-gray-500 mt-1 font-medium">Kelola donasi makanan yang telah Anda unggah.</p>
                </div>
                <Link to="/donasi/baru" className="bg-orange-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-700 transition-colors shadow-md shadow-orange-500/20 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Tambah Donasi
                </Link>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((n) => (
                        <div key={n} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col animate-pulse">
                            <div className="w-full h-48 bg-stone-200"></div>
                            <div className="p-5 flex-1">
                                <div className="flex justify-between mb-4">
                                    <div className="h-6 bg-stone-200 rounded-full w-2/3"></div>
                                    <div className="h-6 bg-stone-200 rounded-full w-16"></div>
                                </div>
                                <div className="h-4 bg-stone-200 rounded-full w-full mb-2"></div>
                                <div className="h-4 bg-stone-200 rounded-full w-5/6 mb-6"></div>
                                <div className="space-y-3">
                                    <div className="h-3 bg-stone-200 rounded-full w-1/2"></div>
                                    <div className="h-3 bg-stone-200 rounded-full w-1/3"></div>
                                </div>
                                <div className="flex gap-2 pt-6 mt-auto border-t border-gray-50">
                                    <div className="h-10 bg-stone-200 rounded-xl flex-1"></div>
                                    <div className="h-10 bg-stone-200 rounded-xl flex-1"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : donations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {donations.map((donasi) => (
                        <div key={donasi.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col">
                            {donasi.photo_url ? (
                                <img src={donasi.photo_url} alt={donasi.title} className="w-full h-48 object-cover" />
                            ) : (
                                <div className="w-full h-48 bg-orange-50 flex items-center justify-center text-orange-300">
                                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                            )}

                            <div className="p-5 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-gray-900 text-lg line-clamp-1">{donasi.title}</h3>
                                    {getStatusBadge(donasi.status)}
                                </div>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{donasi.description || "Tidak ada deskripsi."}</p>

                                <div className="space-y-2 mb-6 mt-auto">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="truncate">{donasi.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{new Date(donasi.pickup_deadline).toLocaleString("id-ID")}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <span>{donasi.total_portion} Porsi</span>
                                    </div>
                                </div>

                                <div className="flex gap-2 pt-4 border-t border-gray-100">
                                    <Link to={`/donasi/edit/${donasi.id}`} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 rounded-xl text-center transition-colors text-sm">
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleOpenModal(donasi)}
                                        className="flex-1 cursor-pointer bg-red-50 hover:bg-red-100 text-red-600 font-bold py-2 rounded-xl transition-colors text-sm"
                                    >
                                        Hapus
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-3xl p-12 border border-gray-100 text-center shadow-sm">
                    <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Belum ada donasi</h3>
                    <p className="text-gray-500 mb-6 max-w-md mx-auto">Anda belum mengunggah donasi makanan apa pun. Mulai bagikan makanan berlebih Anda sekarang!</p>
                    <Link to="/donasi/baru" className="inline-block bg-orange-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-700 transition-colors shadow-md shadow-orange-500/20">
                        Tambah Donasi Pertama
                    </Link>
                </div>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" onClick={!isDeleting ? handleCloseModal : undefined}></div>

                    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-md w-full relative z-10">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-3xl mb-5 mx-auto">🗑️</div>
                        <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Hapus Donasi?</h3>
                        <p className="text-center text-gray-600 mb-6 leading-relaxed">
                            Apakah Anda yakin ingin menghapus donasi <span className="font-bold text-red-600">{donationToDelete?.title}</span>? Tindakan ini tidak dapat dibatalkan.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 mt-4">
                            <button onClick={handleCloseModal} disabled={isDeleting} className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50">
                                Batal
                            </button>
                            <button
                                onClick={executeDelete}
                                disabled={isDeleting}
                                className="flex-1 py-3 px-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-200 flex justify-center items-center gap-2 disabled:opacity-70"
                            >
                                {isDeleting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div> Menghapus...
                                    </>
                                ) : (
                                    "Ya, Hapus Donasi"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
