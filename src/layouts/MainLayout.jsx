import { Outlet, Link, NavLink } from "react-router-dom";
import logoRemove from "/src/assets/logo-remove.png";

export default function MainLayout() {
    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-orange-600 font-semibold transition-colors"
            : "text-green-800 hover:text-orange-600 font-semibold transition-colors";

    return (
        <div className="min-h-screen flex flex-col font-sans bg-stone-50 text-gray-900">
            {/* NAVBAR */}
            <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-orange-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center transition-transform hover:scale-105 duration-300 flex-shrink-0">
                        <img src={logoRemove} alt="Logo Rempah" className="h-20 w-auto object-contain mix-blend-multiply" />
                    </Link>

                    {/* Nav Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink to="/how-it-works" className={navLinkClass}>
                            How It Works
                        </NavLink>
                        <NavLink to="/partners" className={navLinkClass}>
                            Partners
                        </NavLink>
                        <NavLink to="/about" className={navLinkClass}>
                            About
                        </NavLink>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        <Link to="/login" className="text-green-800 hover:text-orange-600 font-semibold transition-colors hidden sm:block">
                            Login
                        </Link>
                        <Link to="/register" className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-700 transition-all shadow-md shadow-orange-200 flex items-center gap-1.5">
                            Join Rescue
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* CONTENT */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* FOOTER */}
            <footer className="bg-[#2B4522] pt-16 pb-8 border-t-0 text-sm mt-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
                        {/* Kolom Kiri: Info */}
                        <div className="md:col-span-5 space-y-6">
                            <div className="flex items-center">
                                <img src={logoRemove} alt="Logo Rempah" className="h-20 w-auto object-contain brightness-0 invert opacity-90" />
                            </div>
                            <p className="leading-relaxed text-[15px] pr-10 text-[#A5C09B]">
                                Platform B2S (Business-to-Social) yang menghubungkan donatur surplus pangan dengan relawan mahasiswa untuk membantu masyarakat rentan.
                            </p>
                            <p className="text-orange-500 font-bold text-[15px]">
                                "Selamatkan Berlebihnya, Sebarkan Berkahnya"
                            </p>
                        </div>

                        {/* Kolom Tengah: Menu */}
                        <div className="md:col-span-3">
                            <h4 className="text-white font-bold text-lg mb-6">Menu</h4>
                            <ul className="space-y-4">
                                <li><Link to="/" className="text-[#A5C09B] hover:text-white transition-colors">Beranda</Link></li>
                                <li><Link to="/how-it-works" className="text-[#A5C09B] hover:text-white transition-colors">Cara Kerja</Link></li>
                                <li><Link to="/partners" className="text-[#A5C09B] hover:text-white transition-colors">Mitra</Link></li>
                                <li><Link to="/about" className="text-[#A5C09B] hover:text-white transition-colors">Tentang Kami</Link></li>
                            </ul>
                        </div>

                        {/* Kolom Kanan: Kontak */}
                        <div className="md:col-span-4">
                            <h4 className="text-white font-bold text-lg mb-6">Kontak</h4>
                            <ul className="space-y-4 text-[#A5C09B]">
                                <li className="flex items-start gap-3">
                                    <span className="text-lg">📍</span>
                                    <span>Bandung, Jawa Barat, Indonesia</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-lg">🏫</span>
                                    <span>Program Studi Sistem Informasi</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-lg">🎓</span>
                                    <span>Telkom University</span>
                                </li>
                            </ul>
                            
                            <h4 className="text-orange-500 font-medium mt-8 mb-4">Mitra Pionir:</h4>
                            <div className="flex items-center gap-3 text-[#A5C09B]">
                                <span className="text-lg">🏪</span>
                                <span>Toko Roti Global Bakery, Ciwastra</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Bottom Bar */}
                    <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#3A5A30] text-[#A5C09B] text-sm">
                        <p>&copy; 2026 REMPAH - Mahasiswa Sistem Informasi, Telkom University</p>
                        <p className="mt-4 md:mt-0">
                            Dibuat dengan <span className="text-pink-500">❤️</span> untuk Indonesia
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
