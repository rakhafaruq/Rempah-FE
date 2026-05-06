import { Outlet, Link } from "react-router-dom";
import logo from "/src/assets/logo.jpeg";
import logoRemove from "/src/assets/logo-remove.png";

export default function MainLayout() {
    return (
        // Menggunakan latar belakang stone-50 (krem sangat muda) untuk menyesuaikan background logo
        <div className="min-h-screen flex flex-col font-sans bg-stone-50 text-gray-900">
            {/* NAVBAR */}
            <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-orange-100">
                <div className="max-w-8xl mx-auto px-4 h-20 flex items-center justify-between">
                    {/* Logo Brand - Menggunakan warna Burnt Orange */}
                    <Link to="/" className="flex items-center transition-transform hover:scale-105 duration-300">
                        {/* Atur tinggi gambar (h-12 = 48px) agar pas dengan navbar */}
                        <img src={logoRemove} alt="Logo Rempah" className="h-20 w-auto object-contain mix-blend-multiply" />
                    </Link>

                    <div className="space-x-4 flex items-center">
                        <Link to="/login" className="text-green-800 hover:text-orange-600 font-semibold transition-colors">
                            Masuk
                        </Link>
                        {/* Tombol Primary menggunakan Burnt Orange */}
                        <Link to="/register" className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-700 transition-all shadow-md shadow-orange-200">
                            Mulai Sekarang
                        </Link>
                    </div>
                </div>
            </nav>

            {/* AREA KONTEN */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* FOOTER - Menggunakan Forest Green yang elegan */}
            <footer className="bg-green-900 border-t border-green-800 py-10 mt-12">
                <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                    <h2 className="text-2xl font-bold text-orange-500 mb-2">REMPAH</h2>
                    <p className="text-green-100 text-sm mb-6">Rescue Makanan Penuh Berkah</p>
                    <p className="text-green-400 text-xs">&copy; 2026 Sistem Donasi Rempah. Dibuat dengan misi kemanusiaan.</p>
                </div>
            </footer>
        </div>
    );
}
