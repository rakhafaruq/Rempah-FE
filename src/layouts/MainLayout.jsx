import { Outlet, Link, NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import logoRemove from "/src/assets/logo-remove.png";

export default function MainLayout() {
    const navLinkClass = ({ isActive }) => (isActive ? "text-orange-600 font-semibold transition-colors" : "text-green-800 hover:text-orange-600 font-semibold transition-colors");

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
                            Cara Kerja
                        </NavLink>
                        <NavLink to="/partners" className={navLinkClass}>
                            Mitra
                        </NavLink>
                        <NavLink to="/about" className={navLinkClass}>
                            Tentang Kami
                        </NavLink>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        <Link to="/login" className="text-green-800 hover:text-orange-600 font-semibold transition-colors hidden sm:block">
                            Masuk
                        </Link>
                        <Link to="/register" className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-700 transition-all shadow-md shadow-orange-200 flex items-center gap-1.5">
                            Bergabung
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
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
                        <div className="md:col-span-5 space-y-6">
                            <div className="flex items-center">
                                <img src={logoRemove} alt="Logo Rempah" className="h-20 w-auto object-contain brightness-0 invert opacity-90" />
                            </div>
                            <p className="leading-relaxed text-[15px] pr-10 text-[#A5C09B]">Platform B2S (Business-to-Social) yang menghubungkan donatur surplus pangan dengan relawan mahasiswa untuk membantu masyarakat rentan.</p>
                            <p className="text-orange-500 font-bold text-[15px]">"Selamatkan Berlebihnya, Sebarkan Berkahnya"</p>
                        </div>

                        <div className="md:col-span-3">
                            <h4 className="text-white font-bold text-lg mb-6">Menu</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link to="/" className="text-[#A5C09B] hover:text-white transition-colors">
                                        Beranda
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/how-it-works" className="text-[#A5C09B] hover:text-white transition-colors">
                                        Cara Kerja
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/partners" className="text-[#A5C09B] hover:text-white transition-colors">
                                        Mitra
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="text-[#A5C09B] hover:text-white transition-colors">
                                        Tentang Kami
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Kolom Kanan: Kontak */}
                        <div className="md:col-span-4">
                            <h4 className="text-white font-bold text-lg mb-6">Kontak</h4>
                            <ul className="space-y-4 text-[#A5C09B]">
                                <li className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    <span>@rempah_project</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-mail-icon lucide-mail"
                                    >
                                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                    </svg>
                                    <span>rempah.kel@gmail.com</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5" />
                                    <span>Bandung, Jawa Barat, Indonesia</span>
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
