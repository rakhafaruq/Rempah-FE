import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

export default function AdminLayout() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const executeLogout = async () => {
        setIsLoggingOut(true);
        toast.promise(
            logout(),
            {
                loading: 'Proses keluar...',
                success: 'Berhasil keluar. Sampai jumpa!',
                error: 'Terjadi kesalahan saat keluar.',
            }
        ).then(() => {
            navigate("/");
        }).finally(() => {
            setIsLoggingOut(false);
            setIsLogoutModalOpen(false);
        });
    };

    const isDonatur = user?.role === "donatur";

    const donaturMenus = [
        { to: "/dashboard/donatur", label: "Dashboard", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /> },
        { to: "/donasi/saya", label: "Donasi Saya", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /> },
        { to: "/donasi/baru", label: "Tambah Donasi", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /> },
    ];

    const relawanMenus = [
        { to: "/dashboard/relawan", label: "Dashboard", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /> },
        { to: "/donations", label: "Cari Donasi", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> },
    ];

    const menus = isDonatur ? donaturMenus : relawanMenus;

    return (
        <div className="h-screen flex bg-stone-100 font-sans overflow-hidden relative">
            {/* Sidebar */}
            <aside className="w-64 h-screen bg-green-900 flex flex-col shadow-2xl flex-shrink-0 z-10">
                <div className="p-6 border-b border-green-800">
                    <Link to="/" className="text-2xl font-extrabold text-white tracking-tight">REMPAH</Link>
                    <p className="text-green-400 text-xs mt-1 font-medium">Rescue Makanan Penuh Berkah</p>
                </div>

                {/* User Info */}
                <div className="p-4 m-4 bg-green-800/50 rounded-2xl border border-green-700/50">
                    <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold text-lg mb-2">
                        {user?.name?.[0]?.toUpperCase() ?? "?"}
                    </div>
                    <p className="text-white font-semibold text-sm leading-tight truncate">{user?.name}</p>
                    <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${isDonatur ? "bg-orange-500/20 text-orange-300" : "bg-teal-500/20 text-teal-300"}`}>
                        {user?.role}
                    </span>
                </div>

                {/* Menu */}
                <nav className="flex-1 px-4 py-2 space-y-1">
                    {menus.map((m) => (
                        <Link key={m.to} to={m.to}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-green-200 hover:text-white hover:bg-green-800 transition-all duration-200 font-medium text-sm">
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">{m.icon}</svg>
                            {m.label}
                        </Link>
                    ))}
                </nav>

                {/* Logout Button (Trigger Modal) */}
                <div className="p-4 border-t border-green-800">
                    <button onClick={() => setIsLogoutModalOpen(true)}
                        className="w-full cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl text-red-300 hover:text-white hover:bg-red-700/50 transition-all duration-200 font-medium text-sm">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Keluar
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <Outlet />
            </main>

            {/* MODAL KONFIRMASI LOGOUT */}
            {isLogoutModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <div 
                        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" 
                        onClick={!isLoggingOut ? () => setIsLogoutModalOpen(false) : undefined}
                    ></div>
                    
                    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-md w-full relative z-10">
                        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-3xl mb-5 mx-auto">
                            🚪
                        </div>
                        <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Yakin Ingin Keluar?</h3>
                        <p className="text-center text-gray-600 mb-6 leading-relaxed">
                            Sesi Anda akan diakhiri dan Anda harus masuk kembali untuk mengelola atau mengklaim donasi makanan.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3 mt-4">
                            <button 
                                onClick={() => setIsLogoutModalOpen(false)}
                                disabled={isLoggingOut}
                                className="cursor-pointer flex-1 py-3 px-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50"
                            >
                                Batal
                            </button>
                            <button 
                                onClick={executeLogout}
                                disabled={isLoggingOut}
                                className="cursor-pointer flex-1 py-3 px-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-200 flex justify-center items-center gap-2 disabled:opacity-70"
                            >
                                {isLoggingOut ? (
                                    <><div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div> Memproses...</>
                                ) : "Ya, Keluar Akun"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}